
const button = document.getElementById('submit-btn').addEventListener('click',(e)=>{
    e.preventDefault();

/*     document.getElementById('error-message').innerHTML = '';
    document.getElementById('product-info').innerHTML = '';
    document.getElementById('meal-items').innerHTML = ''; */

    const inputValue = document.getElementById('input-value').value;

    if(inputValue.length > 0){
       getMealData(inputValue);
    }
    else{
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerHTML = `
        <p class="p-2 bg-danger text-center fs-4 text-white">Please enter a valid name</p>
        `
    }
});

/* const fetchData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data;

}; */
// Function for Passing url for data fetching based on different input
const getMealData = (mealName) =>{
    // mealName='o'
    // mealName='adas'
    if(mealName.length == 1){
        mealCartDiv(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`);
    }
    else{
        mealCartDiv(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    }
};
const mealCartDiv = (url)=> {
    console.log(url);
};

