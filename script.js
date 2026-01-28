function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}

(function(){
  emailjs.init("Q9DGDAP5w7X9uq4Wj");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_n3yk8a7", "template_9al3jc8", this)
      .then(function() {
        document.getElementById("popup-message").innerText =
          "Thank you for your recommendation! It has been submitted successfully.";
        showPopup(true);
        form.reset();
      }, function(error) {
        alert("Failed to send message.");
        console.log(error);
      });
  });
});


