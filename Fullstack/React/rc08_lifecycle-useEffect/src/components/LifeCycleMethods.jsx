//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

//! developer'larin uygulamalari daha kolay yazabilmesi icin cikmistir.

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1- Bir componentin olusturulmasinda cagirilir.
  constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    //! 3- Bir component DOM agacina eklendiginde calistirilir.
    //! İlk render sonrasi
    //! Her yasam dongusu icin bir kere calistirilir.
    console.log("Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    //! 4-) Bu metot ilk render haric diger tum render'lardan sonra cagriilir.
    //! prevProps ve prevState degerlerini parametre olarak alabilir.
    //! ilk olarak props sonra state yaziyoruz.
    console.log("Updated");
    // console.log(prevState.count);
  }

  componentWillUnmount() {
    //! 5- Bir component DOM agacindan kaldirildiktan hemen sonra cagrilir.
    console.log("Unmounted");
  }

  render() {
    //! 2- Her bir render'da cagrilir.
    console.log("Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
