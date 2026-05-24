function calculeazaFluxiunea() {
    var a = parseFloat(document.getElementById('coefA').value);
    var b = parseFloat(document.getElementById('coefB').value);
    var t_p = parseFloat(document.getElementById('punctT').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(t_p)) {
        alert("Introduceți numere valide.");
        return;
    }

    var canvas = document.getElementById('graficMate');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var offsetX = 50; var offsetY = 240; var scaleX = 40; var scaleY = 0.4;
    var pX = offsetX + (t_p * scaleX);

    ctx.fillStyle = "rgba(0, 102, 204, 0.15)"; 
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    for (let x = 0; x <= (t_p * scaleX); x++) {
        let t = x / scaleX;
        let y = a * t * t + b * t;
        let cY = offsetY - (y * scaleY);
        ctx.lineTo(offsetX + x, cY);
    }
    ctx.lineTo(pX, offsetY);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    ctx.font = "italic 12px Times New Roman";
    ctx.beginPath();
    ctx.moveTo(offsetX, 20); ctx.lineTo(offsetX, offsetY);
    ctx.lineTo(380, offsetY);
    ctx.stroke();
    
    ctx.fillStyle = "#333";
    ctx.fillText("y (fluent)", offsetX - 40, 30);
    ctx.fillText("t (timp)", 360, offsetY + 20);

    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 0; x <= 310; x++) {
        let t = x / scaleX;
        let y = a * t * t + b * t;
        let cY = offsetY - (y * scaleY);
        if (x === 0) ctx.moveTo(offsetX + x, cY); else ctx.lineTo(offsetX + x, cY);
    }
    ctx.stroke();

    var flux_p = (2 * a * t_p) + b;
    var y_p = a * t_p * t_p + b * t_p;
    var pY = offsetY - (y_p * scaleY);

    ctx.strokeStyle = '#a00';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    var len = 55;
    ctx.moveTo(pX - len, pY + (len * flux_p * scaleY / scaleX));
    ctx.lineTo(pX + len, pY - (len * flux_p * scaleY / scaleX));
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#a00';
    ctx.beginPath(); ctx.arc(pX, pY, 5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = "#a00";
    ctx.fillText("Fluxiunea (tangenta)", pX + 10, pY - 20);
    ctx.fillStyle = "#0066cc";
    ctx.fillText("Primitiva (aria)", pX / 2, offsetY - 10);

    var c1 = (a / 3).toFixed(2);
    var c2 = (b / 2).toFixed(2);
    
    document.getElementById('rezultat-calcul-box').style.display = 'block';
    document.getElementById('rezultat-calcul-box').innerHTML = `
        <h3 class="calcul-titlu">Analiză de Calcul Infinitezimal</h3>
        <p><strong>Fluent (Funcția):</strong> <em>f(t) = ${a}t² + ${b}t</em></p>
        <p><strong>Fluxiune (Derivata):</strong> <em>&dot;f(t) = ${2 * a}t + ${b}</em></p>
        <p class="primitiva-text"><strong>Primitivă (Integrala):</strong> <em>F(t) = ${c1}t³ + ${c2}t² + C</em></p>
        
        <div class="moment-box">
            La momentul <strong>t = ${t_p}</strong>, rata de schimbare (fluxiunea) este <strong>${flux_p}</strong>.
        </div>

        <p class="nota-explicativa">
            * Linia roșie întreruptă reprezintă <strong>fluxiunea</strong> în punctul ales. <br>
            Newton a demonstrat că această metodă este inversul calculării ariei (integrarea).
        </p>
    `;
}