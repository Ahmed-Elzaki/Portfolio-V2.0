// Initialize EmailJS
(function(){
   emailjs.init("wdu6udTZ4OIVrOcRE");
})();

function sendEmail() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;
   
   console.log(name);  // Log name inside the function after user input just for debugging

   emailjs.send("service_k5fnrsv","template_uqq5uck",{
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
   })
   .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
   }, function(error) {
      console.log("FAILED...", error);
      alert("Failed to send the message.");
   });
}