function getingredient(coffeType) {
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(
        data.filter((value) => {
          return value.title === coffeType;
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
getingredient("Irish");
