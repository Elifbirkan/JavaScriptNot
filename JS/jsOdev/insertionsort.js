/*
Adım 1: [34, 64, 25, 12, 22, 11, 90]
Adım 2: [25, 34, 64, 12, 22, 11, 90]
Adım 3: [12, 25, 34, 64, 22, 11, 90]
Adım 4: [12, 22, 25, 34, 64, 11, 90]
Adım 5: [11, 12, 22, 25, 34, 64, 90]
Adım 6: [11, 12, 22, 25, 34, 64, 90]
*/

let dizi = [64, 34, 25, 12, 22, 11, 90];

for(let i=1; i<dizi.length; i++){
    let temp= dizi[i];
    let j=i-1;

    while(j>=0  && dizi[j]>temp){
        dizi[j+1]=dizi[j];
        j--;
}

dizi[j+1]= temp;
}

console.log("siralanmiş dizi:" , dizi);