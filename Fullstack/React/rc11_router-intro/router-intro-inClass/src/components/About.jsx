const About = () => {
  return <div>About</div>;
};

export default About;

//BrowserRouter
//HTML 5 History API üzerine kurulmuştur. Sayfa yönlendirmelerini tutan ana bileşendir. Route yapısı kullanılacak tüm bileşenler / sayfalar BrowserRouter arasında olmak zorundadır.
//Tanımlanan Yerlere Sayfaların Render Edileceğini Bildiren component.
// En dış sarmallayıcıdır

//Routes: Konum her değiştiğinde, Routes en iyi eşleşmeyi bulmak için childları olan tüm
// alt Route öğelerine bakar ve kullanıcı arabiriminin bu dalını oluşturur.
//Route: Url pathinde gelene göre hangi sayfanın(yani hangi componentin) render
// edileceğini belirtir

// Single page application yani kısa adıyla SPA, tek HTML sayfası yükleyen bir uygulamadır ve
// uygulamanın çalışması için gerekli tüm dosyaları (JavaScript, CSS vb) içerir. Sayfa veya s
// onraki sayfalarla olan herhangi bir etkileşim için servera gidip gelmesi gerektirmez; bu d
// a sayfanın yeniden yüklenmediği anlamına gelir.
