let gameData;

const $name = $("#name");
// const $server = $("#server");
// const $classLevel = $("#classLevel");
// const $freeCompany = $("#company");
// const $achievements = $("achievements");
// const $portrait = $("#portrait");
// const $input = $('input[type=text]');

// function handleGetData(event) {
//   event.preventDefault();

//   userInput = $input.val();

$.ajax({
  URL: "https://xivapi.com/character/search?name=swibble+gee"
}).then(
  (data) => {
    console.log(data);
    // $name.text(data.Result)
  },
  (error) => {
    console.log("Oops something went wrong: ", error);
  });
//       movieData = data;
//       render();
//     },
//     (error) => {
//       console.log("Oops something went wrong: ", error);
//     }
//   );
// }

// function render() {
//   $title.text(movieData.Title);
//   $year.text(movieData.Year);
//   $rated.text(movieData.Rated);
// }

// $('form').on('submit', handleGetData)