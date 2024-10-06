import React from 'react'
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import ResManagers from '../components/ResManagers';
import News from '../components/News';
import Events from '../components/Events';
import Success from '../components/Success';
import Leadership from '../components/Leadership';


const Home = () => {
  return (
    <>
        <Hero />
        <Welcome />
        <ResManagers />
        <News />
        <Success />
        <Leadership />
        <Events />
    </>
  )
}

export default Home
