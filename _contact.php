<?php
$name = filter_input(INPUT_POST, 'name');
$email = filter_input(INPUT_POST, 'email');
$message = filter_input(INPUT_POST, 'message');
$subject = filter_input(INPUT_POST, 'subject');

if (mail("mkotsollari@gmail.com", "email: $email \n" . $subject, $message))
{
    $result = "Thank You! I will be in touch";
}
else
{
    $result = "Sorry there was an error sending your message. Please try again later";
}
echo json_encode($result);
