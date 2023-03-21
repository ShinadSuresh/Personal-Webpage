

function sendMail(e){
    event.preventDefault();
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('msg').value)
    console.log(document.getElementById('subject').value)
    let loading=document.querySelector('.loading');

var params={
        
    from_name:document.getElementById('name').value,
    email: document.getElementById('email').value,
    msg: document.getElementById('msg').value,
    subject:document.getElementById('subject').value
    
    
}
emailjs.send("service_2c1au6g","template_exp36lo",params).then(function(res){0
alert("sucsess"+res.status)})
}
