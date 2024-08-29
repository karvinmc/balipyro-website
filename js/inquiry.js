function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "teddywirawan78@yahoo.com",
    From: document.getElementById("email").value, // Fetches email from form input
    Subject: "Inquiry from " + document.getElementById("name").value,
    Body: `
      Name: ${document.getElementById("name").value}
      <br>Email: ${document.getElementById("email").value}
      <br>Whatsapp Number: ${document.getElementById("waNumber").value}
      <br>Event: ${document.getElementById("event").value}
      <br>Special Request: ${document.getElementById("specialReq").value}
    `
  })
    .then((message) => alert("Mail sent successfully: " + message))
    .catch((error) => alert("Error sending mail: " + error))
}
