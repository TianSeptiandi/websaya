import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const db = getDatabase (initializeApp({
      apiKey: "AIzaSyBH9fdaDioSIBohv04Nwn5UsB-Wh8Q8AaU",
    authDomain: "latihan2-ba4c5.firebaseapp.com",
    projectId: "latihan2-ba4c5",
    storageBucket: "latihan2-ba4c5.firebasestorage.app",
    messagingSenderId: "515994512533",
    appId: "1:515994512533:web:7bdd166157ac92f398ff9c"

}));

const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");
const ttl = document.getElementById("ttl");
const simpan = document.getElementById("simpan");
const daftar = document.getElementById("daftar");

const dataref = ref(db,"dosen");

simpan.onclick = () =>{
    
 // console.log(nama.value,nama2.value);

push (dataref,{
   nama : nama.value,
   alamat : alamat.value,
   ttl : ttl.value,
});
//console.log();
   nama.value = "";
   alamat.value="";
   ttl.value=";"
};

onValue(dataref, snap => {
  daftar.innerHTML = "";
  snap.forEach(h=> {
     const data = h.val();
    daftar.innerHTML +=`<li>${data.nama}</li>
    <li>${data.alamat}</li>
     <li>${data.ttl}</li>
    `;
});
});
