var settings = {
  async: true,
  crossDomain: true,
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  method: "POST",
  headers: {
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "<My key>",
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    source: "en",
    q: "Contact Form | Name | Contact Number | Email",
    target: "",
  },
};

$(document).ready(function () {
  $(".dropdown-item").click(function (e) {
    if ($(this).attr("tolang") != "en") {
      settings.data.target = $(this).attr("tolang");

      fetchTranslation();

      $("button").html($(this).html());
    } else {
      updatePlaceholders(settings.data.q);

      $("#langSel").html("Translate to");
    }
  });
});

function fetchTranslation() {
  $.ajax(settings).done(function (response) {
    console.log(response);

    var translatedText = response.data.translations[0].translatedText;

    updatePlaceholders(translatedText);
  });
}

function updatePlaceholders(updateString) {
  var comp = updateString.split("|");

  $("form > input").each(function (idx) {
    $(this).prop("placeholder", comp[idx + 1].trim());
  });

  $("#formHeading").html(comp[0]);
}
