
// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}

const fetchCategories = async () => {
    const categoryResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categoryData = await categoryResponse.json();

    return categoryData;
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

const displayMeals = async() => {
    const container = document.querySelector('#root');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page');
    

    if (page === "meals") {
        const mealsData = await fetchMeals();

        mealsData.meals.map((mealData) => {

            createH2Element(mealData.strMeal, container);
            createImgElement(mealData.strMealThumb, container);
            createPElement(mealData.strCategory, container);
            createPElement(mealData.strInstructions, container);
            createPElement(mealData.strTags, container);
    
            const ulElement = document.createElement('ul');
            container.append(ulElement);
    
    
            for(let i = 1; i <= 20; i++) {
    
                if (mealData["strIngredient" + i]) {
                    const liElement = document.createElement('li');
                    liElement.textContent = mealData["strIngredient" + i];
                    ulElement.append(liElement);
                }
    
            }
    
        })
    } else if(page === "categories") {
        const categoriesData = await fetchCategories();

        categoriesData.categories.map((categoryData) => {
            createH2Element(categoryData.strCategory, container);
        });
    }

    
}


displayMeals();

