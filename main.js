
// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}

const displayMeals = async() => {
    const mealsData = await fetchMeals();
    const container = document.querySelector('#root');

    mealsData.meals.map((mealData) => {
        const h2Element = document.createElement('h2');
        h2Element.textContent = mealData.strMeal;
        container.append(h2Element);
    })
}


displayMeals();

