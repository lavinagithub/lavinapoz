function addItem(item) {
  const itemHTML =
    '<div class="card" style="width: 18rem;">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.pantone_value +
    "</p>\n" +
    '        <div style="background:' +
    item.color +
    ';">' +
    item.color +
    "</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";
  const itemsContainer = document.querySelector("#list-items");
  itemsContainer.innerHTML += itemHTML;
}

// function fetchColorsList() {
//   //TODO implement this function
//   // fetch api
//   fetch("https://reqres.in/api/unknown").then(function (response) {
//     // alert(response.status);
//     if (response.status !== 200) {
//       console.log(
//         "Looks like there was a problem. Status Code: " + response.status
//       );
//       return;
//     }
//     // Examine the text in the response
//     response.json().then(function (data) {
//       // with fetch API data
//       for (i = 0; i < data["data"].length; i++) {
//         addItem(data["data"][i]);
//       }
//     });
//   });
// }

//fetchColorsList();

fetch("https://reqres.in/api/unknown").then((response) => {
  if (response.status !== 200) {
    document.write(
      "Looks like there was a problem. Status Code: " + response.status
    );
  }
  response.json().then((jsonContent) => {
    // loop through the data array of the json object and print each object inside it
    for (i = 0; i < jsonContent["data"].length; i++) {
      addItem(jsonContent["data"][i]);
    }
  });
});
