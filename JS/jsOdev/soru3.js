let kelime= prompt("bir kelime yazın:");
let uzunluk= kelime.length;
let tersKelime="";

for(let i=uzunluk-1 ;i>=0; i--){
    tersKelime += kelime[i];
}
console.log("kelimenin tersi:", tersKelime);