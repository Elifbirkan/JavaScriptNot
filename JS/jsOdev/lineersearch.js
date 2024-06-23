//bir dizide belirli bir öğenin bulunup bulunmadığını kontrol etmek için kullanılan basit bir arama algoritmasıdır.

function linearSearch(dizi, hedef) {
    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i] === hedef) {
            return i; // Hedef öğe bulundu, dizinin indeksini döndür
        }
    }
    return -1; // Hedef öğe bulunamadı
}

let dizi = [5, 3, 9, 7, 2, 8];
let hedef = 5;
let indeks = linearSearch(dizi, hedef);

if (indeks !== -1) {
    console.log(`${hedef} hedef öğesi ${indeks} indeksinde bulundu.`);
} else {
    console.log(`${hedef} hedef öğesi bulunamadı.`);
}
