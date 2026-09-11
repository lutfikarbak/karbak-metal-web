import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import VisionPage from '@/pages/VisionPage';
import SustainabilityPage from '@/pages/SustainabilityPage';
import WhyAluminiumFoilPage from '@/pages/WhyAluminiumFoilPage';
import ProductsPage from '@/pages/ProductsPage';
import ContactPage from '@/pages/ContactPage';
import KvkkPage from '@/pages/KvkkPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/why-aluminium-foil" element={<WhyAluminiumFoilPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kvkk" element={<KvkkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
