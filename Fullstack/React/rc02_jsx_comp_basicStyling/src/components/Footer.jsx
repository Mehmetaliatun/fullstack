// Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// JSX icerisinde degiskenler {} icerisinde gosterilir.
// Footer comp.

const Footer = () => {
  return <footer>Copyright by ATUN, {new Date().getFullYear()}</footer>;
};
