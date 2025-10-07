# 🚀 Deploy Rápido - 5 Minutos

## Opção 1: Netlify (Mais Fácil)

### 1. Acesse [netlify.com](https://netlify.com)
### 2. Clique em "New site from Git"
### 3. Conecte com GitHub
### 4. Selecione o repositório `instituto-infinitus`
### 5. Configure:
```
Build command: npm run build && npm run export
Publish directory: out
```

### 6. Adicione as variáveis de ambiente:
```
NEXT_PUBLIC_SUPABASE_URL = sua-url-do-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua-chave-do-supabase
NEXT_PUBLIC_SITE_URL = https://seu-site.netlify.app
```

### 7. Deploy! 🎉

---

## Opção 2: Vercel (Alternativa)

### 1. Acesse [vercel.com](https://vercel.com)
### 2. Clique em "New Project"
### 3. Importe do GitHub
### 4. Selecione `instituto-infinitus`
### 5. Adicione as variáveis de ambiente
### 6. Deploy! 🎉

---

## Configurar Domínio Personalizado

### No Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Digite: `institutoinfinitus.com.br`
4. Configure DNS conforme instruções

### No seu provedor de DNS:
```
Tipo: A     Nome: @     Valor: 75.2.60.5
Tipo: CNAME Nome: www   Valor: seu-site.netlify.app
```

---

## ⚠️ Importante: Atualizar Supabase

Após deploy, no painel do Supabase:

1. **Authentication → Settings**
2. **Site URL**: `https://seu-dominio.com`
3. **Redirect URLs**: 
   - `https://seu-dominio.com/auth/callback`
   - `https://seu-dominio.com/dashboard`

---

## ✅ Pronto!

Seu site estará online em: `https://seu-dominio.com`

**Tempo total: 5-10 minutos** ⏱️
