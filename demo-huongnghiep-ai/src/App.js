import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { PrimaryLayout } from './components';
import { PAGES } from './constants/urls/page-urls';
import { ConfigProvider } from 'antd'
import { Profile } from './pages/Profile';
import { Chat } from './pages/Chat';
import { Roadmap } from './pages/Roadmap';
import { AboutUs } from './pages/AboutUs';
import { Policy } from './pages/Policy';
import { Help } from './pages/Help';



function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter',
        },
      }}
    >
      <Router>
        <Routes>
          <Route exact path={PAGES.DASHBOARD} element={<PrimaryLayout ><Dashboard /></PrimaryLayout>} />
          <Route path={PAGES.CHAT} element={<PrimaryLayout ><Chat /></PrimaryLayout>} />
          <Route path={PAGES.CHAT+'/:slug'} element={<PrimaryLayout ><Chat /></PrimaryLayout>} />
          <Route exact path={PAGES.PROFILE} element={<PrimaryLayout ><Profile /></PrimaryLayout>} />
          <Route exact path={PAGES.ROADMAP} element={<PrimaryLayout ><Roadmap /></PrimaryLayout>} />
          <Route exact path={PAGES.ABOUT_US} element={<PrimaryLayout ><AboutUs /></PrimaryLayout>} />
          <Route exact path={PAGES.POLICY} element={<PrimaryLayout ><Policy /></PrimaryLayout>} />
          <Route exact path={PAGES.HELP} element={<PrimaryLayout ><Help /></PrimaryLayout>} />
          <Route exact path="*" element={<PrimaryLayout >Not Found</PrimaryLayout>} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
