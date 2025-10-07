@echo off
echo ========================================
echo    DEPLOY - INSTITUTO INFINITUS
echo ========================================
echo.

echo [1/5] Verificando dependencias...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERRO: Node.js/npm nao encontrado!
    echo Instale o Node.js primeiro: https://nodejs.org
    pause
    exit /b 1
)

echo [2/5] Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo [3/5] Executando build...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Falha no build!
    echo Verifique os erros acima e tente novamente.
    pause
    exit /b 1
)

echo [4/5] Verificando Netlify CLI...
where netlify >nul 2>nul
if %errorlevel% neq 0 (
    echo Netlify CLI nao encontrado. Instalando...
    call npm install -g netlify-cli
    if %errorlevel% neq 0 (
        echo ERRO: Falha ao instalar Netlify CLI!
        pause
        exit /b 1
    )
)

echo [5/5] Iniciando deploy...
echo.
echo Escolha uma opcao:
echo 1. Deploy de teste (draft)
echo 2. Deploy em producao
echo 3. Conectar com Git (recomendado)
echo.
set /p choice="Digite sua escolha (1-3): "

if "%choice%"=="1" (
    echo Fazendo deploy de teste...
    call netlify deploy --dir=.next
) else if "%choice%"=="2" (
    echo Fazendo deploy em producao...
    call netlify deploy --dir=.next --prod
) else if "%choice%"=="3" (
    echo Conectando com Git...
    call netlify init
) else (
    echo Opcao invalida!
    pause
    exit /b 1
)

echo.
echo ========================================
echo           DEPLOY CONCLUIDO!
echo ========================================
echo.
echo Proximos passos:
echo 1. Configure suas variaveis de ambiente no painel do Netlify
echo 2. Configure seu dominio personalizado
echo 3. Atualize as URLs no Supabase
echo.
echo Documentacao completa: DEPLOY-GUIDE.md
echo.
pause
