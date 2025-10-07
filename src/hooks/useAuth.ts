'use client'

import { useEffect, useState } from 'react'
import { User, Session, AuthError } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { Database } from '@/lib/supabase'

type Profile = Database['public']['Tables']['profiles']['Row']

interface AuthState {
  user: User | null
  profile: Profile | null
  session: Session | null
  loading: boolean
}

interface SignUpData {
  email: string
  password: string
  nome: string
  telefone?: string
  dataNascimento?: string
  cidade?: string
  estado?: string
  tipoUsuario?: 'voluntario' | 'doador' | 'beneficiario' | 'parceiro'
  aceitaNewsletter?: boolean
}

interface SignInData {
  email: string
  password: string
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    session: null,
    loading: true
  })

  useEffect(() => {
    // Verificar sessão atual
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (session?.user) {
        const profile = await getProfile(session.user.id)
        setAuthState({
          user: session.user,
          profile,
          session,
          loading: false
        })
      } else {
        setAuthState({
          user: null,
          profile: null,
          session: null,
          loading: false
        })
      }
    }

    getSession()

    // Escutar mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const profile = await getProfile(session.user.id)
          setAuthState({
            user: session.user,
            profile,
            session,
            loading: false
          })
        } else {
          setAuthState({
            user: null,
            profile: null,
            session: null,
            loading: false
          })
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Buscar perfil do usuário
  const getProfile = async (userId: string): Promise<Profile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Erro ao buscar perfil:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Erro ao buscar perfil:', error)
      return null
    }
  }

  // Cadastro
  const signUp = async (userData: SignUpData): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            nome: userData.nome,
            telefone: userData.telefone,
            data_nascimento: userData.dataNascimento,
            cidade: userData.cidade,
            estado: userData.estado,
            tipo_usuario: userData.tipoUsuario || 'voluntario',
            aceita_newsletter: userData.aceitaNewsletter || false
          }
        }
      })

      if (error) {
        return { success: false, error: getErrorMessage(error) }
      }

      // Se o usuário foi criado, criar perfil
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: userData.email,
            nome: userData.nome,
            telefone: userData.telefone || null,
            data_nascimento: userData.dataNascimento || null,
            cidade: userData.cidade || null,
            estado: userData.estado || null,
            tipo_usuario: userData.tipoUsuario || 'voluntario',
            aceita_newsletter: userData.aceitaNewsletter || false
          })

        if (profileError) {
          console.error('Erro ao criar perfil:', profileError)
          return { success: false, error: 'Erro ao criar perfil do usuário' }
        }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro inesperado no cadastro' }
    }
  }

  // Login
  const signIn = async (credentials: SignInData): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (error) {
        return { success: false, error: getErrorMessage(error) }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro inesperado no login' }
    }
  }

  // Logout
  const signOut = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        return { success: false, error: getErrorMessage(error) }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro inesperado no logout' }
    }
  }

  // Recuperar senha
  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })

      if (error) {
        return { success: false, error: getErrorMessage(error) }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro inesperado na recuperação de senha' }
    }
  }

  // Atualizar perfil
  const updateProfile = async (updates: Partial<Profile>): Promise<{ success: boolean; error?: string }> => {
    if (!authState.user) {
      return { success: false, error: 'Usuário não autenticado' }
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', authState.user.id)

      if (error) {
        return { success: false, error: getErrorMessage(error) }
      }

      // Atualizar estado local
      const updatedProfile = await getProfile(authState.user.id)
      setAuthState(prev => ({ ...prev, profile: updatedProfile }))

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro inesperado na atualização do perfil' }
    }
  }

  // Converter erros do Supabase para mensagens amigáveis
  const getErrorMessage = (error: any): string => {
    const message = error?.message || ''
    
    switch (message) {
      case 'Invalid login credentials':
        return 'E-mail ou senha incorretos'
      case 'Email not confirmed':
        return 'E-mail não confirmado. Verifique sua caixa de entrada'
      case 'User already registered':
        return 'Este e-mail já está cadastrado'
      case 'Password should be at least 6 characters':
        return 'A senha deve ter pelo menos 6 caracteres'
      case 'Invalid email':
        return 'E-mail inválido'
      case 'Signup is disabled':
        return 'Cadastro temporariamente desabilitado'
      case 'Email rate limit exceeded':
        return 'Muitas tentativas. Tente novamente em alguns minutos'
      default:
        return message || 'Erro desconhecido'
    }
  }

  return {
    user: authState.user,
    profile: authState.profile,
    session: authState.session,
    loading: authState.loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    isAuthenticated: !!authState.user
  }
}
