let rastgeleSayi = Math.floor(Math.random() * 64);
let tahminHakki = 6;

alert("0 ile 63 arasında bir sayı tuttum. Tahmin et!");

while (tahminHakki > 0) {
    let tahmin = parseInt(prompt("Tahmininiz:"));
    tahminHakki--;

    if (tahmin === rastgeleSayi) {
        alert("Tebrikler! Doğru tahmin ettiniz.");
        break;
    } else if (tahmin < rastgeleSayi) {
        alert("Daha yüksek bir sayı girin. Kalan tahmin hakkınız: " + tahminHakki);
    } else {
        alert("Daha düşük bir sayı girin. Kalan tahmin hakkınız: " + tahminHakki);
    }
}

if (tahminHakki === 0) {
    alert("Tahmin hakkınız bitti. Doğru cevap " + rastgeleSayi + " idi.");
}
