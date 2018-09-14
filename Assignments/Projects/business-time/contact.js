var btn = document.btn;

btn.addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name1").value;
  var phone = +document.getElementById("phone2").value;
  var email = document.getElementById("email3").value;
  var country = document.getElementById("country4").value;
  var message = document.getElementById("message5").value;

  alert(
    `
        You message have been sent!

        Name: ${name}
        Phone: ${phone}
        E-mail: ${email}
        Country: ${country}
        Message: ${message} 
    `
  );
});
