var ilkİki;
var sonİki;
var asilSayi;
for(sayi=999; sayi<=9999; sayi++){
    ilkİki = Math.floor(sayi / 100);
    sonİki = sayi % 100; 
    asilSayi = (ilkİki + sonİki) **2;
    if(asilSayi == sayi) {
        console.log(sayi    + "orijinal sayidir");
    }
    asilSayi = 0;
}


