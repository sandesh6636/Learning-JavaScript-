function create(name, price) {
  this.name = name;
  this.price = price;
}

create.prototype.increasePrice = function (price) {
  this.price + 1;
};
create.prototype.printPrice = function (price) {
  console.log(`Price ${this.price}`);
};

// const chai = create("Chaii", 444); // without new , while transfering form create to chai it will dont dont about function or prototype so we use new
const chai = new create("chaiiii", 555);
chai.printPrice();
