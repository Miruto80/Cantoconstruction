import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.jsx'

import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Components/Footer.jsx';
import AnimatedRoutes from './Components/AnimatedRoutes.jsx';
import Buttonsms from './Components/ButtonSms.jsx';
import ChatBot from './Components/ChatBot.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
      <Buttonsms />
      <ChatBot />
    </BrowserRouter>
  </StrictMode>,
)
