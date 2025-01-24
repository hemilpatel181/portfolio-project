function sendmail(){
    var params = {
        from_name : document.getElementById("name").ariaValueMax,
        email_id : document.getElementById("email").ariaValueMax,
        message : document.getElementById("message").ariaValueMax,
    }
    emailjs.send("service_283ww3i","template_082ic1b",params).then(function(res){
        alert("success" + res.status);
    })
}