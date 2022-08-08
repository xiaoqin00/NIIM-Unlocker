import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '解除纸张限制',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        NIIM Unlocker 可以解除打印机对RFID芯片的依赖，以及对纸张来源的限制。
      </>
    ),
  },
  {
    title: '解锁会员功能',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        NIIM Unlocker 可以激活付费字体、实时时间等会员功能。
      </>
    ),
  },
  {
    title: '多平台支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        NIIM Unlocker 支持在 Android、iOS等多种平台工作。
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
        <h3>{title}</h3>
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
