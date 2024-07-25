<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "swastikpanda0111@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New contact form submission from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo "Thank you for your message, $name. We will get back to you soon.";
    } else {
        // Email sending failed
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // Invalid request method
    echo "Invalid request.";
}
?>
