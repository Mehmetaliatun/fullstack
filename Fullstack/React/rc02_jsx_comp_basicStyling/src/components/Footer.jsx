// Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// JSX icerisinde degiskenler {} icerisinde gosterilir.
// Footer comp.
// Unutmayalım  =>  { "değişkenler"  ve  "js" kodları süslü içine }
const Footer = () => {
  return <footer>Copyright by ATUN, {new Date().getFullYear()}</footer>;
};

export default Footer;
