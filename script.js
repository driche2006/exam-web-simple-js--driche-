
// Événement au clic sur le bouton
document.getElementById('calculatebutton').addEventListener('click', () => {
    let quantité = prompt("veuillez saisir une quantité");
   
    const prixunitaire =300;
    let tariftotal
    if (quantité<=0 ){
        alert("veuillez entrer une quantité")
    }
    else if(quantité>=1 && quantité<=5) {
        tariftotal = quantité * prixunitaire

        alert("tariftotal:"+tariftotal);
    }
    else if(quantité>5){
        tariftotal= (quantité * prixunitaire)*0.90

        alert("tarif total est: "+tarifttotal+"$")
    }
});