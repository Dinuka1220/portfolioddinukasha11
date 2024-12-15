document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar2 a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});

// const form = document.querySelector("contactForm");

// function sendEmail() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("Email").value;
//     const mobile = document.getElementById("mobile_num").value;
//     const subject = document.getElementById("email_sub").value;
//     const message = document.getElementById("message").value;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "20dinuka@gmail.com",
//         Password: "83D50B007141B37399D5472936669FE62907",
//         To: '20dinuka@gmail.com',
//         From: email,
//         Subject: subject,
//         Body: `Name: ${name} <br> Email: ${email} <br> Mobile: ${mobile} <br> Message: ${message}`
//     }).then(
//         response => alert(response)
//     ).catch(
//         error => alert("Failed to send email: " + error)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     sendEmail();
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Form submitted!");
//     sendEmail();
// });
