---
sidebar_position: 3
title: Gerador de Slides
description: Arquitetura do componente responsável pela geração automática de apresentações em PowerPoint para o Market Report.
---

# Gerador de Slides

> Este módulo automatiza a criação de apresentações corporativas a partir dos dados extraídos e tratados pelo MOBI AI, garantindo agilidade, padronização visual e profissionalismo nas entregas.

## 📌 Objetivo

Converter os dados estruturados do relatório de mercado em uma apresentação visualmente coerente, seguindo o padrão da Bosch e otimizando o tempo de produção do MKR.

## ⚙️ Como Funciona

O gerador de slides executa um processo em etapas, baseado em dados previamente organizados no Excel:

1. **Leitura dos Dados**  
   Consome arquivos Excel com os dados de produção, vendas e tendências.

2. **Estruturação dos Slides**  
   Define o esqueleto da apresentação:
   - Slide de capa
   - Sumário
   - Seções temáticas: vendas, produção, comparativos, notícias

3. **Preenchimento de Conteúdo**  
   Gera gráficos, tabelas e textos utilizando bibliotecas Python específicas para PowerPoint.

4. **Estilização com Identidade Visual**  
   Aplica cores, fontes e layout compatíveis com o padrão corporativo definido (azul e verde: confiança e inovação).

## 🛠️ Tecnologias Empregadas

| Tecnologia       | Função Principal                                 |
|------------------|--------------------------------------------------|
| Python (python-pptx) | Criação e manipulação de arquivos .pptx        |
| Pandas            | Leitura e preparação dos dados                   |
| Matplotlib        | Geração de gráficos incorporados                 |
| Identidade Visual | Aplicação de estilos e template padrão da Bosch  |

## 🎯 Benefícios para o Negócio

- **Economia de Tempo**: Automatiza uma tarefa que antes levava horas ou dias.
- **Padronização**: Todos os relatórios seguem a mesma identidade visual e estrutura.
- **Flexibilidade**: Permite alterações rápidas e regeneração automática de slides.
- **Profissionalismo**: Resultados visuais prontos para reuniões executivas.

## 🔍 Próximos Passos Técnicos

- Geração dinâmica de gráficos interativos
- Suporte para exportação em PDF com metadados
- Customização de conteúdo por área ou perfil de usuário

---

> O gerador de slides transforma dados em narrativas visuais, facilitando a compreensão e a apresentação estratégica do Market Report para tomadores de decisão.
