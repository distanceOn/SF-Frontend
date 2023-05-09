function someTool(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.enable = false;
  this.on = function () {
    return this.enable
      ? console.log(this.name + " уже включен")
      : (this.enable = true);
  };
  this.off = function () {
    return this.enable
      ? (this.enable = false)
      : console.log(this.name + " уже выключен");
  };
}

function vacuum(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.enable = true;
  this.clean = function () {
    if (this.enable === true) {
      console.log("Всё чисто");
    } else {
      console.log("Сначала включите " + this.name);
    }
  };
}

vacuum.prototype = new someTool();

function microwave(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.enable = true;
  this.warm = function () {
    if (this.enable === true) {
      console.log("Готово");
    } else {
      console.log("Сначала включите " + this.name);
    }
  };
}

microwave.prototype = new someTool();

const houseVacuum = new vacuum("Пылесос", "красный", 3);

const kitchenMicrowave = new microwave("Микроволновка", "зеленая", 4);

houseVacuum.clean();
houseVacuum.off();
houseVacuum.clean();

kitchenMicrowave.warm();
kitchenMicrowave.off();
kitchenMicrowave.warm();
kitchenMicrowave.on();
kitchenMicrowave.warm();

console.log(houseVacuum, kitchenMicrowave);
