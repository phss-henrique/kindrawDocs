// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "introducao", // ✅ certo, conforme o nome real do arquivo
      label: "Introdução",
    },
    {
      type: "doc",
      id: "cronograma/cronograma", // docs/cronograma/cronograma.md
      label: "Cronograma",
    },
    {
      type: "doc",
      id: "custos/custos", // docs/custos/custos.md
      label: "Custos do Projeto",
    },
    {
      type: "doc",
      id: "equipe/equipe", // docs/equipe/equipe.md
      label: "Equipe",
    },
    {
      type: "doc",
      id: "melhorias-futuras/melhorias-futuras", // docs/melhorias-futuras/melhorias-futuras.md
      label: "Melhorias Futuras",
    },
    {
      type: "doc",
      id: "tecnologias-ferramentas/tecnologias-ferramentas", // docs/tecnologias-ferramentas/tecnologias-ferramentas.md
      label: "Tecnologias e Ferramentas",
    },
    {
      type: "doc",
      id: "problema-solucao/problema-solucao", // docs/problema-solucao/problema-solucao.md
      label: "Problemática e Solução",
    },
    {
      type: "category",
      label: "Arquitetura",
      collapsed: false,
      items: [
        "arquitetura/ia-extracao",
        "arquitetura/ia-noticias",
        "arquitetura/gerador-slides",
        "arquitetura/newsletter",
        "arquitetura/automacao-excel",
      ],
    },
    {
      type: "category",
      label: "Visão Geral",
      collapsed: false,
      items: ["visao-geral/sobre"],
    },
  ],
};

export default sidebars;
