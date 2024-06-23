/*
Bir aralık belirlenir. Bu aralık genellikle dizinin yarısıdır.
Dizi, belirlenen aralıklara göre parçalara ayrılır ve her bir parça insertion sort ile sıralanır.
Aralık her adımda azaltılır ve işlem tekrarlanır.
Son adımda aralık 1 olur ve dizi neredeyse sıralanmış hale gelir.
*/


function shellSort(){
let n=dizi.length;
let ayir=Math.floor(n / 2);

while(ayir>0){
    for(let i=ayir; i<n; i++){
        let temp= dizi[i];
        let j=i;

        while(j>=ayir && dizi[j-ayir]> temp){
            dizi[j] = dizi[j-ayir];
            j= j-ayir;
        }

        dizi[j]= temp;
}

//aralığı azalt
ayir= Math.floor(ayir / 2);   
}

return dizi;
}

let dizi= [64,34,25,12,22,11,90];
let siraliDizi= shellSort();
console.log(siraliDizi);