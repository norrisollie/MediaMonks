// scripts

// function to run when document has loaded
function app() {

    // log to console
    console.log("App is running");

    // store section buttons in dom
    var sectionButtons = document.querySelectorAll(".number-span");

    // for loop to add event listener to buttons
    for (var i = 0; i < sectionButtons.length; i++) {

        // add event listener
        sectionButtons[i].addEventListener("click", clickButtons);

    }

    // store arrows in dom
    var arrow = document.querySelectorAll(".arrow");

    // loop to add event listener to arrow elements
    for(var i = 0; i < arrow.length; i++) {

    	//add event listener
    	arrow[i].addEventListener("click", clickButtons);
    }

    // // function run when arrow is clicked
    // function arrowClick(e) {
    	
    // 	// target element
    // 	var clickTarget = e.target;
    // 	// target dataset value
    // 	var clickTargetData = e.currentTarget.dataset.currentsection;
    // 	// log target dataset to console
    // 	console.log(clickTargetData)

    // }

    // 	// switch statement to determine what to do when arrow is pressed
    // 	switch(clickTargetData) {

    // 		case "0":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "1":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "2":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "3":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "4":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "5":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "6":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "7":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "8":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;

    // 		case "9":
    // 			console.log("current target value: " + clickTargetData);
    // 			break;
    // 	}

    




    // click buttons function
    function clickButtons(e) {

        // target element
        var clickTarget = e.target;
        // target element dataset value
        var clickTargetData = e.currentTarget.dataset.section;
        // target element dataset value
        var clickTargetDataArrow = e.currentTarget.dataset.currentsection;
        // store buttons in dom
        var numberButtons = document.querySelectorAll(".number-span");
        // store arrows in DOM
        var arrow = document.querySelectorAll(".arrow");
        // specify arrow left
        var arrowLeft = arrow[0];
        // specify arrow right
        var arrowRight = arrow[1];
        // store current section element in dom
        var currentSection = document.querySelector(".section-current");
        // store section of element in dom
        var sectionOf = document.querySelector(".section-of");
        // store section-container elements in dom
        var sections = document.querySelectorAll(".section");

        // for loop to remove number-active class from buttons
        for (var i = 0; i < sectionButtons.length; i++) {

            // remove class from elements
            numberButtons[i].classList.remove("number-active");

        }

        for(var i = 0; i < sections.length; i++) {

        	sections[i].classList.remove("section-active");
        	sections[i].classList.add("section-hidden");

        }

        // switch statement to determine what to do when certain button is clicked
        switch (clickTargetData) {
            case "0":
                // log to console
                console.log("clicked dataset: " + clickTargetData);
                // add class to click target
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = "1";
                // add class to hide element
                sectionOf.classList.add("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[0].classList.remove("section-hidden");
                },1000);

                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                if (numberButtons[0].classList.contains("number-active")) {
                    arrow[0].classList.add("arrow-hidden");
                    setTimeout(function(){
                        arrow[1].classList.remove("arrow-hidden");
                    },1000);
                }

                break;

            case "1":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[1].classList.remove("section-hidden");

                if (numberButtons[1].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                

                break;

            case "2":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[2].classList.remove("section-hidden");

                if (numberButtons[2].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "3":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[3].classList.remove("section-hidden");

                if (numberButtons[3].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "4":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[4].classList.remove("section-hidden");

                if (numberButtons[4].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "5":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[5].classList.remove("section-hidden");

                if (numberButtons[5].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "6":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[6].classList.remove("section-hidden");

                if (numberButtons[6].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "7":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[7].classList.remove("section-hidden");

                if (numberButtons[7].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "8":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = clickTargetData;
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[8].classList.remove("section-hidden");

                if (numberButtons[8].classList.contains("number-active")) {
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                },1000);


                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

            case "9":
                console.log("clicked dataset: " + clickTargetData);
                // add number-active class to target button
                clickTarget.classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = "8";
                // add class to hide element
                sectionOf.classList.add("section-of-hidden");

                setTimeout(function(){
                // remove hidden on respective section element
                sections[9].classList.remove("section-hidden");
                },1000);

                if (numberButtons[9].classList.contains("number-active")) {
                    arrow[1].classList.add("arrow-hidden");
                    setTimeout(function(){
                        arrow[0].classList.remove("arrow-hidden");
                    },1000);
                }

                 // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.currentsection = clickTargetData;
                arrowRight.dataset.currentsection = clickTargetData;

                break;

        };







    }

}

document.onload = app();