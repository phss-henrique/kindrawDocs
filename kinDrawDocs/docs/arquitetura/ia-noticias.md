---
sidebar_position: 2
title: IA de Notícias
description: Arquitetura e funcionamento da IA responsável por buscar, filtrar e resumir notícias relevantes do setor automotivo.
---

# BackEnd
# **Documentação do Projeto - Automatização da Análise de Notícias (Backend)**

## **1. Objetivo**

O objetivo deste projeto é automatizar o processo manual de análise de notícias utilizado atualmente. Atualmente, a análise de notícias exige a busca manual das notícias do último mês, a criação de resumos e a inclusão das informações no **Market Report**, tornando o processo demorado e sujeito a erros. Com a automação, buscamos tornar esse fluxo **mais rápido, simples e eficaz**, permitindo que apenas escolham quais notícias são mais relevantes após já terem sido resumidas automaticamente.

---

## **2. Requisitos Funcionais**

| Código   | Descrição                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------- |
| **RF01** | O sistema deve buscar  notícias relevantes sobre determinados temas dentro de um período.         |
| **RF03** | O sistema deve gerar um resumo automático das notícias coletadas.                                 |
| **RF04** | O resumo das notícias não pode ter opinião pessoal.                                               |
| **RF05** | O usuário deve poder revisar e editar os resumos antes da finalização.                            |
| **RF06** | O sistema deve permitir a escolha do idioma das notícias no resumo.                               |
| **RF07** | A plataforma deve fornecer um painel para visualização e gerenciamento das notícias favoritadas. |

---

## **3. Requisitos Não Funcionais**

| Código    | Descrição                                                                                     |
| --------- | --------------------------------------------------------------------------------------------- |
| **RNF01** | A aplicação deve ser de fácil usabilidade, com interface intuitiva.                           |
| **RNF02** | O tempo de resposta na busca de notícias deve ser otimizado para garantir rapidez na análise. |

---

## **4. Tecnologias Utilizadas**

- **Python** como linguagem principal
- **FastAPI** para criação da API REST e integração com o frontend
- **NewsAPI** para busca de notícias
- **OpenAI GPT-4o-mini** (via Azure) para geração de resumos e traduções
- **Angular** como framework frontend
- **SQLite** como banco de dados local

---

## **5. Estrutura do Projeto**

```plaintext
| — mobi_AI/
|    | — backend/
|        | — api/
|            | — endpoints.py              # Rotas da API (FastAPI)
|        | — database/
|            | — config.py                 # Configuração de conexão com banco de dados
|            | — favoritos.db              # Banco local com notícias favoritas
|            | — noticias.db               # Banco local de todas as notícias buscadas
|        | — models/
|            | — schemas.py                # Modelos de dados para comunicação via API
|        | — services/
|            | — buscar_noticias.py        # Busca notícias via NewsAPI
|            | — resumir_noticias.py       # Gera resumos com IA (OpenAI via Azure)
|        | — azure_llm.py                  # Conexão com OpenAI GPT via Azure
|        | — favoritos.db                  # Arquivo duplicado de banco (avaliar uso)
|        | — main.py                       # Arquivo principal para rodar a aplicação
|        | — .env                          # Variáveis de ambiente (não versionar)
|        | — requirements.txt              # Dependências do projeto
```

---

## **6. Ambiente de Desenvolvimento**

### **Pré-requisitos**

- Python 3.11 ou superior
- Conta no Azure com recurso OpenAI configurado

### **Instalação de Dependências**

Execute dentro do ambiente virtual do projeto:

```bash
pip install -r requirements.txt
```

### **Execução Local**

Para iniciar a aplicação localmente:

```bash
uvicorn main:app --reload
```

## **7. Variáveis de Ambiente (.env)**

```env
AZURE_OPENAI_API_KEY=chave_da_sua_api_openai
AZURE_OPENAI_ENDPOINT=https://seu-endpoint.openai.azure.com
AZURE_DEPLOYMENT_NAME=gpt-4o-mini
OPENAI_API_VERSION=2024-XX-XX  # Substitua pela versão correta da API
```

---

## **8. Fluxo da Aplicação**

1. O usuário acessa a aplicação e digita um tema.
2. A aplicação envia a solicitação para a API, que consulta a NewsAPI com base no tema.
3. As notícias retornadas são resumidas por um modelo de IA (GPT-4o-mini via Azure).
4. As notícias resumidas são retornadas ao frontend para exibição ao usuário.
5. O usuário pode selecionar o idioma e o sistema realiza a tradução automática do conteúdo exibido.
6. O usuário pode favoritar as notícias desejadas.
7. As notícias favoritaras podem ser listadas e publicadas na página inicial. 

---

## **9. API de Extração de Notícias**

### Endpoint Principal

```http
GET /noticias/?tema={tema}&idioma={idioma}
```

#### Parâmetros:

- `tema`: Palavra-chave usada para buscar notícias
- `idioma`: Idioma da resposta (`pt`, `en`, `es`, etc.)

#### Retorno:

```json
[
  {
    "titulo": "Título traduzido",
    "resumo": "Resumo traduzido",
    "url": "https://link-da-noticia.com",
    "imagem": "https://link-da-imagem.com"
  },
  ...
]
```

### Favoritar Notícia

```http
POST /noticias/favoritar
```

Adiciona uma notícia aos favoritos. Recebe JSON com os campos `titulo`, `resumo`, `url`, `imagem`.

### Listar Favoritas

```http
GET /noticias/favoritas
```

Retorna todas as notícias marcadas como favoritas.


## **10. Observações Importantes**

**Sobre a NewsAPI:**

- Está sendo utilizada em sua versão gratuita durante o desenvolvimento.
- Pode ser substituída futuramente por alternativas como **Bing News**, **Google News API** ou **GDELT**, conforme custos e limites.

**Sobre a IA Generativa (Azure OpenAI):**

- O modelo utilizado é o **GPT-4o-mini**, configurado no Azure.
- Ele é responsável por **resumir** e **traduzir** o conteúdo das notícias.

---

## **11. Autoria**

Este projeto foi desenvolvido por:

Lisboa Gabrielly
CaP/ETS - Bosch
Contato: gabrielly.lisboa@br.bosch.com

---

> Este projeto é de uso interno da Bosch e segue os termos de confidencialidade definidos pelo time de inovação CaP/ETS.

# FrontEnd
# **Documentação Técnica – Análise Automatizada de Notícias(Frontend)**

## **1. Visão Geral**

O frontend do projeto foi desenvolvido em **Angular 17**, utilizando **componentes standalone**. Ele serve como interface para busca, visualização, edição de notícias, traduzidas e resumidas automaticamente por IA generativa, integrando-se com um backend FastAPI.

---

## **2. Objetivo**

Fornecer uma plataforma que permita aos usuários:

- Buscar notícias por tema
- Visualizar resumos automáticos em múltiplos idiomas
- Editar conteúdo diretamente na interface
- Gerenciar as notícias relevantes e exportá-las

---

## **3. Requisitos Funcionais do Frontend**

| Código   | Descrição                                                                        |
| -------- | -------------------------------------------------------------------------------- |
| **FR01** | Permitir que o usuário insira um tema para buscar notícias.                      |
| **FR02** | Permitir que o usuário selecione o idioma das notícias.                          |
| **FR03** | Exibir as notícias em formato de cards responsivos, com título, imagem e resumo. |
| **FR04** | Permitir a edição dos resumos e títulos.                                         |
| **FR05** | Enviar atualizações ao backend após edições.                                     |

---

## **4. Tecnologias Utilizadas**

- **Angular 17** com standalone components
- **SCSS** para estilização moderna e modular
- **TypeScript** como linguagem principal
- **RxJS** para reatividade e observables
- **FormsModule** (com `ngModel`) para binding bidirecional
- Integração com **API REST** via `HttpClient`

---

## **5. Estrutura de Pastas**

```plaintext
frontend/
├── public/                       # Arquivos estáticos e imagens
│   ├── bosch.png
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── header/               # Cabeçalho reutilizável
│   │   │   ├── header.component.html
│   │   │   ├── header.component.scss
│   │   │   └── header.component.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── home/             # Página inicial
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.ts
│   │   │   │
│   │   │   └── noticias/         # Página principal com a lógica de busca
│   │   │       ├── noticias.component.html
│   │   │       ├── noticias.component.scss
│   │   │       └── noticias.component.ts
│   │   │
│   │   ├── services/             # Serviços de integração com backend
│   │   │   ├── noticias.service.ts
│   │   │   └── noticias.service.spec.ts
│   │   │
│   │   ├── app.component.ts      # Componente principal
│   │   ├── app.routes.ts         # Configuração de rotas
│   │   └── app.config.ts         # Configuração global do app
│
├── styles.scss                   # Estilos globais da aplicação
├── main.ts                       # Ponto de entrada da aplicação
├── index.html                    # HTML principal
├── angular.json                  # Configurações do Angular CLI
└── package.json                  # Dependências do projeto
```

---

## **6. Instalação e Execução**

### Instalar dependências

```bash
npm install
```

### Executar localmente

```bash
ng serve
```

---

## **7. Fluxo da Aplicação**

1. O usuário acessa a rota `/noticias`.
2. Insere um tema e seleciona o idioma desejado.
3. Clica em **Buscar**.
4. A aplicação chama o backend via `noticias.service.ts`.
5. O backend retorna as notícias com título, imagem e resumo.
6. O usuário pode editar os títulos/resumos diretamente.
7. Ao clicar em **Favoritar**, os dados são enviados de volta ao backend.

---

## **8. Componentes e Arquivos Relevantes**

| Arquivo/Componente        | Função                                                            |
| ------------------------- | ----------------------------------------------------------------- |
| `noticias.component.ts`   | Contém toda a lógica de interação com usuário e API               |
| `noticias.service.ts`     | Serviço responsável por buscar, traduzir e salvar notícias        |
| `header.component.ts`     | Componente reutilizável para o cabeçalho com branding Bosch       |
| `app.routes.ts`           | Define as rotas standalone da aplicação                           |
| `noticias.component.scss` | Estilo visual da tela de notícias (responsividade, botões, cards) |

---

## **9. Autoria**

Este projeto foi desenvolvido por:

Lisboa Gabrielly
CaP/ETS - Bosch
Contato: gabrielly.lisboa@br.bosch.com

---

> Este projeto é de uso interno da Bosch e segue os termos de confidencialidade definidos pelo time de inovação CaP/ETS.
