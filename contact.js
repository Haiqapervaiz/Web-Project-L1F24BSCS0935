// CONTACT PAGE DOM SCRIPT
// This front-end demonstration checks the form and displays a message summary.
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
    const copyCheck = document.getElementById("copyCheck");
    const messageSummary = document.getElementById("messageSummary");

    contactForm.addEventListener("submit", function (event) {
        // Stop the browser from reloading the page.
        event.preventDefault();
        
        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            feedback.textContent = "Please complete all required fields.";
            messageSummary.hidden = true;
            return;
        }
        feedback.textContent = "Thank you, " + name + "! Your sample message is ready.";
        if (copyCheck.checked) {
            messageSummary.textContent =
                "Message summary - Name: " + name +
                " | Email: " + email +
                " | Subject: " + subject +
                " | Message: " + message;
            messageSummary.hidden = false;
        } else {
            messageSummary.hidden = true;
        }
        contactForm.reset();
    });
});
