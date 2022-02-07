# Video Aulas

## Criando primeiro projeto

    npm init
    npm init -y

-y siginifica yes para todas as perguntas.  

## Instalando o Typescript no projeto

    tsc --init

Criamos a estrutura de pastas **dist** e **src**.  
Os arquivos do TypeScript ficam na **src**, e os compilados na **dist**.

## Configurando o Typescript

    npm install --save-dev @types/node

Essa instrução lê o package.json e instala o que precisa instalar:

    npm install

    tsc -w //Executa o typescript monitorando

    node dist/index.js // Executa o arquivo node

## Instalação de bibliotecas

Utilize o npmjs.com para buscar bibliotecas.

### Validator

    npm install validator

O projeto agora utiliza o validator como uma dependência.  

Podemos instalar também o TypeScript que entenderá o código da biblioteca no VSC.

    npm install --save-dev @type/validator

--save-dev significa instalar apenas em ambiente de desenvolvimento.  

### Nodemon  

O nodemom é uma biblioteca é para monitorar as modificações nos arquivos do node.  

    npm install -g nodemon  

-g siginifica instalação global, ou seja, vai funcionar em todos os projetos.  

### TS Node

Essa biblioteca executa os arquivos .ts.  

    npm install -g ts-node  

    ts-node arquivo.ts  

Agora podemos rodar o projeto, com arquivos monitorados, com apenas um comando.

    nodemon src/index.ts  
