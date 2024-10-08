/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import styles from './SecurityFeatures.module.css';

const SecurityFeatures = () => {
  const features = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17e5a970a7e4cd94f25619a56ca9ba3fdd0e4ca440384efcfa7cb26625bab1ee?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920',
      title: 'Trusted by Industry Leaders',
      description: 'With a proven track record and extensive expertise in the cryptosphere, we enhance the trust of our customers\' crypto management by partnering with reliable service providers like Fireblocks and Elliptic.'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a20fb13711c246019a50e02ba36a5f63f78c7129b1af670c530d3eccaf0fb9a0?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920',
      title: 'Biometric and 2FA Authentication',
      description: 'Biometric checks on account creation and two-factor-authentication safeguards from unauthorized breaches.'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2cba49c37c2eb52db3a2d99cc9f8c72066427a3e9256b0ea34fdde3486ecc109?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920',
      title: 'Operational Protection',
      description: 'Infrastructure and network are safeguarded by industry-leading partners, guaranteeing uninterrupted operations and zero downtime.'
    }
  ];

  return (
    <section className={styles.securityFeatures}>
      <h2 className={styles.sectionTitle}>Security-First Approach</h2>
      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <img src={feature.icon} alt="" className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityFeatures;