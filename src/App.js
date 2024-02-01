import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import React, { createContext, useState } from 'react'
import { ConfigProvider, FloatButton } from 'antd'
import { FooterComp } from './components/footer/FooterComp'
import Scroll from './hoc/Scroll'
import DataStore from './store/DataStore'
import ErrorPage from './pages/errorPage/ErrorPage'
import locale from 'antd/es/locale/ru_RU'
import { Header } from './components/header/Header'
import { MainPage } from './pages/mainPage/MainPage'
import { GarantiyaPage } from './pages/garantiyaPage/GarantiyaPage'
import { StyleProvider } from '@ant-design/cssinjs'
import 'antd/dist/reset.css'
import { ServicePage } from './pages/servicePage/ServicePage'
import { OtzyvyPage } from './pages/otzyvyPage/OtzyvyPage'
import { AktsiiPage } from './pages/aktsiiPage/AktsiiPage'
import { AboutPage } from './pages/aboutPage/AboutPage'
import { PhoneOutlined } from '@ant-design/icons'
import { ServicePremiumPage } from './pages/servicePremiumPage/ServicePremiumPage'
import ListArticlesPage from './pages/listArticlesPage/ListArticlesPage'
import UniversalArticlesPage from './pages/universalArticlesPage/UniversalArticlesPage'
import ProdazhaPage from './pages/prodazha/ProdazhaPage'
import SkupkaPage from './pages/skupkaPage/SkupkaPage'
import KalkulyatorPage from './pages/kalkulyatorPage/KalkulyatorPage'
export const Context = createContext(null)
function App() {
  const [dataApp] = useState(new DataStore())
  const [hover, setHover] = useState(false)

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <ConfigProvider
      locale={locale}
    >
      <Context.Provider
        value={{
          dataApp,
        }}
      >
        <StyleProvider hashPriority="high">
          <BrowserRouter>
            <div className="app"> 

              <FloatButton.BackTop type="primary"
                style={{ right: 'auto', left: 20, bottom: 35 }}
                icon={<PhoneOutlined className='animate-pulse rotate-[115deg] text-white' />}
              />
              <div className='fon'></div>
              <div className=''>
                <Header setHover={setHover} hover={hover} />
                <main className=''
                  onMouseEnter={handleMouseLeave}
                >
                  <Scroll>
                    <Routes>
                      <Route path='/' element={<MainPage />} />
                      <Route path='/uslugi/:link' element={<ServicePage />} />
                      <Route path='/uslugi-premium/:link' element={<ServicePremiumPage />} />
                      <Route path='/uslugi' element={<Navigate to='/' />} />
                      <Route path='/uslugi-premium' element={<Navigate to='/' />} />
                      <Route path='/aktsii-i-skidki' element={<AktsiiPage />} />
                      <Route path='/garantiya' element={<GarantiyaPage />} />
                      <Route path='/o-nas' element={<AboutPage />} />
                      <Route path='/otzyvy' element={<OtzyvyPage />} />
                      <Route path='/prodazha' element={<ProdazhaPage />} />
                      <Route path='/vykup-tehniki' element={<SkupkaPage />} />

                      <Route path='/kalkulyator-remonta/:link' element={<KalkulyatorPage />} />

                      <Route path='/dlya-klienta' element={<ListArticlesPage />} />
                      <Route path='/article/:link' element={<UniversalArticlesPage />} />
                      <Route path='*' element={<ErrorPage />} />
                    </Routes>
                  </Scroll>
                </main>
              </div>
              <FooterComp />
            </div>
          </BrowserRouter>
        </StyleProvider>
      </Context.Provider>
    </ConfigProvider>
  );
}

export default App
