<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Here you would typically process the form data, such as sending an email or saving to a database
    // For this example, we'll just print the data
    echo "Thank you for your message, $name!<br>";
    echo "We'll get back to you at $email as soon as possible.<br>";
    echo "Your message: $message";
}
?>