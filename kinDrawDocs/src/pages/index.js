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
        opacity: true,
        y: 0,
        transition: { duration: 0.6, delay }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: false, y: 20 }}
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
        opacity: true,
        y: 0,
        transition: { duration: 0.7, delay }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      className="card-mobi"
      initial={{ opacity: false, y: 30 }}
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
    hidden: { opacity: false, y: 20 },
    visible: (i) => ({
      opacity: true,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6 }
    })
  };

  // Dados dos módulos do sistema
  const modulos = [
    {
      icon: <BrainCircuit size={44} />,
      title: 'IA de Análise',
      text: 'Análise e intepretação de dados inteligente de PDFs de desenhos técnicos embalagens com modelo DINOv2 e processamento avançado de dados.'
    },
    {
      icon: <FileText size={44} />,
      title: 'IA de Otimização',
      text: 'Agrupamento por semelhança com algoritmo K-Means para auxiliar ao inferir similaridades entre desenhos técnicos resultando em maior eficiência do processo'
    },
    {
      icon: <BarChart3 size={44} />,
      title: 'Análise de Dados',
      text: 'Visualizações dinâmicas dos desenhos e seus agrupos, juntamente com a geração automatizada de apresentações de gráficos em dashboards.'
    },
    {
      icon: <Send size={44} />,
      title: 'Robustez',
      text: 'Sistema modular e escalável, que garante trablhar com muitas requisições simultâneas.'
    }
  ];

  

  // Benefícios do sistema
  const beneficios = [
    'Eficiência Operacional', 
    'Redução de Tempo', 
    'Dashboards Padronizados', 
    'Escalável', 
    'Inteligente',
    'Alta Precisão'
  ];

  return (
    <Layout
      title="KINDRAW - Análise de desenhos técnicos"
      description="Plataforma de IA para análise de desenhos técnicos de embalagens - Projeto em parceria SENAI e Bosch"
    >
      {/* Hero Section com animação mais suave */}
      <section className="hero-mobi">
        <div className="hero-container">
          <motion.div
            className="hero-logo"
            initial={{ opacity: false, y: -20 }}
            animate={{ opacity: true, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="img/logosKindraw/logoTextBranco.png" alt="Logo KINDRAW" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: false }}
            animate={{ opacity: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-tagline"
          >
            Inteligência Artificial Para Análise De Desenhos Técnicos 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: false }} 
            animate={{ opacity: true }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-description"
          >
            Plataforma corporativa que transforma processos manuais em processos automáticos
            com IA, reduzindo horas de trabalho para minutos.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: false }} 
            animate={{ opacity: true }} 
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

    
    

      {/* Módulos do Sistema com Cards Melhorados */}
      <section className="card-section">
        <AnimatedHeading>Módulos Inteligentes</AnimatedHeading>
        <motion.p
          className="section-description"
          initial={{ opacity: false }}
          whileInView={{ opacity: true }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Uma solução completa que integra diferentes tecnologias para automatizar todo o processo de inteligência.
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

      <section className="benefits-section">
        <AnimatedHeading delay={0.1}>Por que o KINDRAW?</AnimatedHeading>
        <motion.p
          className="benefits-description"
          initial={{ opacity: false }}
          whileInView={{ opacity: true }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Transforme a maneira como sua equipe analisa desenhos técnicos. Nossa plataforma entrega agrupamentos de desenhos 
          precisos e confiáveis, permitindo que seus engengeiros reduzam a necessidade de análises manuais e consigam alcançar eficiência e precisão.
        </motion.p>
        
        <div className="benefits-tags">
          {beneficios.map((b, i) => (
            <motion.span
              key={i}
              className="tag-mobi"
              initial={{ opacity: false, scale: 0.9 }}
              whileInView={{ opacity: true, scale: 1 }}
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
            { number: '01', title: 'Coleta de Dados', desc: 'Upload de PDFs e coleta de desenhos' },
            { number: '02', title: 'Processamento IA', desc: 'Extração e análise de dados com modelos de IA' },
            { number: '03', title: 'Geração de Dashboards', desc: 'Criação de visualizações e relatórios' },
            { number: '04', title: 'Agrupamento', desc: 'Agrupamento dos desenhos técnicos por grupos com alto grau de semelhança entre si' }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step"
              initial={{ opacity: false, x: -20 }}
              whileInView={{ opacity: true, x: 0 }}
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
            initial={{ opacity: false, y: 10 }} 
            whileInView={{ opacity: true, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            Explore a Documentação Completa
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: false }} 
            whileInView={{ opacity: true }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Descubra todos os detalhes técnicos, arquitetura e decisões de design que tornaram 
            o KINDRAW uma solução revolucionária para o mercado de engenheiros.
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: false }}
            whileInView={{ opacity: true }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a className="cta-button primary" href="/docs/visao-geral/sobre">
              Visão Geral do Projeto
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
