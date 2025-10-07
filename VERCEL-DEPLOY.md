# 🚀 Deploy na Vercel - Instituto Infinitus

A Vercel é a plataforma criada pela equipe do Next.js, oferecendo a melhor experiência para projetos React/Next.js.

## ⚡ **DEPLOY RÁPIDO (3 minutos)**

### Método 1: Interface Web (Recomendado)

1. **Acesse:** [vercel.com](https://vercel.com)
2. **Clique:** "Sign up" ou "Login"
3. **Conecte:** com sua conta GitHub
4. **Clique:** "New Project"
5. **Selecione:** repositório `instituto-infinitus`
6. **Configure:**
   - **Framework Preset:** Next.js (detectado automaticamente)
   - **Root Directory:** `./` (padrão)
   - **Build Command:** `npm run build` (padrão)
   - **Output Directory:** `.next` (padrão)
7. **Adicione variáveis de ambiente** (ver seção abaixo)
8. **Clique:** "Deploy" 🚀

### Método 2: CLI (Avançado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

---

## 🔧 **CONFIGURAÇÃO DE VARIÁVEIS**

### Na Interface da Vercel:

1. **Projeto** → **Settings** → **Environment Variables**
2. **Adicione uma por vez:**

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://sua-url.supabase.co

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY  
Value: sua-chave-anonima-aqui

Name: NEXT_PUBLIC_SITE_URL
Value: https://seu-projeto.vercel.app
```

### Via CLI:
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_SITE_URL
```

---

## 🌐 **CONFIGURAR DOMÍNIO PERSONALIZADO**

### Passo 1: Adicionar Domínio na Vercel

1. **Projeto** → **Settings** → **Domains**
2. **Add Domain:** `institutoinfinitus.com.br`
3. **Add:** `www.institutoinfinitus.com.br`

### Passo 2: Configurar DNS

No seu provedor de domínio (Registro.br, GoDaddy, etc.):

```
Tipo    Nome    Valor
A       @       76.76.19.61
CNAME   www     cname.vercel-dns.com
```

**Ou use os Nameservers da Vercel:**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Passo 3: Aguardar Propagação
- **Tempo:** 5 minutos a 48 horas
- **Verificar:** `nslookup institutoinfinitus.com.br`

---

## 📁 **CONFIGURAÇÃO DO PROJETO**

### vercel.json (Opcional)
Crie o arquivo `vercel.json` na raiz:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  },
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

---

## 🔄 **DEPLOY AUTOMÁTICO**

### Configuração Automática:
- ✅ **Push para `main`** → Deploy automático
- ✅ **Pull Request** → Preview deploy
- ✅ **Merge** → Deploy em produção

### Configurar Branches:
1. **Settings** → **Git**
2. **Production Branch:** `main`
3. **Preview Branches:** Todas

---

## ⚙️ **OTIMIZAÇÕES VERCEL**

### 1. Atualizar next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'supabase.com', 'github.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  // Otimizações Vercel
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
```

### 2. Configurar Analytics

```bash
npm install @vercel/analytics
```

Em `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🔐 **CONFIGURAR SUPABASE**

### Após Deploy, atualize no Supabase:

1. **Authentication** → **Settings**
2. **Site URL:** `https://institutoinfinitus.com.br`
3. **Redirect URLs:**
   ```
   https://institutoinfinitus.com.br/auth/callback
   https://institutoinfinitus.com.br/dashboard
   https://seu-projeto.vercel.app/auth/callback
   https://seu-projeto.vercel.app/dashboard
   ```

---

## 📊 **MONITORAMENTO VERCEL**

### Analytics Integrado:
- **Pageviews**
- **Top Pages**
- **Top Referrers**
- **Devices & Browsers**

### Performance:
- **Core Web Vitals**
- **Real User Monitoring**
- **Speed Insights**

### Logs:
- **Function Logs**
- **Build Logs**
- **Runtime Logs**

---

## 🐛 **SOLUÇÃO DE PROBLEMAS**

### Build Falha:
```bash
# Limpar e rebuildar
rm -rf .next node_modules
npm install
npm run build
```

### Domínio não Funciona:
1. Verificar configuração DNS
2. Aguardar propagação (até 48h)
3. Testar: `curl -I https://seu-dominio.com`

### Variáveis de Ambiente:
1. Verificar se começam com `NEXT_PUBLIC_`
2. Redeploy após adicionar variáveis
3. Verificar no console do navegador

### Erro 404:
1. Verificar `vercel.json` redirects
2. Conferir estrutura de pastas
3. Verificar rotas dinâmicas

---

## 💰 **PLANOS VERCEL**

### Hobby (Gratuito):
- ✅ **100GB** bandwidth/mês
- ✅ **Domínios ilimitados**
- ✅ **SSL automático**
- ✅ **Analytics básico**

### Pro ($20/mês):
- ✅ **1TB** bandwidth/mês
- ✅ **Analytics avançado**
- ✅ **Password protection**
- ✅ **Suporte prioritário**

---

## 🚀 **COMANDOS ÚTEIS**

```bash
# Ver deployments
vercel ls

# Ver logs
vercel logs

# Remover deployment
vercel rm

# Ver domínios
vercel domains

# Adicionar domínio
vercel domains add institutoinfinitus.com.br

# Ver variáveis
vercel env ls

# Redeploy
vercel --prod
```

---

## ✅ **CHECKLIST FINAL**

### Antes do Deploy:
- [ ] Código funcionando localmente
- [ ] Build sem erros (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] Supabase configurado

### Durante o Deploy:
- [ ] Repositório conectado
- [ ] Variáveis adicionadas na Vercel
- [ ] Build executado com sucesso
- [ ] Site acessível via URL da Vercel

### Após o Deploy:
- [ ] Domínio personalizado configurado
- [ ] DNS configurado
- [ ] SSL ativo (HTTPS)
- [ ] URLs atualizadas no Supabase
- [ ] Autenticação funcionando
- [ ] Analytics configurado

---

## 🎯 **RESULTADO FINAL**

Seu site estará disponível em:
- ✅ **https://seu-projeto.vercel.app** (imediato)
- ✅ **https://institutoinfinitus.com.br** (após DNS)

**Performance esperada:**
- ⚡ **Loading:** < 1s
- 📱 **Mobile-friendly:** 100%
- 🔒 **SSL:** A+
- 🌍 **CDN:** Global

---

**Pronto para começar? Siga o guia passo a passo!** 🚀
