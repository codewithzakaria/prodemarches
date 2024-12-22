// Simple script to confirm message submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
});

// mailjs
function sendMail() {
    // Récupérer les valeurs des champs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const service_type = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Vérifier si les champs sont remplis
    if (!name || !email || !mobile || !service_type || !message) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    let params = {
        name: name,
        email: email,
        mobile: mobile,
        service_type: service_type,
        message: message
    }

    const serviceID = "service_kaynyc8";
    const templateID = "template_87blekk";

    // Afficher un message de chargement
    alert("Envoi en cours...");

    emailjs.send(serviceID, templateID, params)
        .then(
            (res) => {
                // Clear form fields
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile").value = "";
                document.getElementById("service").value = "";
                document.getElementById("message").value = "";
                console.log("Email sent successfully", res);
                alert("Votre message a été envoyé avec succès!");
            })
        .catch((err) => {
            console.log("Error sending email:", err);
            alert("Une erreur s'est produite lors de l'envoi du message. Erreur: " + err.text);
        });
}

// Fonction pour le formulaire de contact
function sendContactMail() {
    // Récupérer les valeurs des champs
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value;

    // Vérifier si les champs sont remplis
    if (!name || !email || !subject || !message) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    let params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    const serviceID = "service_kaynyc8";
    const templateID = "template_contact123"; // Remplacez par votre nouvel ID de template de contact

    // Afficher un message de chargement
    alert("Envoi en cours...");

    emailjs.send(serviceID, templateID, params)
        .then(
            (res) => {
                // Clear form fields
                document.getElementById("contact-name").value = "";
                document.getElementById("contact-email").value = "";
                document.getElementById("contact-subject").value = "";
                document.getElementById("contact-message").value = "";
                console.log("Email sent successfully", res);
                alert("Votre message a été envoyé avec succès!");
            })
        .catch((err) => {
            console.log("Error sending email:", err);
            alert("Une erreur s'est produite lors de l'envoi du message. Erreur: " + err.text);
        });
}