/*******************************************************************************************************
  * @description The below looks for an html element with the Id "audio-player" and then appends the player after the element with the Id banner-container.
  * You will need to put the first html element somewhere on your page
  * You can sub these as long as you understand what doing that might mean
  * @demo Can be seen working here: https://haas.obsidianportal.com/characters/b-diddly
*/
if(!document.getElementById("audio-player") && document.getElementById("banner-container")){
  let src = getPlayerSrc(window.location.href);
  if(src != ''){
    var player = document.createElement("audio");
    player.id       = 'audio-player';
    player.controls = 'controls';
    player.src      = src;
    player.type     = 'audio/mp3';
    player.autoplay = false;
    document.getElementById("banner-container").appendChild(player);
  }
}

/*******************************************************************************************************
  * @description sets the src value as string based on supplied pathanme
  * @param pageName the path from URL
  * @return the string value for the src parameter for an audio html element
*/
function getPlayerSrc(pageName) {
let src = '';
  switch (pageName) {
      //The cases should look soemthing like
      //https://haas.obsidianportal.com/characters/b-diddly
      //the values for the media should be wherever that is hosted, best practice not to hotlink to external things you don't control
    case '<BASE_CAMPAIGN_URL/characters/<CHARACTER_SLUG>':
      src = '<URL_FOR_MUSIC>';
      break;
    default:
      console.log('no matching pageName: ' +pageName + ' specified');
  }
  return src;
}
