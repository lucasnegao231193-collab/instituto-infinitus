# ⚡ Deploy Vercel - 3 Minutos

## 🚀 **PASSO A PASSO RÁPIDO**

### 1. Acesse [vercel.com](https://vercel.com)
### 2. Clique "Sign up" → Conecte com GitHub
### 3. Clique "New Project"
### 4. Selecione `instituto-infinitus`
### 5. Clique "Deploy" (sem alterar nada)

**Pronto! Seu site já está online!** 🎉

---

## 🔧 **CONFIGURAR VARIÁVEIS (Obrigatório)**

### No painel da Vercel:
1. **Projeto** → **Settings** → **Environment Variables**
2. **Adicione:**

```
NEXT_PUBLIC_SUPABASE_URL
sua-url-do-supabase

NEXT_PUBLIC_SUPABASE_ANON_KEY  
sua-chave-do-supabase

NEXT_PUBLIC_SITE_URL
https://seu-projeto.vercel.app
```

3. **Clique "Redeploy"** após adicionar

---

## 🌐 **DOMÍNIO PERSONALIZADO**

### Na Vercel:
1. **Settings** → **Domains**
2. **Add:** `institutoinfinitus.com.br`

### No seu DNS:
```
A     @     76.76.19.61
CNAME www   cname.vercel-dns.com
```

---

## ⚠️ **ATUALIZAR SUPABASE**

No painel do Supabase:
1. **Authentication** → **Settings**
2. **Site URL:** `https://institutoinfinitus.com.br`
3. **Redirect URLs:**
   - `https://institutoinfinitus.com.br/auth/callback`
   - `https://institutoinfinitus.com.br/dashboard`

---

## ✅ **RESULTADO**

- **Site online:** https://seu-projeto.vercel.app
- **Deploy automático:** Push = Deploy
- **SSL:** Automático
- **CDN:** Global
- **Analytics:** Incluído

**Tempo total: 3 minutos** ⏱️

---

## 🛠️ **SCRIPT AUTOMÁTICO**

Execute: `deploy-vercel.bat` para deploy via CLI

---

**Seu site Instituto Infinitus está no ar!** 🚀
