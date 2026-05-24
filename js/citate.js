const citateNewton = [
    "Dacă am văzut mai departe decât alții, este pentru că am stat pe umerii uriașilor.",
    "Pot calcula mișcarea corpurilor cerești, dar nu și nebunia oamenilor.",
    "Adevărul este întotdeauna de găsit în simplitate, și nu în multiplicitatea și confuzia lucrurilor.",
    "Ceea ce știm este o picătură, ceea ce nu știm este un ocean.",
    "Nicio descoperire remarcabilă nu a fost făcută vreodată fără o presupunere îndrăzneață.",
    "Unitatea este varietatea, iar varietatea în unitate este legea supremă a universului.",
    "Tactul este abilitatea de a puncta un aspect fără a-ți face un dușman.",
    "Platon îmi este prieten, Aristotel îmi este prieten, dar cel mai bun prieten îmi este adevărul.",
    "Dumnezeu a creat totul după număr, greutate și măsură.",
    "Dacă am oferit publicului vreun serviciu, acesta se datorează doar gândirii răbdătoare."
];

let ultimulIndex = -1;

function schimbaCitatul() {
    const textElement = document.getElementById("text-citat");
    let indexNou;
    
    do {
        indexNou = Math.floor(Math.random() * citateNewton.length);
    } while (indexNou === ultimulIndex);

    ultimulIndex = indexNou;

    textElement.style.opacity = 0;

    setTimeout(() => {
        textElement.innerText = `"${citateNewton[indexNou]}"`;
        textElement.style.opacity = 1;
    }, 400);
}