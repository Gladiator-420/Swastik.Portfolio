<?php
  // Configuration
  $to_email = 'your_email_address@example.com'; // Your email address
  $subject = 'New Message from Website';

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Create email headers
  $headers = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n" .
             'MIME-Version: 1.0' . "\r\n" .
             'Content-Type: text/html; charset=UTF-8';

  // Create email body
  $body = '<p>Name: ' . $name . '</p>' .
           '<p>Email: ' . $email . '</p>' .
           '<p>Message: ' . $message . '</p>';

  // Send email
  if (mail($to_email, $subject, $body, $headers)) {
    echo 'Email sent successfully!';
  } else {
    echo 'Error sending email!';
  }
?>