import { React, useState } from "react";

function Hesapla() {
  const [toplam, setToplam] = useState(0);
  const [operator, setOperator] = useState(0);
  const [sayi1, setSayi1] = useState(0);
  const [sayi2, setSayi2] = useState(0);

  const atama = (e) => {
    setSayi1(Number(e.target.value));
  };

  const atama2 = (e) => {
    setSayi2(Number(e.target.value));
  };

  const getOperator = (param) => {
    setOperator(param.target.value);
  };

  const hesapla = () => {
    let sonuc=0;
    switch (operator) {
      case '+':
       sonuc=sayi1+sayi2;
        break;
        case '-':
       sonuc=sayi1-sayi2;
        break;
        case '*':
       sonuc=sayi1*sayi2;
        break;
        case '/':
       sonuc=sayi1/sayi2;
        break;
    
      default:
        sonuc="geçersiz işlem"
    }
    setToplam(sonuc);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <input placeholder="İşlem yapılacak ilk değer" type="text" onChange={atama}></input>
      <input placeholder="İşlem yapılacak ikinci değer" type="text" onChange={atama2}></input>
      <input placeholder="Yapılacak işlemi + - * / " type="text" onChange={getOperator}></input>
      <h1>{toplam}</h1>
      <button onClick={hesapla}>Eşittir</button>
    </div>
  );
}

export default Hesapla;
