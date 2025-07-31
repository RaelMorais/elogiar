import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Developers from '../components/Developers';
import AboutProject from '../components/AboutProject';
import ProjectVideo from '../components/ProjectVideo';
import TechStack from '../components/DevTecnologies';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import VideoBanner from '../components/VideoPageInformation';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Documentação eLOGiar - Hackthon 8° Edição">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutProject />
        <ProjectVideo />
        <Developers />
        <TechStack />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Acessar documentação
          </Link>
        </div>
        <VideoBanner />
      </main>
    </Layout>
  );
}
