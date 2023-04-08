let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0;


let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoş Geldiniz."+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-Çıkış Yap";

let secim = prompt(mesaj);

switch(secim){
    case "1":

        okulPuani = Number(prompt("Okul Puaninizi Giriniz :"));
            if(okulPuani>60){
                alert("Okul puani 60'dan fazla olamaz.Lütfen Geçerli Bir Okul Puani Giriniz !")
                break;
            }
            
        turkceDogru = Number(prompt("Türkçe Doğru Sayisi :"));
        turkceYanlis = Number(prompt("Türkçe Yanlış Sayisi :"));

        matematikDogru = Number(prompt("Matematik Doğru Sayisi :"));
        matematikYanlis = Number(prompt("Matematik Yanlış Sayisi :"));

        sosyalDogru = Number(prompt("Sosyal Doğru Sayisi :"));
        sosyalYanlis = Number(prompt("Sosyal Yanlış Sayisi :"));

        fenDogru = Number(prompt("Fen Doğru Sayisi :"));
        fenYanlis = Number(prompt("Fen Yanlış Sayisi :"));

        let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
        
        puan = (kalanDogruSayisi*4)+100+okulPuani;
        alert("TYT Puaniniz : "+puan);
        break;
    case "2":
        alert("Uygulamadan çıkış yapıldı.")
        break;
    default:
        alert("Lütfen 1 yada 2 numaralı seçeneği seçiniz.")
        break;        
}