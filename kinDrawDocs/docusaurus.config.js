// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KINDRAW - Análise de desenhos técnicos",
  tagline: "Plataforma de IA para análise de desenhos técnicos de embalagens",
  favicon: "img/logoSemLetra.png",

  // Set the production url of your site here
  url: "https://kindraw.com.br",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "bosch",
  projectName: "kindraw",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization settings
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  // Theme and site configuration
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            copyright: `© ${new Date().getFullYear()} KINDRAW - Todos os direitos reservados`,
            xslt: true,
          },
          editUrl: "https://github.com/leotaborda/kindraw/tree/main/",
          // Enforce content best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  // Plugins for enhanced functionality
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#0064B0",
          },
        ],
      },
    ],
  ],

  // Theme configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO image settings
      image: "img/mobi-ai-social-card.jpg",

      // Color mode settings
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Announcement banner for important notices
      announcementBar: {
        id: "support_project",
        content:
          '⭐️ Se você gosta do projeto KINDRAW, dê uma estrela no nosso <a target="_blank" rel="noopener noreferrer" href="https://github.com/leotaborda/mobi-ai">repositório GitHub</a>',
        backgroundColor: "#000",
        textColor: "#fff",
        isCloseable: true,
      },

      // Navbar
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Logo KINDRAW",
          src: "img/logosKindraw/logo.png",
          srcDark: "img/logosKindraw/logoTextBranco.png",
          height: 40,
        },
        items: [
          { to: "/docs/introducao", label: "Início", position: "left" },
          {
            label: "Documentação",
            position: "left",
            items: [
              { to: "/docs/visao-geral/sobre", label: "Visão Geral" },
              { to: "/docs/arquitetura/ia-extracao", label: "Arquitetura" },
              {
                to: "/docs/problema-solucao",
                label: "Problemática e Solução",
              },
              {
                to: "/docs/melhorias-futuras",
                label: "Melhorias Futuras",
              },
            ],
          },
          {
            label: "Projeto",
            position: "left",
            items: [
              { to: "/docs/equipe", label: "Equipe" },
              { to: "/docs/cronograma", label: "Cronograma" },
              { to: "/docs/custos", label: "Custos" },
            ],
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },

      // Footer
      footer: {
        style: "dark",
        logo: {
          alt: "Logo Bosch",
          src: "img/logo-empresa.png",
          href: "https://www.bosch.com.br",
          className: "footer__logo-right",
        },
        links: [
          {
            title: "Documentação",
            items: [
              { label: "Introdução", to: "/docs/introducao" },
              { label: "Visão Geral", to: "/docs/visao-geral/sobre" },
              {
                label: "Arquitetura Técnica",
                to: "/docs/arquitetura/ia-extracao",
              },
              {
                label: "Melhorias Futuras",
                to: "/docs/melhorias-futuras",
              },
            ],
          },
          {
            title: "Parceiros",
            items: [
              {
                label: "Bosch Campinas",
                href: "https://www.bosch.com.br/",
              },
              {
                label: "SENAI Roberto Mange",
                href: "https://sp.senai.br",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "LinkedIn Bosch",
                href: "https://www.linkedin.com/company/bosch/",
              },
              {
                label: "GitHub do Projeto",
                href: "https://github.com/phss-henrique/kindrawDocs",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} KINDRAW — Desenvolvido por alunos do SENAI com apoio da Bosch. Todos os direitos reservados.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["python"],
      },

      metadata: [
        {
          name: "keywords",
          content:
            "kindraw, ai, inteligência artificial, desenhos técnicos, bosch, senai",
        },
        {
          name: "description",
          content:
            "KINDRAW - Plataforma de IA para análise de desenhos técnicos",
        },
        {
          name: "author",
          content:
            "Equipe KINDRAW | Pedro Santos | Lucas Mangolin | Victor Ramos | João Borges - Bosch",
        },
      ],

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
