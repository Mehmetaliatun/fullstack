// İki Çeşit Component Vardır.Bunlar;
// 1-) Class Base Component  =  state  +  props  => ( rcc  +  Tab )
// 2-) Functional Component  =  props  =>  ( rfc  +  Tab )
// props = Bir compenentden başka bir componente veri aktarmak diyebiliriz
// state = Bir componentin o anki durumunu gösteren ve değişik propertilerden oluşan bir js objesidir.

// Harici bir dosta icerisinde olusturulan bir component export default ile proje icerisinde herhangi bir yerde kullanima acilmis olur. Kullanmak icin hedef dosyada import ... from "./..." ile import yapmak yeterlidir.

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
