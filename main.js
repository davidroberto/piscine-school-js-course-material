// on cible le bouton (querySelector)
const btn = document.querySelector('.js-btn');

// ajouter un event listener (addEventListener 'click')
btn.addEventListener('click', () => {

    // on cible le titre (querySelector)
    const title = document.querySelector('.js-title');

    // on modifie son contenu avec par exemple innerHtml ou text https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
    title.textContent = "C'est cliqué";

})




