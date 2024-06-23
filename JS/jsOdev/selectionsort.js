/*
5 , 7 , 2 , 9, 6 , 1, 3 , 7    (en küçük 1)
1 , 7 , 2 , 9, 6 , 5, 3 , 7    (en küçük 2)
1 , 2 , 7 , 9, 6 , 5, 3 , 7    (en küçük 3)
1 , 2 , 3 , 9, 6 , 5, 7 , 7    (en küçük 5)
1 , 2 , 3 , 5, 6 , 9, 7 , 7    (en küçük 5)
1 , 2 , 3 , 5, 6 , 9, 7 , 7    (en küçük 6)
1 , 2 , 3 , 5, 6 , 9, 7 , 7    (en küçük 7)
1 , 2 , 3 , 5, 6 , 7,9 , 7    (en küçük 7)
1 , 2 , 3 , 5, 6 , 7,7 , 9    (en küçük 7)
*/

let dizi = [5, 7, 2, 9, 6, 1, 3, 7];
let basamak = dizi.length;

for (let i = 0; i < basamak - 1; i++) {
    let enKucuk = i;
    for (let j = i + 1; j < basamak; j++) {
        if (dizi[j] < dizi[enKucuk]){
            enKucuk = j;
        }
    }

    // En küçük elemanın konumu ile mevcut elemanın konumunu değiştir
    if (enKucuk !== i) {
        let temp = dizi[i];
        dizi[i] = dizi[enKucuk];
        dizi[enKucuk] = temp;
    }
}

console.log("Sıralı dizi:", dizi);

