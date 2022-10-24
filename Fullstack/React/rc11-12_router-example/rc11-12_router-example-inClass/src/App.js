import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";

//? SSR - CSR
// react-rooter uygulamalarında server-side-routing (SSR) değil client-side-routing (CSR)  yapılıyor. yani ilk seferde bütün bilgiler kullanıcıya ham dosyalar olarak geliyor ve onun bilgisayarında parse ediliyor. Her defasında refresh olmuyor. Bir kere yüklendikten sonra hızlıca sayfa geçişi yapılabiliyor. CSR SEO açısında uygun değil, arama motorlarının işini zorlaştırıyor.  ayrıca harici kütüphaneler kullanmak gerekiyor(react-helmet gibi). CSR server üzerinden yükü alır, fakat loading-time biraz uzun olabilir.(Lazy-Loading kavramı burada devreye giriyor.)

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
