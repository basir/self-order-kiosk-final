const data = {
  categories: [
    { name: 'Beverages', image: '/images/beverages.jpg' },
    { name: 'Breakfast', image: '/images/breakfast.jpg' },
    { name: 'Burgers', image: '/images/burgers.jpg' },
  ],
  products: [
    {
      category: 'Beverages',
      name: 'Coca-Cola',
      calorie: 120,
      price: 1,
      image: '/images/t-mcdonalds-Coca-Cola-Classic-Small.jpg',
    },
    {
      category: 'Beverages',
      name: 'Vanill Shake',
      price: 1.5,
      calorie: 360,
      image: '/images/t-mcdonalds-Vanilla-McCafe-Shake-Medium.jpg',
    },
    {
      category: 'Beverages',
      name: 'Hot Chocolate',
      price: 2,
      calorie: 170,
      image: '/images/t-mcdonalds-McCafe-Hot-Chocolate-Medium.jpg',
    },
    {
      category: 'Breakfast',
      name: 'Bacon & Biscuit',
      price: 1.9,
      calorie: 90,
      image:
        '/images/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit.jpg',
    },
    {
      category: 'Breakfast',
      name: 'Blueberry Muffin',
      price: 1.5,
      calorie: 120,
      image: '/images/t-blueberry-muffin.jpg',
    },
    {
      category: 'Breakfast',
      name: 'Big Breakfast',
      price: 3,
      calorie: 430,
      image: '/images/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit.jpg',
    },
    {
      category: 'Burgers',
      name: 'Big Mac',
      price: 1.9,
      calorie: 200,
      image: '/images/t-mcdonalds-Big-Mac.jpg',
    },
    {
      category: 'Burgers',
      name: 'Hamburger',
      price: 1.5,
      calorie: 410,
      image: '/images/t-mcdonalds-Hamburger.jpg',
    },
    {
      category: 'Burgers',
      name: 'McDouble',
      price: 3,
      calorie: 320,
      image: '/images/t-mcdonalds-McDouble.jpg',
    },
  ],
};
module.exports = data;
