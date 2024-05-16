const checkObjects = (object1, object2) => {
  for (let key in object1) {
    if (typeof object1[key] === "object") {
      return checkObjects(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

// {
//   id: 24,
//   options: {
//     size: 'small'
//   }
// }

// {
//   id: 24,
//   options: {
//     size: 'medium'
//   }
// }

export { checkObjects };
