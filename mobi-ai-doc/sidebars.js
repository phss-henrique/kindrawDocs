// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introducao', // docs/introducao.md
      label: 'Introdução',
    },
    {
      type: 'doc',
      id: 'cronograma/cronograma',
      label: 'Cronograma',
    },
    {
      type: 'doc',
      id: 'custos/custos',
      label: 'Custos do Projeto',
    },
    {
      type: 'doc',
      id: 'equipe/equipe',
      label: 'Equipe',
    },
    {
      type: 'doc',
      id: 'melhorias-futuras/melhorias-futuras',
      label: 'Melhorias Futuras',
    },
    {
      type: 'doc',
      id: 'tecnologias-ferramentas/tecnologias-ferramentas',
      label: 'Tecnologias e Ferramentas',
    },
    {
      type: 'category',
      label: 'Arquitetura',
      collapsed: false,
      items: [
        'arquitetura/ia-extracao',
        'arquitetura/ia-noticias',
        'arquitetura/gerador-slides',
        'arquitetura/newsletter',
        'arquitetura/automacao-excel',
      ],
    },
    {
      type: 'category',
      label: 'Problema e Solução',
      collapsed: false,
      items: [
        'problema-solucao/problema-solucao',
      ],
    },
    {
      type: 'category',
      label: 'Visão Geral',
      collapsed: false,
      items: [
        'visao-geral/sobre',
      ],
    },
  ],
};

export default sidebars;
