import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FadeWrapper from '../Components/FadeWrapper.jsx';
import Home from '../pages/Home.jsx';
import Gallery from '../pages/Gallery.jsx';
import GalleryDetail from '../Components/GalleryDetail.jsx';
import Contact from '../pages/Contact.jsx';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
        <Route path="/gallery" element={<FadeWrapper><Gallery /></FadeWrapper>} />
        <Route path="/gallery/:category" element={<FadeWrapper><GalleryDetail /></FadeWrapper>} />
        <Route path="/contact" element={<FadeWrapper><Contact /></FadeWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}
