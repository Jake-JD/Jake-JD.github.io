function toggleNotificationBox() {
    var notificationBox = document.getElementById('notification-box');
    notificationBox.style.display = (notificationBox.style.display === 'none' || notificationBox.style.display === '') ? 'block' : 'none';
}


// Function to handle button click and toggle the 'selected' class
function toggleButton(button) {
    button.classList.toggle('selected');
}

function selectEverythingButton() {
    var everythingButton = document.getElementById('everything-button');
    var otherButtons = document.querySelectorAll('#notification-box button:not(#everything-button)');

    // Deselect all other buttons
    otherButtons.forEach(function(button) {
        button.classList.remove('selected');
    });

    // Toggle the 'selected' class on the "Everything" button
    toggleButton(everythingButton);
}

function changeProject() {
    
    console.log("inside change project");
    const codingButton = document.querySelectorAll("#codingButtons button");
    console.log(codingButton.length);
    let languageActiveList = [];


    for (let i = 0; i < codingButton.length; i++) {
        if (codingButton[i].classList.contains('selected')){
            languageActiveList.push(codingButton[i].value);
        
        }
    }


    console.log(languageActiveList);

    const projectBoxes = document.getElementsByClassName("card");

    for (let i = 0; i < projectBoxes.length; i++) {
        const projectLanguages = projectBoxes[i].dataset.language.split(", ");
        let displayProject = false;

        if (languageActiveList.length === 0 || languageActiveList.includes('Everything')) {
            // Display project if "Everything" button is selected or no buttons are selected
            displayProject = true;
        } else {

            for (let j = 0; j < languageActiveList.length; j++) {
                const selectedLanguage = languageActiveList[j];
    
                if (projectLanguages.includes(selectedLanguage)) {
                    displayProject = true;
                    break;
                }
            }
        } 

        // Set display property after the loop based on whether any selected language was found
        projectBoxes[i].style.display = displayProject ? "block" : "none";
    }
}

window.onload=function(){
    
    const codingButton = document.querySelectorAll("#codingButtons button")
    codingButton.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.id === 'everything-button') {
                selectEverythingButton();
            } else {
                var everythingButton = document.getElementById('everything-button');
                    if (everythingButton.classList.contains('selected')) {
                        everythingButton.classList.remove('selected');
                    }
                    toggleButton(button);
            }

            changeProject();
        })
    })
}