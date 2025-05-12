import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automação Inteligente',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O MOBI AI automatiza tarefas operacionais como coleta de dados,
        geração de relatórios e análises de mercado usando IA.
      </>
    ),
  },
  {
    title: 'Insights em Tempo Real',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Reduza o tempo de produção do Market Report de dias para minutos,
        obtendo dados atualizados e decisões mais ágeis.
      </>
    ),
  },
  {
    title: 'Parceria com Bosch & SENAI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Desenvolvido por alunos do SENAI com aplicação real dentro da Bosch
        Campinas, unindo inovação com impacto corporativo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
