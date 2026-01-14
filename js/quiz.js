const intrebarileMele = [
    { q: "În ce an s-a născut Newton?", a: ["1642", "1727", "1600", "1687"], c: 0 },
    { q: "Ce fruct i-ar fi căzut în cap?", a: ["Pară", "Măr", "Portocală", "Cireașă"], c: 1 },
    { q: "Ce carte celebră a scris în 1687?", a: ["Opticks", "Principia", "Dialogo", "Cosmos"], c: 1 },
    { q: "Care este prima lege a mișcării?", a: ["Acțiunea", "Inerția", "Gravitația", "Accelerația"], c: 1 },
    { q: "Unde a fost profesor Newton?", a: ["Oxford", "Harvard", "Cambridge", "Sorbona"], c: 2 },
    { q: "Ce a demonstrat folosind o prismă?", a: ["Sunetul", "Căldura", "Spectrul luminii", "Vidul"], c: 2 },
    { q: "Ce tip de telescop a inventat?", a: ["Refractor", "Radio", "Reflector", "Digital"], c: 2 },
    { q: "Newton a fost și director la...", a: ["Bancă", "Monetărie", "Școală", "Muzeu"], c: 1 },
    { q: "Ce forță ține Luna pe orbită?", a: ["Magnetică", "Electrică", "Gravitația", "Frecarea"], c: 2 },
    { q: "Unde este înmormântat?", a: ["Paris", "Westminster Abbey", "Roma", "Woolsthorpe"], c: 1 }
];

let indexIntrebareCurenta = 0;
let scor = 0;

function incarcaIntrebare() {
    const q = intrebarileMele[indexIntrebareCurenta];
    document.getElementById("intrebare-text").innerText = q.q;
    const container = document.getElementById("optiuni-container");
    container.innerHTML = "";
    
    q.a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("optiune-btn");
        btn.onclick = () => verificaRaspuns(i, btn);
        container.appendChild(btn);
    });
}

function verificaRaspuns(index, btn) {
    const corect = intrebarileMele[indexIntrebareCurenta].c;
    const butoane = document.querySelectorAll(".optiune-btn");
    butoane.forEach(b => b.disabled = true);

    if (index === corect) {
        btn.classList.add("corect");
        scor++;
    } else {
        btn.classList.add("gresit");
        butoane[corect].classList.add("corect");
    }
    document.getElementById("btn-quiz").style.display = "inline-block";
}

function urmatoareaIntrebare() {
    indexIntrebareCurenta++;
    if (indexIntrebareCurenta < intrebarileMele.length) {
        incarcaIntrebare();
        document.getElementById("btn-quiz").style.display = "none";
    } else {
        afiseazaScor();
    }
}

function afiseazaScor() {
    document.getElementById("intrebare-container").style.display = "none";
    document.getElementById("btn-quiz").style.display = "none";
    const final = document.getElementById("scor-final");
    final.style.display = "block";
    final.innerHTML = `<h3>Quiz Finalizat!</h3><p>Scorul tău: ${scor} din ${intrebarileMele.length}</p>`;
}

window.onload = () => { 
    if(document.getElementById("intrebare-text")) incarcaIntrebare(); 
};

function amesteca(array) {
    var i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}

amesteca(intrebarileMele);

for (var k = 0; k < intrebarileMele.length; k++) {
    amesteca(intrebarileMele[k].raspunsuri);
}

incarcaIntrebare();