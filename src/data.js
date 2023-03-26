items = [
    {
        "id"    :  1,
        "name"  :   "Apple",
        "aisle" :   2,
        "sold-in": "singles",
        "category"  : ["Fruits"],
        "available" : 256,
        "price" : 0.79
    },
    {
        "id"    :  2,
        "name"  :   "Carrot",
        "sold-in"   : "singles",
        "aisle" :   1,
        "category"  : ["Vegetables"],
        "available" : 105,
        "price" : 1.95
    },
    {
        "id"    : 3,
        "name"  : "Broccoli",
        "sold-in"   : "1kg bag",
        "aisle" :   1,
        "category"  : ["Vegetables"],
        "available" : 105,
        "price" : 3.050
    },
    {
        "id"    : 4,
        "name"  : "Cilantro",
        "sold-in"   : "bunch",
        "aisle" :   1,
        "category"  : ["Vegetables", "Herbs"],
        "available" : 45,
        "price" : 0.86
    },
    {
        "id"    : 5,
        "name"  : "Rice",
        "sold-in"   : "1kg bag",
        "aisle" :   3,
        "category"  : ["Pantry", "Grain"],
        "available" : 45,
        "price" : 5.25
    },
    {
        "id"    : 6,
        "name"  : "Spaghetti",
        "sold-in"   : "500g box",
        "aisle" :   3,
        "category"  : ["Pantry", "Grain"],
        "available" : 45,
        "price" : 1.20
    },
    {
        "id":7,
        "name":"Bison",
        "sold-in":"lb",
        "aisle":7,
        "category":["Meat"],
        "available":37,
        "price":5
    },
    {
        "id":8,
        "name":"Egg",
        "sold-in":"12 count",
        "aisle":8,
        "category":["Dairy and Eggs"],
        "available":54,
        "price":3.59
    },
    {
        "id":9,
        "name":"Salt",
        "sold-in":"1kg box",
        "aisle":3,
        "category":["Pantry"],
        "available":10,
        "price":1.27,
    },
    {
        "id":10,
        "name":"Green Onion",
        "sold-in":"bunches",
        "aisle":1,
        "category":["Vegetables"],
        "available":20,
        "price":1.47,
    },
    {
        "id":11,
        "name":"Soy Sauce",
        "sold-in":"500ml bottle",
        "aisle":3,
        "category":["Pantry"],
        "available":45,
        "price":3.47,
    },
    {
        "id":12,
        "name":"Black Pepper",
        "sold-in":"85g bag",
        "aisle":3,
        "category":["Pantry"],
        "available":66,
        "price":1.97,
    },
    {
        "id":13,
        "name":"Bread",
        "sold-in":"675g bag",
        "aisle":8,
        "category":["Pantry","Grain"],
        "available":70,
        "price":2.47,
    },
    {
        "id":14,
        "name":"Mayonnaise",
        "sold-in":"890ml bottle",
        "aisle":3,
        "category":["Pantry"],
        "available":30,
        "price":5.47,
    },
    {
        "id":15,
        "name":"Chicken",
        "sold-in":"1 Whole",
        "aisle":7,
        "category":["Meat"],
        "available":25,
        "price":16.47,
    },
    {
        "id":15,
        "name":"Milk",
        "sold-in":"4L bottle",
        "aisle":8,
        "category":["Dairy and Eggs"],
        "available":35,
        "price":5.57,
    },
    {
        "id":17,
        "name":"Ground Beef",
        "sold-in":"500g pack",
        "aisle":10,
        "category":["Meat"],
        "available":35,
        "price":10.57,
    },
     {
        "id":18,
        "name":"White Sugar",
        "sold-in":"500g pack",
        "aisle":7,
        "category":["Pantry"],
        "available":45,
        "price":5.57,
    },
     {
        "id":19,
        "name":"Mushrooms",
        "sold-in":"500g pack",
        "aisle":11,
        "category":["Vegetables"],
        "available":35,
        "price":8.57,
    },
     {
        "id":20,
        "name":"Onions",
        "sold-in":"lb",
        "aisle":10,
        "category":["Vegetables"],
        "available":35,
        "price":1.57,
    },
    {
        "id":23,
        "name":"Basil",
        "sold-in":"Bunch",
        "aisle":7,
        "category":["Herbs"],
        "available":7,
        "price":4.44,
    },
    {
        "id":25,
        "name":"Garlic",
        "sold-in":"3 per bag",
        "aisle":5,
        "category":["Vegetables"],
        "available":10,
        "price":5.84,
    },
    {
        "id":26,
        "name":"Tomato",
        "sold-in":"1lb",
        "aisle":5,
        "category":["Vegetables"],
        "available":10,
        "price":1.24,
    }
]

recipies =[
         {
        "id"    :  1,
        "name"  :   "egg fry rice",
        "Ingredients"   :   ["8", "9", "10", "5","11"],
        'qty' :   [1,1,1,1,1],
        "steps" :   ['Bring water, soy sauce, and salt to a boil in a medium saucepan.', 'Stir in rice and remove from heat.',
        'Cover and let stand for 5 minutes.', 'Heat oil in a medium skillet or wok over medium heat.',
        'Sauté onions and green beans in hot oil for 2 to 3 minutes.',
        'Pour in beaten egg and fry for 2 minutes, scrambling egg while it cooks.','Add cooked rice to egg mixture',
        'mix well. Season with pepper.']
    },
      {
        "id"    :  2,
        "name"  :   "Spaghetti Sauce with Ground Beef",
        "Ingredients"   :   ["6","17","18","23","24", "25","26"],
        'qty' :   [1,1,3,3,1,1,2],
        "steps" :   ['Brown your hamburger in a large pan.','Once cooked, throw in salt, pepper, tomato sauce and paste, water (with the bouillon cubes in it), sugar, basil, oregano and garlic. Simmer on low for an hour.'
                    ,'A few minutes before the hour is done, cook box of spaghetti noodles as directed on package','Once the noodles are cooked, drain and add to spaghetti sauce. ENJOY!']
    }

]

categories = [
    "Meat","Pantry","Grain","Vegetables","Herbs","Fruits","Dairy and Eggs"
]

cart = {
}

global_subtotal = 0
global_tax = 0
global_total = 0
