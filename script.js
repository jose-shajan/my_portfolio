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

const navbarCollapse = document.getElementById("navbarNav");
const menuIcon = document.getElementById("menuIcon");

// Menu opened
navbarCollapse.addEventListener("shown.bs.collapse", () => {
    menuIcon.className = "bi bi-x";
});

// Menu closed
navbarCollapse.addEventListener("hidden.bs.collapse", () => {
    menuIcon.className = "bi bi-list";
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {

        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

        if (bsCollapse) {
            bsCollapse.hide();
        }

    });
});


