# Video Aulas

## Criando primeiro projeto

    npm init
    npm init -y

## Instalando o Typescript no projeto

    tsc -- init

Criamos a estrutura de pastas **dist** e **src**.  
Os arquivos do TypeScript ficam na **src**, e os compilados na **dist**.

## Configurando o Typescript

    npm install --save-dev @types/node

Essa instrução lê o package.json e instala o que precisa instalar:

    npm install

    tsc -w //Executa o typescript monitorando

    node dist/index.js // Executa o node
