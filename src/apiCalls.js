const fetchData = () => {
  const userData = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(userData => {
      return userData;
    })

  const ingredientData = fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(ingredientData => {
      return ingredientData;
    })

  const recipeData = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(recipeData => {
      return recipeData;
    })

  return Promise.all([userData, ingredientData, recipeData])
    .then(data => {
      const allData = {};
      allData.users = data[0].usersData;
      allData.ingredients = data[1].ingredientsData;
      allData.recipes = data[2].recipeData;
      return allData;
    })
    .catch(err => console.log('ERROR', err))
}

export { fetchData }