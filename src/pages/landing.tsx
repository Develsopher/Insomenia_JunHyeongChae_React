import React from 'react';
import { Page } from 'framework7-react';
import logo from '../assets/images/JunSINSA.gif';

const LandingPage = () => (
  <Page>
    <div className="w-full h-screen flex justify-center items-center">
      <img src={logo} alt="junsinsa-logo" className="w-96 h-96" />
    </div>
  </Page>
);

export default LandingPage;
