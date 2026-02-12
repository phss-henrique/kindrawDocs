---
sidebar_position: 1
title: IA de Extração
description: Visão detalhada da arquitetura da Inteligência Artificial Generativa responsável pela identificação e extração de dados de relatórios do setor automotivo.
---

# IA de Extração
# Documentação Técnica – Projeto MOBI AI  
## Extração de Dados com Inteligência Artificial Generativa

Este documento descreve a arquitetura, funcionamento e requisitos do sistema de extração de dados desenvolvido no âmbito do projeto **MOBI AI**, voltado para a análise automatizada de cartas de associações automobilísticas brasileiras e argentinas.

---

## Objetivo

A ferramenta de extração de dados do projeto MOBI AI é responsável por analisar cartas em PDF de associações do setor automotivo e extrair informações relevantes para inserção automática em uma base de dados no formato Excel.  
Este processo é realizado utilizando um **modelo de Inteligência Artificial Generativa (GenAI)** da OpenAI, em conjunto com scripts Python e bibliotecas especializadas em leitura de PDFs.

---

## Tecnologias Utilizadas

- **Python** como linguagem principal
- **pdfplumber** e **tabula-py** para leitura e extração de dados de PDFs
- **FastAPI** para criação da API REST e integração com o frontend
- **OpenAI GPT-4o-mini** (via Azure) para análise textual e interpretação dos documentos
- **Excel** como formato final de banco de dados

---

## Estrutura do Projeto

```plaintext
| — api/
|     | — endpoints.py                   # Rotas da API
| — database/                            # Base de dados
| — models/                              # Modelos de dados
| — prompts/
|     | — prompts_acara.py
|     | — prompts_adefa.py
|     | — prompts_anfavea.py
|     | — prompts_fenabrave.py
| — services/
|     | — excel_generator.py             # Geração da planilha Excel
|     | — pdf_extractor_acara.py
|     | — pdf_extractor_adefa.py
|     | — pdf_extractor_anfavea.py
|     | — pdf_extractor_fenabrave.py
| — azure_llm.py                         # Interface com o modelo da OpenAI via Azure
| — favoritos.db                         # Banco de dados local
| — main.py                              # Ponto de entrada da aplicação
| — requirements.txt                     # Dependências do projeto
```
ATENÇÃO: Outros arquivos complementares à plataforma MOBI AI podem existir, mas não fazem parte direta do processo de extração de dados.

## Ambiente de Desenvolvimento
### Pré-requisitos
- Python 3.11.9 ou superior
- Java 17 ou superior (necessário para o funcionamento do tabula-py)

### Instalação de Dependências
Execute dentro do ambiente virtual do projeto:

```terminal
pip install -r requirements.txt
```

### Execução Local
Para iniciar a aplicação localmente:
```terminal
py main.py
```

## Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
```.env
AZURE_OPENAI_API_KEY=chave_da_sua_api_openai
AZURE_OPENAI_ENDPOINT=https://seu-endpoint.openai.azure.com
AZURE_DEPLOYMENT_NAME=gpt-4o-mini
OPENAI_API_VERSION=2024-XX-XX  # Substitua pela versão correta da API
```

## Fluxo da Aplicação
1. O usuário acessa a plataforma web do MOBI AI e realiza o login via SSO (Single Sign-On).
2. Usuários administradores têm acesso à aba de upload de arquivos PDF.
3. Ao fazer o upload das cartas (de 1 a 5 arquivos), o frontend envia os documentos para o backend via API REST.
4. O backend processa os arquivos com base no tipo (ex: ACARA, ADEFA, ANFAVEA, FENABRAVE), envia para o modelo de IA via Azure, e extrai os dados relevantes.
5. Os dados estruturados são salvos automaticamente em um arquivo Excel.

## API de Extração
### Endpoint Principal
```endpoint.py
POST /noticias/extracao
```
Descrição:
Este endpoint recebe os arquivos PDF enviados via frontend.

Parâmetros:
  - files : Lista de 4 arquivos PDF (cartas das associações) e CSV, excel base de dados
Retorno:
  - Sucesso: Confirmação da extração e geração da planilha
  - Erro: Mensagem de falha na leitura ou autenticação

## Explicação dos Arquivos-Chave
| Arquivo               | Descrição                                      |
|-----------------------|------------------------------------------------|
| `main.py`             | Inicia a aplicação backend                      |
| `endpoints.py`        | Define as rotas HTTP da API                      |
| `pdf_extractor_*.py`  | Extratores específicos para cada associação     |
| `excel_generator.py`  | Geração e escrita no Excel com os dados extraídos |
| `prompts_*.py`        | Prompts usados para interação com o modelo GenAI|
| `azure_llm.py`        | Configuração da chamada ao modelo GPT via Azure |


## Autoria
Este processo do projeto foi desenvolvido por:  
Souza Isabella  
CaP/ETS2 - Bosch  
Contato interno: Isabella.Souza@br.bosch.com

> Este projeto é de uso interno da Bosch e segue os termos de confidencialidade definidos pelo time de inovação CaP/ETS.
