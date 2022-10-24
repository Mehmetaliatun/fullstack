import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";

//? SSR - CSR
// react-rooter uygulamalarında server-side-routing (SSR) değil client-side-routing (CSR)  yapılıyor. yani ilk seferde bütün bilgiler kullanıcıya ham dosyalar olarak geliyor ve onun bilgisayarında parse ediliyor. Her defasında refresh olmuyor. Bir kere yüklendikten sonra hızlıca sayfa geçişi yapılabiliyor. CSR SEO açısında uygun değil, arama motorlarının işini zorlaştırıyor.  ayrıca harici kütüphaneler kullanmak gerekiyor(react-helmet gibi). CSR server üzerinden yükü alır, fakat loading-time biraz uzun olabilir.(Lazy-Loading kavramı burada devreye giriyor.)

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="contact" element={<Contact />} />
        {/* NESTED ROUTE */}
        <Route path="paths" element={<Paths />}>
          {/* <Route path="fullstack" element={<FullStack />} /> */}
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
        {/* Redirect islemleri icin Navigate componenti kullanilabilir */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* ustte useNavigate veya link to kullanilamaz cunku */}
        {/* Component seviyesi icersinde hook cagrilamaz. */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
