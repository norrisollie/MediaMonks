// scripts

function app() {

    console.log("App is running");

    // store elements in dom
    var numberButtons = document.querySelectorAll(".number");

    // loop to add event listener to each button
    for (var i = 0; i < numberButtons.length; i++) {

        // add click event listener
        numberButtons[i].addEventListener("click", changeButton);
    }

    function changeButton(e) {

        // get dataset value
        var target = e.target;
        var targetDataset = e.currentTarget.dataset.number;
        var backgroundImage = document.getElementById("background-image");
        var sections = document.querySelectorAll(".screen");
        var intro = document.getElementById("intro");
        var sectionNumbers = document.querySelectorAll(".section-number");

        for (var numberButton of numberButtons) {
            numberButton.classList.remove("number-active");
        }

        for (var section of sections) {
            section.classList.add("section-hidden");
        }

        for (var sectionNumber of sectionNumbers) {
            sectionNumber.classList.add("section-number-hidden");
        }

             if (targetDataset === "zero") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);

                 setTimeout(function(){
                 sections[0].classList.remove("section-hidden");
                 sections[0].classList.add("sections-active");

        },1000);

             } else if (targetDataset === "one") {
                 target.classList.add("number-active");
                 backgroundImage.removeAttribute("class");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){
                 sections[1].classList.remove("section-hidden");
                 sections[1].classList.add("sections-active");
                 sectionNumbers[0].classList.remove("section-number-hidden");
                 sectionNumbers[0].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "two") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){
                 sections[2].classList.remove("section-hidden");
                 sections[2].classList.add("sections-active");

                 sectionNumbers[1].classList.remove("section-number-hidden");
                 sectionNumbers[1].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "three") {
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){
                 sections[3].classList.remove("section-hidden");
                 sections[3].classList.add("sections-active");

                 sectionNumbers[2].classList.remove("section-number-hidden");
                 sectionNumbers[2].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "four") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[4].classList.remove("section-hidden");
                 sections[4].classList.add("sections-active");
                 sectionNumbers[3].classList.remove("section-number-hidden");
                 sectionNumbers[3].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "five") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[5].classList.remove("section-hidden");
                 sections[5].classList.add("sections-active");
                 sectionNumbers[4].classList.remove("section-number-hidden");
                 sectionNumbers[4].classList.add("section-number-active");


        },1000);

             } else if (targetDataset === "six") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[6].classList.remove("section-hidden");
                 sections[6].classList.add("sections-active");
                 sectionNumbers[5].classList.remove("section-number-hidden");
                 sectionNumbers[5].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "seven") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[7].classList.remove("section-hidden");
                 sections[7].classList.add("sections-active");

                 sectionNumbers[6].classList.remove("section-number-hidden");
                 sectionNumbers[6].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "eight") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[8].classList.remove("section-hidden");
                 sections[8].classList.add("sections-active");

                 sectionNumbers[7].classList.remove("section-number-hidden");
                 sectionNumbers[7].classList.add("section-number-active");

        },1000);

             } else if (targetDataset === "nine") {
                 backgroundImage.removeAttribute("class");
                 target.classList.add("number-active");
                 backgroundImage.classList.add("position-" + targetDataset);
                 intro.classList.remove("intro-active");
                 intro.classList.add("intro-hidden");

                 setTimeout(function(){

                 sections[9].classList.remove("section-hidden");
                 sections[9].classList.add("sections-active");

             },1000);

             }


    }
}

document.onload = app();