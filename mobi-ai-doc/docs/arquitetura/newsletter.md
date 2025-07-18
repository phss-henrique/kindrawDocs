---
sidebar_position: 4
title: E-mail Newsletter
description: Arquitetura do sistema responsável pela geração e envio automatizado de newsletters com os resultados do Market Report.
---

# E-mail Newsletter
# Documentação Técnica – Projeto MOBI AI  
## Newsletter automatizado

Este documento descreve a arquitetura, funcionamento e requisitos do newsletter automatizado desenvolvido **MOBI AI** para simplificar o processo de compartilhar as últimas informações do automobilístico, e permitir um acesso prático ao buscador e ao Market Report do mês correspondente.

---

## Objetivo

O newsletter automatizado é responsável por compartilhar as principais notícias do setor automobilístico para os clientes da área M/MKR de maneira prática, reduzindo o trabalho manual e seguindo padroões de formatação e design aprovados pelo time M/MKR.

Esse processo é realizado através da linguagem de programação Python, juntamente com bibliotecas especializadas no envio de e-mails e um Excel contendo as notícias do último mês.

---

## Tecnologias Utilizadas

- **Python** como linguagem principal
- **Outlook** como meio de enviar os e-mails

---

## Estrutura do Projeto

```plaintext
|   - backend/
|       | - logo_mobi.png
|       | - news.xlsx
|       | - requirements.txt
|       | - sender.py
```

## Ambiente de Desenvolvimento
### Pré-requisitos
- Python 3.11.9 ou superior
- Outlook instalado no computador

### Instalação de Dependências
Execute dentro do ambiente virtual do projeto:

```terminal (estando o projeto no desktop)
cd desktop
cd projeto_slides_newsletter
cd mobi
cd newsletter
pip install -r requirements.txt
```

### Execução Local
Para iniciar a aplicação localmente:

```terminal (estando o projeto no desktop)
cd desktop
cd projeto_slides_newsletter
cd mobi
cd newsletter
python sender.py
```
Insira os e-mails para os quais deseja enviar o newsletter separados por vírgula
Entre no Outlook e confira se o e-mail foi enviado. Caso nada apareça, clique no botão verde para recarregar localizado no canto superior esquerdo do Outlook, e o e-mail será enviado.

## Fluxo da Aplicação
1. O sistema pega informações da planilha do Excel
2. Cada informação é formatada dentro do newsletter automaticamente
3. O newsletter é gerado seguindo os padrões aprovados pelo time M/MKR


## Explicação dos Arquivos-Chave
| Arquivo               | Descrição                                                      |
|-----------------------|----------------------------------------------------------------|
| `logo_mobi.png`       | Logo do projeto que aparece no início do newsletter            |
| `news.xlsx`           | Arquivo que contém as notícias do último mês                   |
| `requirements.txt`    | Arquivo que contém as biblioetacas a serem instaladas          |
| `sender.py`           | Arquivo principal que reúne as informações e envia o e-mail    |
|-----------------------|----------------------------------------------------------------|

## Autoria
Este processo do projeto foi desenvolvido por:  
Siqueira Julia 
CaP/ETS2 - Bosch  
Contato interno: Julia.Siqueira@br.bosch.com

## Licença
Este projeto é de uso interno da Bosch e segue os termos de confidencialidade definidos pelo time de inovação CaP/ETS.
