import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Layout from './layout/Layout';
import PortfolioSingle from './pages/PortfolioSingle';
interface Props {

}

const App = (props: Props) => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/contact' element={<Layout>
          <ContactUs />
        </Layout>} />
        <Route path='/about' element={<Layout>
          <AboutUs />
        </Layout>} />
        <Route path='/service' element={<Layout>
          <Services />
        </Layout>} />
        <Route path='/portfolio' element={<Layout>
          <Portfolio />
        </Layout>} />
        <Route path='/portfolio/:albumId' element={<Layout>
          <PortfolioSingle />
        </Layout>} />
      </Routes>
    </div>
  )
}

export default App
