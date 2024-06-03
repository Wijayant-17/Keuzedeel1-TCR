// Verkrijg het HTML-element met het ID "woord"
var woordElement = document.getElementById("woord");

// Verkrijg het HTML-element met het ID "betekenis"
var betekenisElement = document.getElementById("betekenis");

// Voeg een click-event listener toe aan het woordElement
woordElement.addEventListener("click", function() {
    // Controleer of de display-eigenschap van betekenisElement is ingesteld op "none"
    if (betekenisElement.style.display === "none") {
        // Als de display-eigenschap "none" is, verander de innerHTML naar "Betekenis"
        betekenisElement.innerHTML = "Betekenis"; // Hier kun je de werkelijke betekenis invullen
        // Stel de display-eigenschap van betekenisElement in op "block" om het zichtbaar te maken
        betekenisElement.style.display = "block";
    } else {
        // Stel de display-eigenschap van betekenisElement in op "block" om het zichtbaar te maken
        betekenisElement.style.display = "none";
    }
});
