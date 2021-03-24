import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Trustless and Free',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        All identity verification evidences are public. Therefore you don't have to trust the registrar, but can independently re-verify a user's identity. The registrar is also a common-good tool provided for free.
      </>
    ),
  },
  {
    title: 'Privacy-aware',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Polkaregistry does not use any senstive data when doing verifications. We rely on trusted public-key infrastructures (for example, Estonia's eID program) to do legal name verifications. In the registry, only an URL and pre-image hash is stored, so you can choose where to publish your evidence.
      </>
    ),
  },
  {
    title: 'Up to date',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        The registrar periodically re-verify all existing verifications, making sure they are up-to-date. When you see a check mark sealed by Polkaregistry, you do not need to worry about outdated information.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Trustless and free identity registrar for Polkadot and Kulupu.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
