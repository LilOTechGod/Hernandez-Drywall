var contactInfo = document.getElementsByClassName('contact-info');
var loginbtn = document.getElementById('login-btn');
var closeContactInfo = document.getElementById('close-contact-info');
console.log(loginbtn, closeContactInfo)
const faders = document.querySelectorAll('.fade-in');

loginbtn.onclick = function () {
    contactInfo[0].classList.remove('contact-hide');
    contactInfo[0].classList.add('contact-info-active');
}

closeContactInfo.onclick = function () {
    contactInfo[0].classList.add('contact-hide');
    contactInfo[0].classList.remove('contact-info-active');
}



// function for contact form in contact us section
function SendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_wxy159t", "template_ohth77o", params).then(function (res) {
        alert("Success! " + res.status);
    })
}

const appearOptions = {threshold: 1 };

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// function for gallery in nav to redirect to gallery page
// var startButton = document.querySelector('.link-gallery');
// console.log(startButton)
// var redirectUrl = './gallery.html'
// startButton.addEventListener('click', redirectToMain)

// function redirectToMain (event) {
//     event.preventDefault();
//     document.location.replace(redirectUrl)
// }