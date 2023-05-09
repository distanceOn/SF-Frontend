const creatures = {
  1: "dog",
  2: "cat",
  3: "horse",
  4: "pig",
};

const creatures1 = Object.create(creatures);

creatures1.ownAnimal = "mouse";

const getKeys = (object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key, object[key]);
    }
  }
};

getKeys(creatures1);
