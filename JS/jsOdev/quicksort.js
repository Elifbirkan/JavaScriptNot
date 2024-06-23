function quickSort(dizi) {
    if (dizi.length <= 1) {
        return dizi;
    }

    let pivotIndex = Math.floor(dizi.length / 2);
    let pivot = dizi[pivotIndex];
    let sol = [];
    let sag = [];

    for (let i = 0; i < dizi.length; i++) {
        if (i === pivotIndex) {
            continue;
        }

        if (dizi[i] < pivot) {
            sol.push(dizi[i]);
        } else {
            sag.push(dizi[i]);
        }
    }

    return [...quickSort(sol), pivot, ...quickSort(sag)];
}

let dizi = [21, 28, 30, 24, 15, 7, 17];
let siraliDizi = quickSort(dizi);
console.log("Sıralı dizi:", siraliDizi);
