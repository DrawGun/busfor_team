/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Container = ({ children }) => (
  <Grid>
    { children }

    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon-16fa80740870ee61b75f1b3de8b49f6813a98f246b3114850a42b162bcc330f7.ico" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_152-d035324e430fd58a48444babc91c905d724259bc4c30c3d2d2735cc6fbd919e5.png" sizes="152x152" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_144-e9ee3d194d7410a9498a5d632c7c062670cb7c2f9b167a6acac010f4a794f31b.png" sizes="144x144" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_120-d28e8990f5a7fc27f8e1ed4305273a34baa4dcafcc59a0e296f27a67af93a697.png" sizes="120x120" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_114-ea9280589e1614886493de05a6250df43b77118d4c5e60927dab81c9bdbae307.png" sizes="114x114" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_72-ad2a5d49878b379f9bb0789956c4ab557844593a88366994d09c9bfccb7afbc1.png" sizes="72x72" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_64-83d591ea7d29cb611434783fa8611b61fca59aa260c6b6ab1490302eebad871a.png" sizes="64x64" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_48-11c4389e23b85d9be56368bb801ff3d34f7a75ed90bd9cd961167f0922d13f53.png" sizes="48x48" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_32-2852374b1a3baad4afd3d62511cb955281b8d97e1232a4459f2afd2f083ee11d.png" sizes="32x32" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="https://d1veuho0pmz1bg.cloudfront.net/assets/favicon_16-b9f1bd4005ba8aa659f2fadf09f21515a46ef92a95102a6022969364abebb38b.png" sizes="16x16" />
    </Helmet>
  </Grid>
);

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
