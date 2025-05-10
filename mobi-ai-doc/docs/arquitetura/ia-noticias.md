---
sidebar_position: 2
title: IA de Notícias
description: Arquitetura e funcionamento da IA responsável por buscar, filtrar e resumir notícias relevantes do setor automotivo.
---

# IA de Notícias

> Esta seção apresenta o funcionamento da inteligência artificial desenvolvida para automatizar a curadoria e sumarização de notícias do setor automotivo.

## 📌 Objetivo

Automatizar a coleta, filtragem e resumo de notícias do setor automotivo, substituindo o processo manual de pesquisa e leitura, garantindo agilidade e relevância no conteúdo do Market Report (MKR).

## ⚙️ Como Funciona

A IA de Notícias segue um pipeline bem definido, baseado em APIs de notícias, filtros semânticos e modelos de linguagem avançados:

1. **Coleta de Manchetes**  
   Utiliza APIs como a NewsAPI para obter artigos recentes com base em palavras-chave (ex: "vendas", "produção", "setor automotivo").

2. **Filtragem Semântica**  
   Aplicação de critérios de relevância:
   - Presença de termos-chave do setor
   - Origem da fonte (portais confiáveis)
   - Publicações do último mês

3. **Sumarização com IA**  
   Utiliza modelos GPT (OpenAI) via LangChain para transformar textos longos em resumos informativos e objetivos.

4. **Integração com o Relatório Final**  
   Os resumos são organizados por temas e integrados automaticamente na seção de “Principais Notícias do Mês” do MKR.

## 🛠️ Tecnologias Empregadas

| Tecnologia        | Função Principal                                |
|-------------------|-------------------------------------------------|
| NewsAPI           | Coleta de notícias em tempo real                |
| OpenAI GPT-4      | Geração de resumos com linguagem natural        |
| LangChain         | Orquestração de prompts e tratamento de contexto|
| Python            | Automatização dos fluxos de integração          |

## 🎯 Benefícios para o Negócio

- **Eficiência**: Redução significativa no tempo de coleta e leitura de notícias.
- **Atualização**: Informações sempre atualizadas com base em fontes públicas e confiáveis.
- **Consistência**: Padrão de linguagem unificado nos resumos.
- **Relevância**: Foco em notícias com impacto direto no mercado de mobilidade e automóveis.

## 🔍 Próximos Passos Técnicos

- Integração com múltiplas fontes de notícia (fallback)
- Criação de um score automático de relevância
- Ajuste fino na personalização por tipo de stakeholder (ex: gestor, analista)

---

> A IA de Notícias representa o “radar” informacional do MOBI AI, garantindo que o relatório esteja sempre alinhado ao que acontece de mais relevante no setor automotivo.
