const value = "1";

const object = {
  1: 1,
};

const getProperty = (string, obj) => {
  return string in obj;
};

console.log(getProperty(value, object));
