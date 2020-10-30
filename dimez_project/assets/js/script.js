/* Скрипт - Вывод перечня 1 */
var languagesSelect = limb1.language;
function changeOption(){
    var selection = document.getElementById("selection");
    var selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
    selection.textContent = [soundClick()] + "Вы выбрали: " + selectedOption.text;
}
languagesSelect.addEventListener("change", changeOption);

/* Аудио */
function soundClick() {
  var audio=new Audio();
  audio.src='./assets/audio/heart3.mp3';
  audio.autoplay = true; //авто запускает
  //audio.loop=true; //бесконечно проигрывать
}

/* Пункты */
var selectDate = {
  limb1: ['option1','option2','option3','option4',],
  leather1: ['option1','option2','option3','option4',],
  muscle1: ['option1','option2','option3','option4',],
  organs1: ['option1','option2','option3','option4',],
  blood1: ['option1','option2','option3','option4',],
  nerves1: ['option1','option2','option3','option4',],
} // Хранение данных
function generateSelectSecond() {
  for (var i=0; i<selectDate.limb1.length; i++){
    leather1.options[i] = new Option(selectData.limb1[i],"");
  }
} // Пересоздавать
