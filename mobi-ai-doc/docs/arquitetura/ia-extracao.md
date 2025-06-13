---
sidebar_position: 1
title: IA de Extração
description: Visão detalhada da arquitetura da Inteligência Artificial Generativa responsável pela identificação e extração de dados de relatórios do setor automotivo.
---

# IA de Extração

> Esta seção detalha a arquitetura, funcionalidades e tecnologias utilizadas na solução de extração de dados para o MOBI AI.

## Objetivo

Automatizar a leitura e extração de dados estruturados a partir de relatórios do setor automotivo em formato PDF, substituindo processos manuais e suscetíveis a erro humano.

## Como Funciona

O processo de extração automatizada é composto pelas seguintes etapas:

1. **Extração de Dados**  
   Utiliza a biblioteca tabula-py e pdfplumber do python para interpretar as tabelas presentes nos PDFs e fazer a extração delas de maneira legível e estruturada para o modelo da Inteligência Artificial.

2. **Identificação de Dados Relevantes**  
   A IA recebe um prompt detalhado para identificar padrões e campos-chave como:
   - Produção de veículos;
   - Importação e Exportação;
   - Comparativos com meses anteriores;
   - Ranking de marcas mais vendidas.

3. **Processamento e Estruturação**  
   O conteúdo extraído através das bibliotecas já vem estruturado em padronizado em estruturas tabulares.

4. **Exportação para Excel**  
   Os dados processados são organizados em planilhas Excel, compatíveis com as próximas etapas do fluxo (como geração de slides e análise de mercado). Esse processo se torna possível devido as bibliotecas python, pandas e openpyxl.

## Tecnologias Empregadas

| Tecnologia           | Função Principal                                |
|----------------------|-------------------------------------------------|
| Tabula-py e pdfplumber | Extração automática de dados de PDF             |
| Python 3.11          | Processamento de dados e automações             |
| Pandas               | Manipulação e limpeza de dados estruturados     |
| OpenPyXL             | Escrita de dados em planilhas Excel             |

## Benefícios para o Negócio

- **Agilidade**: Redução de 4 horas para 10-15 minutos.
- **Precisão**: Eliminação de falhas comuns em tarefas manuais.
- **Escalabilidade**: Facilidade para incorporar novos tipos de relatório ou campos com mínima intervenção.
- **Confiabilidade**: Resultados consistentes, com controle de qualidade e padronização dos dados.

## Próximos Passos Técnicos

- Refinamento dos modelos para melhoria de acurácia;
- Criação de um sistema de alertas para dados ausentes ou incomuns.

---

> Essa IA é o ponto de partida técnico do MOBI AI, sendo responsável por transformar documentos complexos em dados estruturados prontos para análise e tomada de decisão.
