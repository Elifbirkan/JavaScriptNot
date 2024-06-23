function decimalToBinary(decimal) {
    let binary = [];

    while (decimal > 0) {
        binary.unshift(decimal % 2); 
        decimal = Math.floor(decimal / 2); // Sayıyı 2'ye böl ve tam kısmını al
    }

    // Dizi içindeki elemanları birleştirerek binary stringini oluştur
    return binary.join('');
}

let decimalSayi = parseInt(prompt("Lütfen bir decimal sayı girin:"));

console.log(decimalSayi + " sayısının binary karşılığı: " + decimalToBinary(decimalSayi));
