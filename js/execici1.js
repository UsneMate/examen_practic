function comprovarLletra(caracterPerMirar) {
    return caracterPerMirar.length === 1 && caracterPerMirar.toLowerCase() !== caracterPerMirar.toUpperCase();
  }
  
  function Comptar() {
    console.log("Comptar"); // Per debug
    const fraseComptar = document.getElementById("inputFrase").value.trim().toLowerCase();
    const esCaracter = document.getElementById("caracter").value.trim();
    const errorElement = document.getElementById("paragrafError");
  
    // Netejar missatges anteriors
    errorElement.innerHTML = "";
    const resultatPrevi = document.getElementById("resultat");
    if (resultatPrevi) resultatPrevi.remove();
  
    // Validació: Comprovar si hi ha almenys dues paraules
    const arrayParaules = fraseComptar.split(" ");
    if (arrayParaules.length < 2) {
      errorElement.innerHTML = "El text ha de tenir almenys 2 paraules.";
      return;
    }
  
    // Validació: Comprovar si el caràcter és una lletra
    if (!comprovarLletra(esCaracter)) {
      errorElement.innerHTML = "Has d'introduir un caràcter vàlid (una única lletra).";
      return;
    }
  
    // Processar la frase i cercar el caràcter
    let trobat = false;
    const ul = document.createElement("ul");
    ul.id = "resultat";
  
    for (const paraulaActual of arrayParaules) {
      for (let i = 0; i < paraulaActual.length; i++) {
        if (paraulaActual[i] === esCaracter) {
          trobat = true;
  
          // Construir la paraula amb la lletra destacada
          const paraulaModificada =
            paraulaActual.slice(0, i) +
            `<strong>${paraulaActual[i]}</strong>` +
            paraulaActual.slice(i + 1);
  
          // Afegir la paraula i la posició a la llista
          const li = document.createElement("li");
          li.innerHTML = `Paraula: ${paraulaModificada}, Posició: ${i}`;
          ul.appendChild(li);
          break;
        }
      }
    }
  
    // Mostrar els resultats o un error si no es troben coincidències
    if (trobat) {
      document.body.appendChild(ul);
    } else {
      errorElement.innerHTML = "No s'ha trobat cap paraula amb el caràcter indicat.";
    }
  }
  
  // Funció per comprovar si és una lletra (opció alternativa)
  const esLetra = (caracter) => {
    const ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii >= 65 && ascii <= 90;
  };
  
  // Opció amb un array predefinit de lletres
  const lletres = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lletres.includes("a")); // Exemple de comprovació