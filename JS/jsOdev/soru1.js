let ciftToplam=0;
let tekToplam=0;
let oran;

for(i=1; i<20; i++){
    let sayi=Number(prompt("Sayi giriniz:"));
    console.log(sayi);

    if (sayi % 2 == 0){
        ciftToplam= ciftToplam+sayi;
    }
    else {
    tekToplam = tekToplam+sayi;
    }
};

oran = ciftToplam / tekToplam;
console.log(`cift sayilarin toplami: ${ciftToplam}`);
console.log(`tek sayilarin toplami: ${tekToplam}`);
console.log(`sayilarin orani: ${oran}`);