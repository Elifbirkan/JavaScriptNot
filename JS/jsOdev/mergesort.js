function mergeSort(dizi) {
    if (dizi.length <= 1) {
        return dizi;
    }

    const merge = (sol, sag) => {
        let sonuc = [];
        let solIndex = 0;
        let sagIndex = 0;

        while (solIndex < sol.length && sagIndex < sag.length) {
            if (sol[solIndex] < sag[sagIndex]) {
                sonuc.push(sol[solIndex]);
                solIndex++;
            } else {
                sonuc.push(sag[sagIndex]);
                sagIndex++;
            }
        }

        return sonuc.concat(sol.slice(solIndex)).concat(sag.slice(sagIndex));
    };

    const mid = Math.floor(dizi.length / 2);
    const sol = dizi.slice(0, mid);
    const sag = dizi.slice(mid);

    return merge(mergeSort(sol), mergeSort(sag));
}

const dizi = [21, 28, 30, 24, 15, 7, 17];
const siraliDizi = mergeSort(dizi);
console.log("Merge Sort ile Sıralı Dizi: ", siraliDizi);
