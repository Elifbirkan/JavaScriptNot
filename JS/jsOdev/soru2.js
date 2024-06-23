var toplam
for(i=0; i<100; i++){
    for(j=0; j<i; j++){
        if(i%j==0){
            toplam += j
        }
    
    }
    if(toplam==i){
        console.log(i+ " mükemmel sayıdır");
    }
    toplam=0
}