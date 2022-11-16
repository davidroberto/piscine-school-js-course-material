const container = document.querySelector('#root');

const btnMeals = document.querySelector('.meals-btn');

btnMeals.addEventListener('click', () => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("page", "meals");
    history.replaceState(null, null, "?"+queryParams.toString());
    
    container.innerHTML = "";
    renderMeals();
});


const btnCategories = document.querySelector('.categories-btn');

btnCategories.addEventListener('click', () => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("page", "categories");
    history.replaceState(null, null, "?"+queryParams.toString());
    
    container.innerHTML = "";
    renderCategories();
});


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

const renderMeals = async () => {
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
}

const renderCategories = async() => {
    const categoriesData = await fetchCategories();

    categoriesData.categories.map((categoryData) => {
        createH2Element(categoryData.strCategory, container);
    });
}


const renderApp = async() => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page');
    
    if (page === "meals") {
        renderMeals();
    } else if(page === "categories") {
        renderCategories();
    } else if (!page) {
        createH2Element('Site de recettes de cuisine', container);
    } else {
        createH2Element('404 : page introuvable', container);
    }
}

renderApp();