import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Graph Visualization',
    description: (
      <>
        Visualize website structures using high-performance Sigma.js and WebGL.
        Explore neural layouts and visual hierarchies in real-time.
      </>
    ),
  },
  {
    title: 'Waterfall Discovery',
    description: (
      <>
        Intelligent crawling engine that prioritizes content through a multi-stage
        discovery process, ensuring deep and relevant data extraction.
      </>
    ),
  },
  {
    title: 'RAG Intelligence',
    description: (
      <>
        A powerful chatbot grounded in your scraped content. Ask questions and
        get precise answers backed by real-time documentation retrieval.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
