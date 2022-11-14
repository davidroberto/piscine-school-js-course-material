
// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}

const displayMeals = async() => {

    //je fais un appel "fetch" pour récupérer des données depuis une API
    const mealsData = await fetchMeals();

    // je cible la div dans le HTML qui possède l'id root
    const container = document.querySelector('#root');

    // je fais une boucle sur les données récupérées depuis l'API
    // grâce à la fonction map (on pourrait utiliser for ou forEach)
    mealsData.meals.map((mealData) => {

        // pour chaque recette de cuisine
        // je créé un élément HTML h2
        const h2Element = document.createElement('h2');

        // je passe en titre de l'élément le nom de la recette de cuisine
        h2Element.textContent = mealData.strMeal;

        // j'insère l'élément dans la div qui a l'id #root
        container.append(h2Element);
    })
}


displayMeals();





// récupérer les données fournies par cette api
// les afficher en js dans la div avec l'id root
