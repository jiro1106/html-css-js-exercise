// script to change bg color of portfolio
document.addEventListener('DOMContentLoaded', function () {
    // reference of button to change bg color
    const projectBox = document.querySelectorAll('.project-box h3');
    
    // the section affected by the bg color change which is = portfolio
    const portfolioSection = document.getElementById('portfolio-section');

    // colormap for each project
    const colorMap = {
        'Hotel Reservation System': '#FFFFFF', // Color for Project 1
        'Angel Baby Burgers': '#f9bf10',       // Color for Project 2
        'LRC Website': '#00A64C'               // Color for Project 3
    };

    // event listeners(find the section to be changed then find the corresponding color,lastly change the bg color)
    projectBox.forEach((title) => {
        title.addEventListener('click', function () {
            // get the project title text
            const titleText = title.textContent;

            // get the corresponding color from the map
            const color = colorMap[titleText] || '#fff'; // Default color if not found

            // change the background color of the portfolio section
            portfolioSection.style.backgroundColor = color;
        });
    });
});

//
document.getElementById('userform').addEventListener('submit',function(event) {
    // get inputs
    const userInput = document.getElementById('exampleInputName1','exampleInputEmail1','exampleInputMessage1').value;

    // check if the input is empty
    if (userInput.trim() === "") {
        // if empty, prevent form submission and return false
        alert("Input cannot be empty!");
        event.preventDefault(); // prevent form submit
        return false;
    } else {
        // if not empty, show the alert and allow form submission
        alert("Thank you for contacting us!");
    }
});
