@echo off
echo ========================================
echo    DEPLOY VERCEL - INSTITUTO INFINITUS
echo ========================================
echo.

echo [1/6] Verificando Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Instale o Node.js: https://nodejs.org
    pause
    exit /b 1
)

echo [2/6] Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo [3/6] Testando build local...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Build falhou! Corrija os erros antes de fazer deploy.
    pause
    exit /b 1
)

echo [4/6] Verificando Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Vercel CLI nao encontrado. Instalando...
    call npm install -g vercel
    if %errorlevel% neq 0 (
        echo ERRO: Falha ao instalar Vercel CLI!
        pause
        exit /b 1
    )
)

echo [5/6] Fazendo login na Vercel...
echo Sera aberto o navegador para login...
call vercel login

echo [6/6] Iniciando deploy...
echo.
echo Escolha o tipo de deploy:
echo 1. Deploy de preview (teste)
echo 2. Deploy em producao
echo 3. Deploy com configuracao personalizada
echo.
set /p choice="Digite sua escolha (1-3): "

if "%choice%"=="1" (
    echo Fazendo deploy de preview...
    call vercel
) else if "%choice%"=="2" (
    echo Fazendo deploy em producao...
    call vercel --prod
) else if "%choice%"=="3" (
    echo Configurando projeto...
    call vercel init
) else (
    echo Opcao invalida!
    pause
    exit /b 1
)

echo.
echo ========================================
echo        DEPLOY VERCEL CONCLUIDO!
echo ========================================
echo.
echo Proximos passos:
echo 1. Acesse o painel da Vercel para ver seu site
echo 2. Configure as variaveis de ambiente:
echo    - NEXT_PUBLIC_SUPABASE_URL
echo    - NEXT_PUBLIC_SUPABASE_ANON_KEY
echo    - NEXT_PUBLIC_SITE_URL
echo 3. Configure seu dominio personalizado
echo 4. Atualize as URLs no Supabase
echo.
echo Documentacao: VERCEL-DEPLOY.md
echo.
pause
