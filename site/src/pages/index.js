import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../contexts/DrawerContext';
import { portfolioTheme } from '../theme/portfolio';
import { ResetCSS } from 'assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/portfolio.style';

import BannerSection from '../containers/Banner';
import Navbar from '../containers/Navbar';
// import AwardsSection from '../containers/Awards';
import PortfolioShowcase from '../containers/PortfolioShowcase';
import ProcessSection from '../containers/Process';
import SkillSection from '../containers/Skill';
import CallToAction from '../containers/CallToAction';
import TestimonialSection from '../containers/Testimonial';
import ClientsSection from '../containers/Clients';
import ContactSection from '../containers/Contact';
import Footer from '../containers/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <SEO title="Portfolio | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <ProcessSection />
          <SkillSection />
          <CallToAction />
          <TestimonialSection />
          <ClientsSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
