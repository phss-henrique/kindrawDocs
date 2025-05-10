import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { motion, useAnimation } from 'framer-motion';
import { BrainCircuit, BarChart3, Send, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Componente para títulos animados
const AnimatedHeading = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="section-heading"
    >
      {children}
    </motion.h2>
  );
};

// Componente para cards de módulos
const ModuleCard = ({ icon, title, text, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      className="card-mobi"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="card-overlay"></div>
    </motion.div>
  );
};

export default function Home() {
  // Configurações para animações escalonadas
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6 }
    })
  };

  // Dados dos módulos do sistema
  const modulos = [
    {
      icon: <BrainCircuit size={44} />,
      title: 'IA de Extração',
      text: 'Interpretação inteligente de PDFs automotivos com Azure Form Recognizer e processamento avançado de dados.'
    },
    {
      icon: <FileText size={44} />,
      title: 'IA de Notícias',
      text: 'Monitoramento contínuo de notícias do setor com GPT e NewsAPI, com análise de relevância e impacto.'
    },
    {
      icon: <BarChart3 size={44} />,
      title: 'Análise de Dados',
      text: 'Visualizações dinâmicas e geração automatizada de apresentações PowerPoint com insights estratégicos.'
    },
    {
      icon: <Send size={44} />,
      title: 'Distribuição',
      text: 'Entrega personalizada de relatórios por e-mail com estatísticas de engajamento e feedback.'
    }
  ];

  // Estatísticas de impacto
  const stats = [
    { value: '97%', label: 'Redução no tempo de produção' },
    { value: '89%', label: 'Maior consistência de dados' },
    { value: '3.5x', label: 'Aumento na produtividade' }
  ];

  // Benefícios do sistema
  const beneficios = [
    'Eficiência Operacional', 
    'Redução de Tempo', 
    'Relatórios Padronizados', 
    'Escalável', 
    'Inteligente',
    'Alta Precisão'
  ];

  return (
    <Layout
      title="MOBI AI - Inteligência Automotiva"
      description="Plataforma de IA para geração automatizada de relatórios do mercado automotivo - Projeto em parceria SENAI e Bosch"
    >
      {/* Hero Section com animação mais suave */}
      <section className="hero-mobi">
        <div className="hero-container">
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="img/logos_mobi/logo_mobi_branca.png" alt="Logo MOBI AI" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-tagline"
          >
            Inteligência Artificial para o Mercado Automotivo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-description"
          >
            Plataforma corporativa que transforma relatórios manuais em processos automáticos
            com IA, reduzindo dias de trabalho para minutos.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="/docs/introducao" className="hero-button primary">
              Acessar Documentação
              <ArrowRight size={16} />
            </a>
            <a href="/docs/visao-geral/sobre" className="hero-button secondary">
              Saiba Mais
            </a>
          </motion.div>
        </div>
        
        <div className="hero-overlay"></div>
      </section>

      {/* Estatísticas de Impacto */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-item"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={statsVariants}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Módulos do Sistema com Cards Melhorados */}
      <section className="card-section">
        <AnimatedHeading>Módulos Inteligentes</AnimatedHeading>
        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Uma solução completa que integra diferentes tecnologias para automatizar todo o processo de inteligência de mercado.
        </motion.p>
        
        <div className="card-grid">
          {modulos.map((modulo, idx) => (
            <ModuleCard
              key={idx}
              icon={modulo.icon}
              title={modulo.title}
              text={modulo.text}
              delay={0.1 * idx}
            />
          ))}
        </div>
      </section>

      {/* Por que usar o MOBI AI */}
      <section className="benefits-section">
        <AnimatedHeading delay={0.1}>Por que o MOBI AI?</AnimatedHeading>
        <motion.p
          className="benefits-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Transforme a maneira como sua equipe analisa o mercado automotivo. Nossa plataforma entrega relatórios 
          precisos e confiáveis, permitindo que seus analistas foquem na estratégia ao invés de processos manuais.
        </motion.p>
        
        <div className="benefits-tags">
          {beneficios.map((b, i) => (
            <motion.span
              key={i}
              className="tag-mobi"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <CheckCircle size={16} />
              {b}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Processo de trabalho */}
      <section className="process-section">
        <AnimatedHeading delay={0.1}>Como Funciona</AnimatedHeading>
        
        <div className="process-flow">
          {[
            { number: '01', title: 'Coleta de Dados', desc: 'Upload automático de PDFs e coleta de notícias' },
            { number: '02', title: 'Processamento IA', desc: 'Extração e análise de dados com modelos de IA' },
            { number: '03', title: 'Geração de Insights', desc: 'Criação de visualizações e relatórios' },
            { number: '04', title: 'Distribuição', desc: 'Envio automático para stakeholders' }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.5 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final Aprimorado */}
      <section className="cta-mobi">
        <div className="cta-container">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            Explore a Documentação Completa
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Descubra todos os detalhes técnicos, arquitetura e decisões de design que tornaram 
            o MOBI AI uma solução revolucionária para o mercado automotivo.
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a className="cta-button primary" href="/docs/visao-geral/sobre">
              Visão Geral do Projeto
              <ArrowRight size={16} />
            </a>
            <a className="cta-button secondary" href="/docs/arquitetura/ia-extracao">
              Ver Arquitetura Técnica
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}