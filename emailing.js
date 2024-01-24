function sendMail() {
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    };
    
    emailjs.send("service_r5g5xsk", "template_kekbu1m", params).then(function (res) {
        alert("Message Sent! " + res.status);
    })
}