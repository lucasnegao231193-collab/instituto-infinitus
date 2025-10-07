import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types (to be expanded based on your schema)
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          nome: string
          telefone: string | null
          data_nascimento: string | null
          cidade: string | null
          estado: string | null
          tipo_usuario: 'voluntario' | 'doador' | 'beneficiario' | 'parceiro'
          aceita_newsletter: boolean
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          nome: string
          telefone?: string | null
          data_nascimento?: string | null
          cidade?: string | null
          estado?: string | null
          tipo_usuario?: 'voluntario' | 'doador' | 'beneficiario' | 'parceiro'
          aceita_newsletter?: boolean
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          nome?: string
          telefone?: string | null
          data_nascimento?: string | null
          cidade?: string | null
          estado?: string | null
          tipo_usuario?: 'voluntario' | 'doador' | 'beneficiario' | 'parceiro'
          aceita_newsletter?: boolean
          avatar_url?: string | null
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          status: 'active' | 'completed' | 'planned'
          participants: number
          location: string
          created_at: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          date: string
          location: string
          capacity: number
          registered: number
          created_at: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          author: string
          category: string
          published_at: string
          created_at: string
        }
      }
    }
  }
}
