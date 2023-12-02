import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container landingpage-intro">
        <h1 style={{marginTop:(offset * (-0.2))}} className="hero__title">{siteConfig.title}</h1>
        <p style={{marginTop:(offset * (-0.3))}} className="hero__subtitle">{siteConfig.tagline}</p>
        <img style={{marginTop:(offset * (-0.4))}} className="landingpage-screenshot" src={require('@site/static/img/landingpage_screenshot.png').default}></img>
      </div>
    </header>
      <main>
        <div className='intro-main white'>
          <Link
            className="button button--primary button--lg intro-getstarted-button"
            to="/docs/get-started">
            Get started
          </Link>
        </div>
        <div className='intro-container white'>
          <div className='intro-item-txt align-left'>
            <h1 className='rozha-font'>import & merge</h1>
            <p>Add files via drag-n-drop to  ~/.kube/config file.</p>
          </div>
          <img className='intro-item-img' src={require('@site/static/img/landingpage_merge.png').default}></img>
        </div>

        <div className='intro-container white'>
          <img className='intro-item-img' src={require('@site/static/img/landingpage-organized.png').default}></img>
          <div className='intro-item-txt align-right'>
            <h1 className='rozha-font'>stay organized</h1>
            <p>categorise and mark your favorite contexts.</p>
          </div>
        </div>

        <div className='intro-container white'>
          <div className='intro-item-txt align-left'>
            <h1 className='rozha-font'>switch in seconds</h1>
            <p>Use the MenuBar app and switch contexts anytime.</p>
          </div>
          <img className='intro-item-img' src={require('@site/static/img/landingpage-menubar.png').default}></img>
        </div>

        <div className='intro-main white direction-column'>
          <Link
            className="button button--primary button--lg intro-getstarted-button"
            to="https://install.appcenter.ms/users/johannesott/apps/k8contextbuddy/distribution_groups/k8scontextbuddy-public">
            Download
          </Link>
          <br></br>
          <p>K8sContextBuddy is still in Beta mode. <br></br>
             <i>An error-free experience cannot be guaranteed at this point in time, please report bugs and ideas for improvement.</i> 🙏 </p>
        </div>
      </main>
    </Layout>
  );
}
