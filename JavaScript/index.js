function showDetails() {

    let details = document.getElementById("details");
    let button = document.querySelector("button");

    if(details.style.display === "block"){

        details.style.display = "none";
        button.innerHTML = "Read More";

    }else{

        details.style.display = "block";
        button.innerHTML = "Read Less";

    }

}