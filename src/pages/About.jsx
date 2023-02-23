import React from 'react';
import { Cards } from '../components';
import { bootstrap, formik, reactJS, react_router, yarn, zustand } from '../svg';

function About() {

  const urls = {
    react: 'https://reactjs.org/',
    bootstrap: 'https://getbootstrap.com/',
    formik: 'https://formik.org/',
    router_dom: 'https://reactrouter.com/en/main',
    yarn: 'https://yarnpkg.com/',
    zustand: 'https://github.com/pmndrs/zustand'
  }

  const descriptions = {
    react: 'A JavaScript library for building user interfaces',
    bootstrap: 'Powerful, extensible, and feature-packed frontend toolkit.',
    formik: 'Formik is the worlds most popular open source form library for React and React Native.',
    router_dom: 'Components are the heart of Reacts powerful, declarative programming model. ',
    yarn: 'Yarn is a package manager that doubles down as project manager',
    zustand: 'A small, fast and scalable bearbones state-management solution using simplified flux principles.'
  }

  return (
    <div className='animate__animated animate__fadeInUp'>
      <div className='container text-center mt-5'>
        <h2>Hello my name is Kevin Bonilla</h2>
        <h4>A software engineer</h4>
        <p>I wait this app was the best for you</p>
        <div className=''>
          <p className='mt-5 animate__animated animate__fadeInUp'>
            The technologies I used were:
          </p>
          <div className='container row gap-0 row-gap-3 text-center'>
            <div className='col'>
              <Cards name={'React'} url={urls.react} image={reactJS} desc={descriptions.react}/>
              <Cards name={'Bootstrap'} url={urls.bootstrap} image={bootstrap} desc={descriptions.bootstrap}/>
            </div>
            <div className='col'>
              <Cards name={'Zustand'} url={urls.zustand} image={zustand} desc={descriptions.zustand}/>
              <Cards name={'react-router-dom'} url={urls.router_dom} image={react_router} desc={descriptions.router_dom}/>
            </div>
            <div className='col'>
            <Cards name={'Yarn'} url={urls.yarn} image={yarn} desc={descriptions.yarn}/>
            <Cards name={'Formik'} url={urls.formik} image={formik} desc={descriptions.formik}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;