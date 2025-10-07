@echo off
echo ========================================
echo  Instituto Infinitus - Setup
echo ========================================
echo.

echo Verificando Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale Node.js 18+ de https://nodejs.org
    pause
    exit /b 1
)
echo.

echo Verificando npm...
npm --version
if %errorlevel% neq 0 (
    echo ERRO: npm nao encontrado!
    pause
    exit /b 1
)
echo.

echo Instalando dependencias...
npm install
if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo  ERRO de Politica de Execucao!
    echo ========================================
    echo.
    echo Execute este comando no PowerShell como Administrador:
    echo Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo.
    echo Depois, execute este script novamente.
    pause
    exit /b 1
)
echo.

echo Criando arquivo .env.local...
if not exist .env.local (
    copy .env.example .env.local
    echo Arquivo .env.local criado! Configure suas credenciais do Supabase.
) else (
    echo Arquivo .env.local ja existe.
)
echo.

echo ========================================
echo  Instalacao Concluida!
echo ========================================
echo.
echo Para iniciar o projeto, execute:
echo   npm run dev
echo.
echo O site estara disponivel em:
echo   http://localhost:3000
echo.
pause
