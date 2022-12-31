var contactInfo = document.getElementsByClassName('.contact-info');

window.onload = function(){ 
    document.getElementById('#login-btn').onclick = function() {
        contactInfo.classList.add('active');
    }
};

window.onload = function(){ 
    document.getElementById('#close-contact-info').onclick = function() {
        contactInfo.classList.remove('active');
    }
};


// function for contact form in contact us section
function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_yk9o5y8", "template_gmy1ayl", params).then(function (res) {
        alert("Success! " + res.status);
    })
}