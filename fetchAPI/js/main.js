const addItem = (item) => {
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
};

fetch("https://reqres.in/api/unknown").then((response) => {
  if (response.status !== 200) {
    document.write(
      "Looks like there was a problem. Status Code: " + response.status
    );
  }
  response.json().then((jsonContent) => {
    // loop through the data array of the json object and print each object inside it
    // add your code here
    for (i = 0; i < jsonContent["data"].length; i++) {
      addItem(jsonContent["data"][i]);
    }
  });
});

// fetch("https://reqres.in/api/unknown")
// fetch("https://reqres.in/api/unknown")
//   .then((response) => {
//     if (response.status == 200) {
//       document.write(response.status);
//       response.json().then((jsonContent) => {
//         // loop through the data array of the json object and print each object inside it
//         // add your code here
//         for (i = 0; i < jsonContent["data"].length; i++) {
//           // document.write(jsonContent["data"].length);
//           // document.write(jsonContent["data"][i]);
//           addItem(jsonContent["data"][i]);
//         }
//       });
//     }
//   })
//   .catch(() => {
//     document.write(
//       "Looks like there was a problem. Status Code: " + response.status
//     );
//   });
