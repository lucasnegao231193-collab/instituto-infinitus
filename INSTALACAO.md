# 🚀 Guia de Instalação - Instituto Infinitus

## ⚠️ IMPORTANTE: Correção de Erro do PowerShell

Se você está no Windows e recebeu o erro:
```
O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado
```

### Solução:

1. **Abra o PowerShell como Administrador**
   - Clique com botão direito no menu Iniciar
   - Selecione "Windows PowerShell (Administrador)"

2. **Execute este comando:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Digite "S" quando perguntar e pressione Enter**

4. **Feche e abra um novo PowerShell normal**

---

## 📋 Passo a Passo da Instalação

### 1. Verificar Node.js
```bash
node --version
npm --version
```
Você deve ter Node.js 18 ou superior.

### 2. Navegar até o projeto
```bash
cd C:\Users\lucas\CascadeProjects\instituto-infinitus
```

### 3. Instalar dependências
```bash
npm install
```

Isso vai instalar:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Supabase Client
- React Hook Form
- Zod (validação)
- Framer Motion
- Chart.js
- Date-fns

### 4. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`:
```bash
copy .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais do Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Executar o projeto

Modo desenvolvimento:
```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

---

## 🔧 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento na porta 3000 |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Verifica problemas no código |

---

## ✅ Verificando a Instalação

Após executar `npm run dev`, você deve ver:

```
▲ Next.js 14.2.10
- Local:        http://localhost:3000
- Ready in 2.3s
```

Acesse http://localhost:3000 e você verá:
- ✅ Header com menu de navegação
- ✅ Hero banner com gradiente verde
- ✅ Seção de Missão, Visão e Valores
- ✅ Projetos em destaque
- ✅ Depoimentos
- ✅ Call-to-Action
- ✅ Footer completo

---

## 🐛 Problemas Comuns

### Erro: "Cannot find module"
**Solução:** Execute `npm install` novamente

### Erro: "Port 3000 already in use"
**Solução:** Execute em outra porta:
```bash
npm run dev -- -p 3001
```

### Erro no PowerShell (scripts desabilitados)
**Solução:** Veja a seção "Correção de Erro do PowerShell" no topo deste arquivo

### Erro de TypeScript
**Solução:** Certifique-se que todas as dependências foram instaladas:
```bash
npm install --save-dev typescript @types/react @types/node
```

---

## 📱 Testando Responsividade

O site é totalmente responsivo. Teste em:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

Use o DevTools do navegador (F12) e o modo de dispositivo móvel.

---

## 🎨 Estrutura Visual Implementada

### Paleta de Cores
- **Sage Green:** #87A96B (cor principal)
- **Sage Green Claro:** #C1D8A9
- **Sage Green Escuro:** #6B8E23
- **Azul Corporativo:** #2F4F4F
- **Verde Vibrante:** #4CAF50
- **Laranja:** #FF9800

### Componentes UI Prontos
- ✅ Button (Primary, Secondary, Outline, Ghost, Danger)
- ✅ Card (Default, Elevated, Outlined, Gradient)
- ✅ Input (com label, erro, ícones)
- ✅ Modal (vários tamanhos)

### Seções da Página Inicial
- ✅ Hero Banner com estatísticas
- ✅ Missão, Visão e Valores
- ✅ Projetos em Destaque (com filtros)
- ✅ Depoimentos
- ✅ Call-to-Action
- ✅ Footer completo

---

## 🚀 Próximos Passos

Após a instalação funcionar:

1. **Configurar Supabase** (opcional para começar)
2. **Adicionar imagens** na pasta `public/`
3. **Customizar conteúdo** nos componentes
4. **Criar páginas internas** (Sobre, Contato, etc)
5. **Implementar formulários**
6. **Integrar sistema de autenticação**

---

## 📞 Precisa de Ajuda?

Se encontrar problemas, verifique:
1. Node.js está instalado corretamente
2. PowerShell está configurado para executar scripts
3. Todas as dependências foram instaladas
4. Não há erros no console do navegador (F12)

---

**Desenvolvido com ❤️ para o Instituto Infinitus**
