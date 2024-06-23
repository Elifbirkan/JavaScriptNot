function palindromMu(str) {
    let length = str.length;

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let kelime = prompt("Bir kelime veya cümle girin:");
if (palindromMu(kelime)) {
    console.log(kelime + " bir palindromdur.");
} else {
    console.log(kelime + " bir palindrom değildir.");
}
