// *** FETCH API USED TO GET NASA DATA ****
const url =
  "https://api.nasa.gov/planetary/apod?api_key=kBZHQJ94NE8tkckfsfR2KrVDmXoGqZ6lN3Jfxiqk";

async function getNasaData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getNasaData().then(result => {
  let date = document.querySelector(".nasa_date");
  let title = document.querySelector(".nasa_title");
  let info = document.querySelector(".nasa_info");
  let media = document.querySelector("#nasa_media");
  let link = document.querySelector("#buttonUrl");
  if ((result.media_type = "image")) {
    media.innerHTML = `<img class="nasa_img img-responsive img-fluid" src=${result.url} alt="" srcset="">`;
    link.innerHTML = `<a class="btn btn-outline-light font-weight-bold" href="${result.url}" target="_blank">Link to Source</a>`;
  } else {
    media.innerHTML = `<iframe src="${result.url}" frameborder="0"></iframe>`;
  }

  info.innerHTML = result.explanation;
  title.innerHTML = result.title;
  date.innerHTML = result.date;
  });

//****** CUSTOM SEARCH WRITTEN IN JQUERY WILL UPDATE IN FUTURE TO BE VANILLA**********/

$(document).ready(function() {
  $("#buttn").on("click", function() {
    let getValue = $("#nasa_input1").val();

    let apiKey = "chtfxvAvmOZcD6YaskyqKVZXgbZIzW2c34KSW4n0";
    let apiURL =
      "https://api.nasa.gov/planetary/apod?date=" +
      getValue +
      "&api_key=" +
      apiKey;
    $.ajax({
      url: apiURL,

      success: function(r) {
        
        /********* VANILLA JS BELOW **********/
        let date = document.querySelector(".nasa_date");
        let title = document.querySelector(".nasa_title");
        let info = document.querySelector(".nasa_info");
        let media = document.querySelector("#nasa_media");
        let link = document.querySelector("#buttonUrl");

        if ((r.media_type = "image")) {
          media.innerHTML = `<img class="nasa_img img-responsive img-fluid" src=${r.url} alt="" srcset="">`;
          link.innerHTML = `<a class="btn btn-outline-light font-weight-bold" href="${r.url}" target="_blank">Link to Source</a>`;
        } else {
          media.innerHTML = `<iframe src="${r.url}" frameborder="0"></iframe>`;
        }

        info.innerHTML = r.explanation;
        title.innerHTML = r.title;
        date.innerHTML = r.date;
      },
      error: function(r) {
        alert("THE YEAR HAS TO BE 1995 OR GREATER");
      }
    });
  });
});
