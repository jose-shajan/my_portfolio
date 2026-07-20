// =========================
// Success Popup
// =========================
function showPopup(show, message = "") {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    if (show) {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
        popupMessage.innerHTML = message;
    } else {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }
}

// =========================
// Navbar Toggle Icon
// =========================
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

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

// =========================
// EmailJS
// =========================
emailjs.init("Q9DGDAP5w7X9uq4Wj");

const form = document.getElementById("contact-form");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.innerHTML =
        '<i class="bi bi-hourglass-split"></i> Sending...';

    emailjs.sendForm(
        "service_n3yk8a7",
        "template_9al3jc8",
        this
    )
    .then(() => {

        form.reset();

        showPopup(
            true,
            "Message sent successfully!<br>I'll get back to you soon."
        );

        // Auto close popup after 3 seconds
        setTimeout(() => {
            showPopup(false);
        }, 3000);

    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        showPopup(
            true,
            "Failed to send message. Please try again."
        );

        setTimeout(() => {
            showPopup(false);
        }, 3000);

    })
    .finally(() => {

        // Restore button
        submitBtn.disabled = false;
        submitBtn.innerHTML =
            '<i class="bi bi-send-fill"></i> Send Message';

    });
});

/*======================================
        BACK TO TOP
======================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


