window.onload = function () {
    $(".sign_in_btn").click(function () {
        $(".sign_up_btn").css("border", "none");
        $(".sign_in_btn").css("border-bottom", "3px solid dodgerblue");
        $(".sign_up_form").css("display", "none");
        $(".sign_in_form").css("display", "block");

    });

    $(".sign_up_btn").click(function () {
        $(".sign_in_btn").css("border", "none");
        $(".sign_up_btn").css("border-bottom", "3px solid dodgerblue");
        $(".sign_in_form").css("display", "none");
        $(".sign_up_form").css("display", "block");

    });

    
    $("#text").css("transform","translateY(-200px)");

    $("#create_btn").on("click",function(evt) {
        let isValid = true;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") {
            $("#email").attr("placeholder", "Email Address is required.");
            $("#email").addClass("place");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").attr("placeholder", "Email address should be valid.");
            isValid = false;
        } else {
            $("#email").prev().text("");
        }

        const password = $("#password").val().trim();
        if (password.length < 6) {
            $("#password").attr("placeholder","Password must be 6 or more characters.");
            $("#password").addClass("place");
            isValid = false;
        } else {
            $("#password").prev().text("");
        }

        const verify_password = $("#verify").val().trim();
        if (verify_password != password) {
            $("#verify").attr("placeholder","Password must match with above password.");
            $("#verify").addClass("place");
            isValid = false;
        } else {
            $("#verify").prev().text("");
        }

        const first_name = $("#fname").val().trim();
        if (first_name == "") {
            $("#fname").attr("placeholder","First Name field is required.");
            $("#fname").addClass("place");
            isValid = false;
        } else {
            $("#lname").prev().text("");
        }

        const last_name = $("#lname").val().trim();
        if (last_name == "") {
            $("#lname").attr("placeholder","Last Name field is required.");
            $("#lname").addClass("place");
            isValid = false;
        } else {
            $("#lname").prev().text("");
        }

        const checkbox = $("#checkbox").prop('checked');
        if(checkbox == false)
        {
            alert("You must agree to the terms and conditions.");
            evt.preventDefault();
        }
        
        //if(!isValid)
        if (isValid == false) {
            evt.preventDefault();
        }
        else
        {
            location.href = "join.html";
        }
    });

    $("#sign_in_btn").on("click",function(evt) {
        let isValid = true;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email_s").val().trim();
        if (email == "") {
            $("#email_s").attr("placeholder", "Email Address is required.");
            $("#email_s").addClass("place");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_s").attr("placeholder", "Email address should be valid.");
            isValid = false;
        } else {
            $("#email_s").prev().text("");
        }

        const password = $("#password_s").val().trim();
        if (password.length < 6) {
            $("#password_s").attr("placeholder","Password must be 6 or more characters.");
            $("#password_s").addClass("place");
            isValid = false;
        } else {
            $("#password_s").prev().text("");
        }
    });

    let imageCache = [];
    // each() - two inbuilt parameters - index, element itself
    $("#slides img").each( (index, img) => {
        const image = new Image(); // creating a new image everytime the loop runs
        image.src = $(img).attr("src");  // adding the source to the new image
        image.title = $(img).attr("alt"); // adding title to the new image
        imageCache[index] = image; // pushing the image to the array
    });

    // start the slide show
    let imageCounter = 1;
    // setInterval(function, duration);
    setInterval( () => {
        $("#caption").fadeOut(3000);
        //.fadeOut(1000, callbackFunction);
        $("#slide").fadeOut(3000, () => {
            imageCounter = (imageCounter + 1) % imageCache.length; // slides to be rotating
            const nextImage = imageCache[imageCounter];
            $("#slide").attr("src", nextImage.src).fadeIn(1000);
            $("#caption").text(nextImage.title).fadeIn(1000);
        }); // end of my fadeOut() of slide
    }, 3000); // end of my setInterval()

    $("#btn").on("click", function () {

        let height = parseInt($("#height").val());

        /* Getting input from user into weight variable. 
        Input is string so typecasting is necessary.*/
        let weight = parseInt($("#weight").val());

        let result = $("#result");

        // Checking the user providing a proper
        // value or not
        if (height === "" || isNaN(height))
        {
            result.html("Provide a valid Height!");
            result.css("color","red");
    }

        else if (weight === "" || isNaN(weight))
        {
            result.html("Provide a valid Weight!");
            result.css("color","red");
        }
        // If both input is valid, calculate the bmi
        else {

            // Fixing upto 2 decimal places
            result.css("color","#3a86ff");
            let bmi = (weight / ((height * height) / 10000)).toFixed(2);

            // Dividing as per the bmi conditions
            if (bmi < 18.6) result.html("Under Weight : <span>" + bmi + "</span>");

            else if (bmi >= 18.6 && bmi < 24.9)
                result.html("Normal : <span>" + bmi + "</span>");

            else result.html("Over Weight : <span>" + bmi + "</span>");
        }
    });
}