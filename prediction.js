
const predictionForm = document.getElementById("predictionForm");

predictionForm.addEventListener("submit", function (event) {

    // Page reload hone se rokna
    event.preventDefault();

    const name = document.getElementById("name").value;

    const selectedSymptoms =
        document.querySelectorAll(
            '.symptom input[type="checkbox"]:checked'
        );

    const result = document.getElementById("predictionResult");

    const resultText = document.getElementById("resultText");

    const confidence = document.getElementById("confidence");


    // Agar koi symptom select nahi kiya
    if (selectedSymptoms.length === 0) {

        alert("Please select at least one symptom.");

        return;
    }


    // Selected symptoms collect karna
    let symptoms = [];

    selectedSymptoms.forEach(function (checkbox) {

        symptoms.push(checkbox.value);

    });


    console.log("Patient:", name);

    console.log("Selected Symptoms:", symptoms);


    /*
        ABHI DEMO RESULT HAI

        Baad me yahin par Machine Learning
        model connect kiya jayega.
    */


    resultText.innerHTML =
        "Hello <strong>" +
        name +
        "</strong>, your symptoms have been analyzed. " +
        "Please consult a healthcare professional for proper diagnosis.";


    confidence.innerText = "Demo";


    // Result show karna
    result.style.display = "block";


    // Result tak automatically scroll
    result.scrollIntoView({
        behavior: "smooth"
    });

});

