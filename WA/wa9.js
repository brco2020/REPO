
let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');


let insertX = ["Shakira", "my favorite lizard", "Donald Trump"];
let insertY = ["the bathroom floor", "on stage", "near a port-a-potty"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
var storyText = 'It was 66 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY: they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day';

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertX:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertY:", yItem);
    newStory = newStory.replace(":insertZ:", zItem);

  if(customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  if(document.getElementById("uk").checked) {
    let weight = 300 * 0.453592;
    newStory = newStory.replace('300 pounds', weight + ' kilograms');

    // Convert 66°F to °C
    let temp = (66 - 32) * 5/9;
    newStory = newStory.replace('66 fahrenheit', temp.toFixed(3) + ' centigrade');

  }
story.textContent = newStory;
story.style.visibility = 'visible';
return newStory;
}

randomize.addEventListener('click', result);
var myStory = result(insertX, insertY, insertZ, storyText);

document.querySelector(".story").innerHTML = myStory;

