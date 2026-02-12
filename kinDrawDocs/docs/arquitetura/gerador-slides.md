---
sidebar_position: 3
title: Gerador de Slides
description: Arquitetura do componente responsável pela geração automática de apresentações em PowerPoint para o Market Report.
---

# Gerador de Slides
# Documentação Técnica – Projeto MOBI AI  
## Geração automatizada de apresentação de slides

Este documento descreve a arquitetura, funcionamento e requisitos do sistema de geração automatizada de apresentação de slides desenvolvido no âmbito do projeto **MOBI AI** para simplificar o processo de obter informações e formatá-las ao inseri-las nos slides.

---

## Objetivo

O gerador de slides é responsável por gerar os a apresentação de slides do Market Report com informações advindas de planilhas do Excel que contém notícias e outras informações extraídas pela ferramenta de extração, seguindo uma formatação e design aprovados pelo time M/MKR.

Esse processo é realizado através da linguagem de programação Python, juntamente com bibliotecas especializadas em automação de apresentações de slides e outras bibliotecas próprias da linguagem.

---

## Tecnologias Utilizadas

- **Python** como linguagem principal
- **Excel** como formato final de banco de dados

---

## Estrutura do Projeto

```plaintext
|   - backend/
|       - code/
|           | - br_inventory.py
|           | - hcv_sales.py
|           | - key_economic_indicators_argentina.py
|           | - key_economic_indicators_brazil.py
|           | - lv_sales.py
|           | - lv_segment_share.py
|           | - main.py
|           | - mkt_overview_hcv_tables.py
|           | - mkt_overview_tables.py
|           | - powertrain.py
|           | - report.pptx                             
|           | - requirements.txt                        
|           | - top_sales.py           
|   
|   - database/
|       | - argentina.png                          # Imagem da bandeira da Argentina
|       | - brazil.png                             # Imagem da bandeira do Brasil
|       | - model.pptx                             # Slide mestre (que contém o design e a formatação que é seguida)
|       | - MODIFICACOES MANUAIS.xlsx              # Onde são feitas as modificações que antes aconteciam  diretamente no Power Point
|       | - news.xlsx                              # Arquivo que coloca as notícias na apresentação e no newsletter
|       | - OEM Sales.csv                          # Arquivo proveniente do PowerBI 
|       | - references.xlsx                        # Arquivo que contém informações extraídas da ferramenta de extração
|       | - Sales by Model - ano atual.csv         # Arquivo proveniente do PowerBI
|       | - Sales by Segment.csv                   # Arquivo proveniente do PowerBI
|       | - updates.xlsx                           # Arquivo específico para a seção "Maket Updates" do slide "Summary"
```

## Ambiente de Desenvolvimento
### Pré-requisitos
- Python 3.11.9 ou superior

### Instalação de Dependências
Execute dentro do ambiente virtual do projeto:

```terminal (estando o projeto no desktop)
cd desktop
cd projeto_slides_newsletter
cd mobi
cd backend
cd code
pip install -r requirements.txt
```

### Execução Local
Para iniciar a aplicação localmente:

```terminal (estando o projeto no desktop)
cd desktop
cd projeto_slides_newsletter
cd mobi
cd backend
cd code
python main.py
```

## Fluxo da Aplicação
1. O sistema pega informações das planilhas do Excel
2. Cada informação é formatada dentro da apresentação de slides automaticamente
3. A apresentação é gerada seguindo os padrões aprovados pelo time M/MKR


## Explicação dos Arquivos-Chave
| Arquivo                                 | Descrição                                                         |
|-----------------------------------------|-------------------------------------------------------------------|
| `br_inventory.py`                       | Arquivo que atualiza do slide "BR Inventory"                      |
| `hcv_sales.py`                          | Atualiza informações de diferentes slides em relação aos HCV      |
| `key_economic_indicators_argentina.py`  | Atualiza informações do slide "KEY ECONOMIC INDICATORS ARGENTINA" |
| `key_economic_indicators_brazil.py`     | Atualiza informações do slide "KEY ECONOMIC INDICATORS BRAZIL"    |
| `lv_sales.py`                           | Atualiza informações de diferentes slides em relação aos LV       |
| `lv_segment_share.py`                   | Atualiza informações de diferentes slides em relação aos LV ***   |
| `main.py`                               | Arquivo principal que gera a apresentação de slides               |
| `mkt_overview_hcv_tables.py`            | Atualiza as tabelas do slide "Market Overview for HCV"            |
| `mkt_overview_tables.py`                | Atualiza as tabelas do slide "Market Overview (BR + AR)"          |
| `powertrain.py`                         | Atualiza informações do slide "BR LV Powertrain Mix"              |
| `top_sales.py`                          | Atualiza as informações dos slides de top sales Brazil e Argentina|
|-----------------------------------------|-------------------------------------------------------------------|

## Autoria
Este processo do projeto foi desenvolvido por:  
Siqueira Julia 
CaP/ETS2 - Bosch  
Contato interno: Julia.Siqueira@br.bosch.com

## Licença
Este projeto é de uso interno da Bosch e segue os termos de confidencialidade definidos pelo time de inovação CaP/ETS.
