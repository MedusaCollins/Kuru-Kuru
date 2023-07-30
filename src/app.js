 // Get the button element and the h1 element
 const changeTextBtn = document.getElementById("changeTextBtn");
 const greetingElement = document.getElementById("greeting");
 const settings = document.getElementById("settings") ;
 const settingsMenu = document.getElementById("myModal");
 const counterDiv = document.getElementById("counter");
 var newGreeting = "";
 var ImgGif = "./src/img/hertaa.gif";
 var counter = 0;
 var speed = 2;


 function applyStyles() {

 // Değerleri hedef elementin stil özelliklerine atayın
 document.getElementById('body').style.backgroundColor = document.getElementById('backgroundInput').value;
 document.getElementById('textColor').style.color = document.getElementById('textInput').value;
 changeTextBtn.style.backgroundColor = document.getElementById('buttonInput').value;
 changeTextBtn.style.color = document.getElementById('buttonTextInput').value;

 localStorage.setItem('backgroundInput', document.getElementById('backgroundInput').value);
 localStorage.setItem('textInput', document.getElementById('textInput').value);
 localStorage.setItem('buttonInput', document.getElementById('buttonInput').value);
 localStorage.setItem('buttonTextInput', document.getElementById('buttonTextInput').value);
 localStorage.setItem('hoverButtonInput', document.getElementById('hoverButtonInput').value);
 localStorage.setItem('hoverButtonTextInput', document.getElementById('hoverButtonTextInput').value);
 localStorage.setItem('charSpeed', document.getElementById('characterSpeed').value);
 
 }

   changeTextBtn.addEventListener('mouseout', function () {
   this.style.backgroundColor = document.getElementById('buttonInput').value;
   this.style.color = document.getElementById('buttonTextInput').value;
   });

   // Hover
   changeTextBtn.addEventListener('mouseover', function () {
   this.style.backgroundColor = document.getElementById('hoverButtonInput').value;
   this.style.color = document.getElementById('hoverButtonTextInput').value;
   });

   settings.addEventListener("click", () => {
     settingsMenu.style.display ='flex';
   })
   function closeModal(){
     settingsMenu.style.display ='none';
   }
   changeTextBtn.addEventListener("click", () => {
   changeGreetingText();
       const randomSongNumber = Math.floor(Math.random() * 3) + 1;
       const audio = new Audio(`./src/${randomSongNumber}.mp3`);
       audio.play();
       startMoving();
       count();
   });
   function count(){
       counter++;
       counterDiv.textContent = counter;
       localStorage.setItem('clicked', counter);
     }
   function changeGreetingText() {
       const randomInRange = Math.random() * 2 + 1;
   // Prompt the user for a new greeting
   if(randomInRange > 2){
       newGreeting = "The kuru~ has been squished for";
   }else{
       newGreeting = "Herta has been kuru~ed for";
   }

   // Update the text content of the h1 element with the new greeting
   greetingElement.textContent = newGreeting;
   }

   const toggleButton = document.getElementById("toogleA");
   const dot = document.querySelector(".dot");
 
   // Sayfa yüklendiğinde local storage'dan durumu alıyoruz (eğer varsa).
   if (localStorage.getItem("toggleStatus") === "true") {
     toggleButton.checked = true;
     direction = toggleButton.checked;
   }
 
   toggleButton.addEventListener("click", function () {
     if (toggleButton.checked) {
       direction = true;
     } else {
       direction = false;
     }
 
     // Toggle düğmesinin durumunu local storage'a kaydediyoruz.
     localStorage.setItem("toggleStatus", toggleButton.checked);
   });

   var gifList = []; // Bu dizi, her GIF için yön bilgisini saklayacak
   function startMoving() {
    direction = toggleButton.checked;
    speed = localStorage.getItem('charSpeed');
const gifImage = new Image();
gifImage.src = ImgGif; // Replace with the actual path to your GIF image

gifImage.style.position = "absolute";
gifImage.className = "animate-bounce";
gifImage.style.zIndex = "0"; // Set the z-index to 0 for the gif
gifImage.style.bottom = "-140px";

const screenWidth = window.innerWidth;
const gifWidth = 200; // Replace with the actual width of your GIF

let position;

// Determine the initial position based on the 'direction' variable
if (direction) {
// Move from right to left
position = screenWidth;
gifImage.style.left = position + "px";
} else {
// Move from left to right
position = -gifWidth;
gifImage.style.left = position + "px";
}

// Append the image to the .visibility element
document.querySelector(".z-0").appendChild(gifImage);

// Function to move the image
function moveImage() {
if (direction) {
 position -= 5; // Move 5 pixels to the left

 // If the image is off-screen, remove it
 if (position+100 < -gifWidth) {
   gifImage.remove();
   clearInterval(intervalId); // Stop the interval
 } else {
   gifImage.style.left = position + "px"; // Set the new position
 }
} else {
 position += 5; // Move 5 pixels to the right

 // If the image is off-screen, remove it
 if (position > screenWidth) {
   gifImage.remove();
   clearInterval(intervalId); // Stop the interval
 } else {
   gifImage.style.left = position + "px"; // Set the new position
 }
}
}

// Hareketi başlat
const intervalId = setInterval(moveImage, speed); // Interval hızını isteğe bağlı olarak ayarlayabilirsiniz
}

// İlgili input elementlerine "input" event dinleyicileri ekleyin
document.getElementById('backgroundInput').addEventListener('input', applyStyles);
document.getElementById('textInput').addEventListener('input', applyStyles);
document.getElementById('buttonInput').addEventListener('input', applyStyles);
document.getElementById('buttonTextInput').addEventListener('input', applyStyles);
document.getElementById('hoverButtonInput').addEventListener('input', applyStyles);
document.getElementById('hoverButtonTextInput').addEventListener('input', applyStyles);
document.getElementById('characterSpeed').addEventListener('input', applyStyles);

     document.addEventListener('DOMContentLoaded', () =>{
      document.getElementById('body').style.backgroundColor = localStorage.getItem('backgroundInput');
      document.getElementById('backgroundInput').value = localStorage.getItem('backgroundInput');

      document.getElementById('textColor').style.color = localStorage.getItem('textInput');
      document.getElementById('textInput').value = localStorage.getItem('textInput');

      document.getElementById('changeTextBtn').style.backgroundColor = localStorage.getItem('buttonInput');
      document.getElementById('buttonInput').value = localStorage.getItem('buttonInput');

      document.getElementById('changeTextBtn').style.color = localStorage.getItem('buttonTextInput');
      document.getElementById('buttonTextInput').value = localStorage.getItem('buttonTextInput');

      document.getElementById('hoverButtonInput').value = localStorage.getItem('hoverButtonInput');
      document.getElementById('hoverButtonTextInput').value = localStorage.getItem('hoverButtonTextInput');

      document.getElementById('characterSpeed').value = localStorage.getItem('charSpeed');
      
      speed = localStorage.getItem('charSpeed');
      direction = localStorage.getItem('toggleStatus');
       counter = localStorage.getItem('clicked')
       counterDiv.textContent = counter;
     })