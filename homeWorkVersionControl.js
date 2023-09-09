// Membuat array dengan 100 nilai random antara 1 dan 50
const arrayRandom = [];
for (let i = 0; i < 100; i++) {
  arrayRandom.push(Math.floor(Math.random() * 50) + 1);
}

// Membuat dua array baru untuk nilai genap dan ganjil
const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < arrayRandom.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(arrayRandom[i]);
  } else {
    arrayGanjil.push(arrayRandom[i]);
  }
}

// Menghitung Min, Max, Total, dan Rata-rata untuk array genap
let minGenap = arrayGenap[0];
let maxGenap = arrayGenap[0];
let totalGenap = arrayGenap[0];

for (let i = 1; i < arrayGenap.length; i++) {
  if (arrayGenap[i] < minGenap) {
    minGenap = arrayGenap[i];
  }
  if (arrayGenap[i] > maxGenap) {
    maxGenap = arrayGenap[i];
  }
  totalGenap += arrayGenap[i];
}

const rataRataGenap = totalGenap / arrayGenap.length;

// Menghitung Min, Max, Total, dan Rata-rata untuk array ganjil
let minGanjil = arrayGanjil[0];
let maxGanjil = arrayGanjil[0];
let totalGanjil = arrayGanjil[0];

for (let i = 1; i < arrayGanjil.length; i++) {
  if (arrayGanjil[i] < minGanjil) {
    minGanjil = arrayGanjil[i];
  }
  if (arrayGanjil[i] > maxGanjil) {
    maxGanjil = arrayGanjil[i];
  }
  totalGanjil += arrayGanjil[i];
}

const rataRataGanjil = totalGanjil / arrayGanjil.length;

// Membandingkan hasil
let hasilPerbandingan = "";

if (minGenap > minGanjil) {
  hasilPerbandingan += "Min lebih besar array genap\n";
} else {
  hasilPerbandingan += "Min lebih besar array ganjil\n";
}

if (maxGenap > maxGanjil) {
  hasilPerbandingan += "Max lebih besar array genap\n";
} else {
  hasilPerbandingan += "Max lebih besar array ganjil\n";
}

if (totalGenap === totalGanjil) {
  hasilPerbandingan +=
    "Total memiliki nilai sama antara array genap dan ganjil\n";
} else {
  hasilPerbandingan +=
    "Total memiliki nilai berbeda antara array genap dan ganjil\n";
}

if (rataRataGenap > rataRataGanjil) {
  hasilPerbandingan += "Rata-rata lebih besar array genap\n";
} else {
  hasilPerbandingan += "Rata-rata lebih besar array ganjil\n";
}

//output 
console.log("Array Random", arrayRandom);
console.log("Array Genap", arrayGenap);
console.log("Array Ganjil", arrayGanjil);
console.log("Minimal Array Genap", minGenap);
console.log("Maxsimal Array Genap", maxGenap);
console.log("Total Array Genap", totalGenap);
console.log("Rata Rata Array Genap", rataRataGenap);
console.log("Minimal Array Ganjil", minGanjil);
console.log("Maxsimal Array Ganjil", maxGanjil);
console.log("Total Array Ganjil", totalGanjil);
console.log("Rata Rata Array Ganjil", rataRataGanjil);
console.log("Hasil Perbandingan\n", hasilPerbandingan);
