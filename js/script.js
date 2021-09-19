const $name = $("#name");
const $server = $("#server");
const $classJob = $("#classJob");
const $classLevel = $("#classLevel");
const $freeCompany = $("#company");
const $portrait = $("#portrait");
const $input = $('input[type=text]');

let charName;
let charServer;
let charJob;
let charLevel;
let charFC;
let charPortraitUrl;

function handleGetData(event) {
  event.preventDefault();

  userInput = $input.val();

  //Need to convert search to format that api call accepts (remove spaces)
  //Might get more than one match 
  $.ajax({
    url: "https://xivapi.com/character/search?name=" + userInput,
    type: "get"
  }).then(
    (data) => {
      const lodeStoneId = data.Results[0].ID;
      $.ajax({
        url: `https://xivapi.com/character/${lodeStoneId}?data=FC`,
        type: 'get'
      }).then(
        (data) => {
          charName = data.Character.Name;
          charServer = data.Character.Server;
          charJob = data.Character.ActiveClassJob.UnlockedState.Name;
          charLevel = data.Character.ActiveClassJob.Level;
          charPortraitUrl = data.Character.Portrait
          // charFC = data.FreeCompany.Name;
          // if (data.FreeCompany) {
          //   charFC = data.FreeCompany.Name;
          // }
          charFC = data.FreeCompany ? data.FreeCompany.Name : 'None';
          setCharacterProperties();
        },
        (error) => {
          console.log("Oops something went wrong: ", error);
        }
      )
    },
    (error) => {
      console.log("Oops something went wrong: ", error);
    });
};

function setCharacterProperties() {
  $name.text(charName);
  $server.text(charServer);
  $classJob.text(charJob);
  $classLevel.text(charLevel);
  $portrait.attr("src", charPortraitUrl);
  $freeCompany.text(charFC);
};

$('form').on('submit', handleGetData);

//1. Grab DOM elements
//2. Create variables
//3. Make ajax call for lodestone id
//4. Make your ajax call for char data
//5. If data is successful, store them in variables
//6. Display elements on your page