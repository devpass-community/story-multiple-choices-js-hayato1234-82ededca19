function chooseProduct(segment) {
  switch (segment) {
    case 'Beverage':
      return 'Soda';
    case 'Fruit':
      return 'Apple';
    case 'Hygiene':
      return 'Soap';
    default:
      break;
  }
}

module.exports = chooseProduct;
