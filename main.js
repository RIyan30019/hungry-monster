
 const element = document.getElementsByClassName('foodResult')
for (let index = 0; index < element.length; index++) {
   
    element[index].style.display="none";
}


const GetFoodName=() =>document.getElementById('inputFood').value;

document.getElementById('searchBtn').addEventListener('click',function () {
    document.getElementById('notFound').style.display="none";
    const getFoodName=GetFoodName();
    FoodSuggestion(getFoodName);
   
})


const FoodSuggestion = name => {
    const foodTitles=[];
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
.then(res => res.json())
.then(data => {
 
   
   showResult(data);    
})
}

const showResult=titles=> {

    let foodTitle=document.getElementsByClassName('foodTitle')
    let setImg= document.getElementsByClassName("foodImg");
    const element = document.getElementsByClassName('foodResult')
    

    if (titles.meals === null) {
        document.getElementById('notFound').style.display="block";
        } 
    
    else {
        for (let i = 0; i < 8; i++) {
           setImg[i].src=titles.meals[i].strMealThumb;
           foodTitle[i].innerText=titles.meals[i].strMeal;
          
    element[i].style.display="block";
              } 
    }
    for (let   i = 0; i< element.length; i++) {
        element[i].addEventListener('click',function () {
           
            document.getElementById('mealName').innerText=titles.meals[i].strMeal;
            
            document.getElementById('recipeImg').src=titles.meals[i].strMealThumb;
            
           const setIngredients = document.getElementById('Ingredients') 
           setIngredients.innerHTML=`<li>${titles.meals[i].strIngredient1} </li> \n <li>${titles.meals[i].strIngredient2} </li> \n <li>${titles.meals[i].strIngredient3} </li> \n <li>${titles.meals[i].strIngredient4} </li> \n <li>${titles.meals[i].strIngredient5} </li> \n <li>${titles.meals[i].strIngredient6} </li> \n <li>${titles.meals[i].strIngredient7} </li> `
          



            
           document.getElementById('mealdetails').style.display='block'

        })
         
        
        
    }

}


   
   
