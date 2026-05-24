function genereazaHeader(titluPagina) {
    const headerContent = `
        <div class="btn-control-container">
            <button onclick="toggleDarkMode()" class="btn-theme" id="dark-mode-toggle">🌙</button>
            <button onclick="window.print()" class="btn-theme">🖨️</button>
        </div>
        <h1>Isaac Newton - ${titluPagina}</h1>
        <nav>
            <a href="index.html">Acasă</a>
            <a href="viata.html">Viața</a>
            <a href="realizari.html">Realizări</a>
            <a href="legi.html">Legile Mișcării</a>
            <a href="curiozitati.html">Curiozități</a>
        </nav>
    `;
    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = headerContent;
    }
}

const footerContent = `
    <hr>
    <p>© 2026 Atestat realizat de [YOUR NAME]</p>
    <p><strong>Resurse Academice și Biografice:</strong></p>
    <p>
        <a href="https://ro.wikipedia.org/wiki/Isaac_Newton" target="_blank">Wikipedia (RO)</a> | 
        <a href="https://www.britannica.com/biography/Isaac-Newton" target="_blank">Encyclopædia Britannica</a> |
        <a href="http://www.newtonproject.ox.ac.uk/" target="_blank">The Newton Project (Oxford)</a> | 
        <a href="https://cudl.lib.cam.ac.uk/collections/newton" target="_blank">Digital Library (Cambridge)</a> |
        <a href="https://plato.stanford.edu/entries/newton/" target="_blank">Stanford Encyclopedia of Philosophy</a>
    </p>
    <p><strong>Lecturi recomandate:</strong> James Gleick - <em>"Isaac Newton"</em>, Richard Westfall - <em>"Never at Rest"</em></p>
`;

document.addEventListener("DOMContentLoaded", function() {
    const footerElement = document.getElementById("main-footer");
    if (footerElement) {
        footerElement.innerHTML = footerContent;
    }
});