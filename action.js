const mealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

mealBtn.addEventListener('click',
()=>{
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(res=>{
    createMeal(res.meals[0]);
})
});

function createMeal(meal){
    const ingredients = [];
    for(let i=1;i<=20;i++){
        if(meal[`strIngredients${i}`]){
            ingredients.push(`${meal[`strIngredients${i}`]} - 
            ${meal[`strMeasure${i}`]}`
            )
        }
        else{
            break;
        }
    }
    mealContainer.innerHTML = `
    <div class="row">
        <div class="columnfive">
            <img src="${meal.strMealThumb}" alt="Meal img"/>
            <p><strong>Category:</strong>${meal.strCategory}</p>
            <p><strong>Tags:</strong>${meal.strTags.split(',').join(', ')}</p>
            <p><strong>Area:</strong>${meal.strArea}</p>

            <h5>Ingredients:</h5>
            <ul>
             ${ingredients.map(ingredients=>
                `<li>${ingredient}</li>`
                ).join('')}
            </ul>
            </div>
        <div class="column seven">
            <h4>${meal.strMeal}</h4>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="row">
        <h5>You can Refer Video </h5>
          <div class="videoWrapper">
          <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
           </div>
        </div>
    `;
    
}
