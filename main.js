
// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}

const createPElement = (textToDisplay, container) => {
    const pElement = document.createElement('p');
    pElement.textContent = textToDisplay;
    container.append(pElement);
}

const createH2Element = (textToDisplay, container) => {
    const h2Element = document.createElement('h2');
    h2Element.textContent = textToDisplay;
    container.append(h2Element);
}

const createImgElement = (imageToDisplay, container) => {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageToDisplay);
    container.append(imgElement);
}

const createUlElement = (container) => {
    const ulElement = document.createElement('ul');
    container.append(ulElement);
}


const displayMeals = async() => {
    const mealsData = await fetchMeals();
    const container = document.querySelector('#root');

    mealsData.meals.map((mealData) => {

        createH2Element(mealData.strMeal, container);
        createImgElement(mealData.strMealThumb, container);
        createPElement(mealData.strCategory, container);
        createPElement(mealData.strInstructions, container);
        createPElement(mealData.strTags, container);
        createUlElement(container);


        for(let i = 1; i <= 20; i++) {

            if (mealData["strIngredient" + i]) {
                const liElement = document.createElement('li');
                liElement.textContent = mealData["strIngredient" + i];
                ulElement.append(liElement);
            }

        }

    })
}


displayMeals();

