// constants for query selector
const customColorBtn = document.querySelector('.custColor');
const randomColorBtn = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const studentIdElement = document.getElementById('myStudentId');
const numberInput = document.getElementById('customNumber');
const imgElement = document.getElementById('images');

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// function to change bg color from user input and add student id
function changeCustomColor() {

    const userInput = parseInt(numberInput.value);

    // Display Student ID
    studentIdElement.innerText = 'Student ID: 200593232';

    // Validate input and change background color
    if (isNaN(userInput)) {
        alert('Please enter a valid number');
        return;
    }

    if (userInput < 0 || userInput > 100) {
        //Less than 0 or more than 100
        document.body.style.backgroundColor = 'red';
    } else if (userInput <= 20) {
        //Between 0 and 20
        document.body.style.backgroundColor = 'green';
    } else if (userInput <= 40) {
        //Between 20 and 40
        document.body.style.backgroundColor = 'blue';
    } else if (userInput <= 60) {
        //Between 40 and 60
        document.body.style.backgroundColor = 'orange';
    } else if (userInput <= 80) {
        //Between 60 and 80
        document.body.style.backgroundColor = 'purple';
    } else {
        //Between 80 and 100
        document.body.style.backgroundColor = 'yellow';
    }

}

// function to change bg color from random no.
function changeRandomColor() {

    //Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberInput.value = randomNumber;
    //Call the same function to apply color based on number
    changeCustomColor();

}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 

    if (imageSelect.children.length > 1) {
        return; 
    }

    for (let i = 0; i < images.length; i++) {
        const option = document.createElement('option');
        option.value = images[i];
        option.textContent = images[i];
        imageSelect.appendChild(option);
    }

}

// function to change image
function changeImage() {

    const selectedImage = imageSelect.value;

    if (selectedImage) {
        imgElement.src = `./img/${selectedImage}`;
        imgElement.alt = `Image ${selectedImage}`;
    } else {
        imgElement.src = '';
        imgElement.alt = 'No image selected';
    }

}

// event listeners for on click event of buttons and select
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

window.addEventListener('load', addList);

