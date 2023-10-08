//  if,if else, nested if

// let angka = prompt("masukan bilangan yang lebih dari 0");
console.log("====if====")
const angka = 2;

if (angka > 0) {
    console.log("iya benar ini adalah bilangan postitf ")
    // alert("iya benar ini adalah bilangan postitf");
}


// let baterai = prompt("masukan persentase baterai anda");
console.log("====if else====")
const baterai = 19;

if (baterai >= 50 && baterai <= 100) {
    console.log("silahkan digunakan sebaik baiknya");
    // alert("silahkan digunakan sebaik baiknya");
} else if (baterai <= 49 && baterai >= 20) {
    console.log("gunakanlah mode hemat baterai");
    // alert("gunakanlah mode hemat baterai");
} else {
    console.log("segera di cas");
    // alert("segera di cas");
}

// nested if else
let tebak = prompt("Tebak angka dari 1 - 10");

if (tebak <= 10 && tebak >= 1) {
    if (tebak == 3) {
        console.log("selamat tebakan anda benar")
        alert("selamat tebakan anda benar")
    } else if (tebak > 3) {
        console.log("kelebihan bang")
        alert("kelebihan bang, silahkan tebak ulang sampai benar")
        if (confirm("apakah anda ingin mencoba lagi?") == true) {
            location.reload(true);
        }
    } else if (tebak < 3) {
        console.log("kekurangan bang")
        alert("kekurangan bang, silahkan tebak ulang sampai benar")
        if (confirm("apakah anda ingin mencoba lagi?") == true) {
            location.reload(true);
        }
    }
} else {
    console.log("Mohon sekali lagi angka tidak kurang dari 1 dan tidak lebih dari 10");
}

// ----------------------------------------------------------------------------------------
console.log("====switch case====")
const berubah = "ultraman";

switch (berubah) {
    case "ikan cupang":
        console.log("saya berubah jadi ikan cupang");
        break;
    case "musang ekor 9":
        console.log("saya berubah jadi kyubi");
        break;
    case "ultraman":
        console.log("saya berubah jadi ultraman");
        break;
    case "power ranger":
        console.log("saya berubah jadi power ranger");
        break;
    case "tok dalang":
        console.log("saya jadi tok dalang :)");
        break;
    default:
        console.log("saya hanya manusia biasa");
        break;
}

console.log("====while====");
let pesan = "";
let i = 0;
while (i < 10) {
    pesan = "anak itu berlari sebanyak " + i;
    console.log(pesan);
    i++;
}

console.log("====do while====");
let text = "";
let a = 5;
do {
    text = "hitung mundur " + a;
    console.log(text);
    a--;
}
while (a > 0);

console.log("====function====")

function selamatPagi(name="muda", cuaca="berawan") {
    console.log(`Selamat pagi tuan, ${name}`)
    console.log(`cuaca pagi ini ${cuaca}`)
}

// selamatPagi();
selamatPagi("adhi" , "cerah");