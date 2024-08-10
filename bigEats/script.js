const meals = [
    {
      _name: 'sausage and mash',
      _calories: 680,
      _cookingTime: '50 minutes',
      "_under 600 calories": false,
      recipe() {
      console.log('Lorem Ballsem');
      },
  
      get name() {
        return console.log(this._name)
      }
    },
  
    {
      _name: 'sunday roast',
      _calories: 1200,
      _cookingTime: 200,
      "_under 600 calories": false
    }
  ]
  
  class meal {
    constructor(name, cookingTime) {
      this._name = name;
      this._cookingTime = cookingTime;
      this["_under 600 calories"] = false;
    }
  }
  

  document.querySelector('.js-title')
    .innerHTML = meals[0]._name;



  console.log(meals[1])
  console.log(meals[0]._name)
  const pizza = new meal('pizza', 100)
  console.log(pizza)