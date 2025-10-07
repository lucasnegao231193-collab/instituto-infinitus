# 🚀 Guia de Deploy - Instituto Infinitus

Este guia te ajudará a colocar o site online e configurar seu domínio personalizado.

## 📋 Opções de Deploy

### Opção 1: Netlify (Recomendado)
### Opção 2: Vercel 
### Opção 3: GitHub Pages

---

## 🌐 **OPÇÃO 1: NETLIFY (Recomendado)**

### Passo 1: Preparar o Projeto

1. **Instale o Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Faça login no Netlify:**
```bash
netlify login
```

3. **Build do projeto:**
```bash
npm run build
```

### Passo 2: Deploy Manual

1. **Deploy inicial:**
```bash
netlify deploy --dir=.next --prod
```

2. **Ou conectar com Git (recomendado):**
```bash
netlify init
```

### Passo 3: Configurar Variáveis de Ambiente

1. No painel do Netlify, vá em **Site settings** → **Environment variables**
2. Adicione suas variáveis:

```
NEXT_PUBLIC_SUPABASE_URL = https://sua-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua-chave-anonima
NEXT_PUBLIC_SITE_URL = https://seu-dominio.com
```

### Passo 4: Configurar Domínio Personalizado

1. No painel do Netlify, vá em **Domain settings**
2. Clique em **Add custom domain**
3. Digite seu domínio: `institutoinfinitus.com.br`
4. Configure os DNS conforme instruções

---

## ⚡ **OPÇÃO 2: VERCEL (Alternativa)**

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Deploy

```bash
vercel
```

### Passo 3: Configurar Variáveis

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_SITE_URL
```

### Passo 4: Domínio Personalizado

```bash
vercel domains add institutoinfinitus.com.br
```

---

## 📱 **OPÇÃO 3: DEPLOY MANUAL STEP-BY-STEP**

Se preferir fazer tudo manualmente:

### 1. Criar Conta no Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign up"**
3. Use sua conta do GitHub/GitLab

### 2. Conectar Repositório

1. Clique em **"New site from Git"**
2. Conecte com GitHub
3. Selecione o repositório `instituto-infinitus`
4. Configure:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### 3. Configurar Build Settings

```yaml
# netlify.toml (já criado)
[build]
  publish = ".next"
  command = "npm run build"
```

### 4. Adicionar Variáveis de Ambiente

No painel do Netlify:
- **Site settings** → **Environment variables**
- Adicione todas as variáveis do `.env.local`

---

## 🌍 **CONFIGURAÇÃO DE DOMÍNIO**

### Passo 1: Registrar Domínio

Se ainda não tem um domínio:
1. **Registro.br** (para .com.br)
2. **GoDaddy** (para .com)
3. **Namecheap**
4. **Cloudflare** (recomendado)

### Passo 2: Configurar DNS

No seu provedor de DNS, configure:

```
Tipo    Nome    Valor
A       @       75.2.60.5
CNAME   www     seu-site.netlify.app
```

**Para Netlify:**
```
A       @       75.2.60.5
CNAME   www     instituto-infinitus.netlify.app
```

**Para Vercel:**
```
A       @       76.76.19.61
CNAME   www     cname.vercel-dns.com
```

### Passo 3: Configurar SSL

1. No painel do Netlify/Vercel
2. Vá em **Domain settings** → **HTTPS**
3. Ative **Force HTTPS**
4. O certificado SSL será gerado automaticamente

---

## 🔧 **CONFIGURAÇÕES ADICIONAIS**

### 1. Atualizar URLs no Supabase

1. No painel do Supabase
2. **Authentication** → **Settings**
3. Atualize:
   - **Site URL**: `https://seu-dominio.com`
   - **Redirect URLs**: 
     - `https://seu-dominio.com/auth/callback`
     - `https://seu-dominio.com/dashboard`

### 2. Configurar Redirects

O arquivo `netlify.toml` já inclui:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Headers de Segurança

Já configurados no `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Cache-Control

---

## 🚀 **DEPLOY AUTOMÁTICO**

### Configurar CI/CD

1. **Push para GitHub** → Deploy automático
2. **Pull Request** → Preview deploy
3. **Merge to main** → Deploy em produção

### GitHub Actions (Opcional)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --dir=.next --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## ✅ **CHECKLIST DE DEPLOY**

### Antes do Deploy:
- [ ] Configurar Supabase
- [ ] Testar localmente
- [ ] Configurar variáveis de ambiente
- [ ] Build sem erros

### Durante o Deploy:
- [ ] Escolher plataforma (Netlify/Vercel)
- [ ] Conectar repositório
- [ ] Configurar build settings
- [ ] Adicionar variáveis de ambiente

### Após o Deploy:
- [ ] Testar site online
- [ ] Configurar domínio personalizado
- [ ] Configurar SSL
- [ ] Atualizar URLs no Supabase
- [ ] Testar autenticação
- [ ] Configurar monitoramento

---

## 🐛 **SOLUÇÃO DE PROBLEMAS**

### Build Falha
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erro de Autenticação
- Verificar URLs no Supabase
- Conferir variáveis de ambiente
- Testar em modo incógnito

### Domínio não Funciona
- Aguardar propagação DNS (até 48h)
- Verificar configuração de DNS
- Testar com `nslookup seu-dominio.com`

---

## 📊 **MONITORAMENTO**

### Analytics
- **Google Analytics**
- **Netlify Analytics**
- **Vercel Analytics**

### Performance
- **Lighthouse**
- **GTmetrix**
- **PageSpeed Insights**

### Uptime
- **UptimeRobot**
- **Pingdom**

---

## 💰 **CUSTOS ESTIMADOS**

### Gratuito:
- **Netlify**: 100GB bandwidth/mês
- **Vercel**: 100GB bandwidth/mês
- **Supabase**: 500MB database

### Pago (se necessário):
- **Domínio**: R$ 40-80/ano
- **Netlify Pro**: $19/mês
- **Vercel Pro**: $20/mês

---

## 🎯 **PRÓXIMOS PASSOS**

1. **Escolha uma plataforma** (Netlify recomendado)
2. **Siga o guia passo a passo**
3. **Configure seu domínio**
4. **Teste todas as funcionalidades**
5. **Configure monitoramento**

**Seu site estará online em menos de 30 minutos!** 🚀
