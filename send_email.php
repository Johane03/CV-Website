<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_POST['submit']))
{
  $to = 'lieliebokkie@gmail.com';

  // get the form data
  $from = htmlspecialchars($_POST['email']);
  $firstName = htmlspecialchars($_POST['firstName']);
  $lastName = htmlspecialchars($_POST['lastName']);
  $message = htmlspecialchars($_POST['message']);

  // set the email recipient, subject, and body
  $subject = 'Website Inquiry';
  $body = 
  "<h1>New Website Inquiry Info:</h1>
  <p>Name: $firstName $lastName</p>
  <p>Email: $from</p>
  <p>Message: $message</p>";

  // set the email headers
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= "From: " . $from;

  $result = mail($to, $subject, $body, $headers);

  // send the email
  if ($result) {
    echo '<script type="text/javascript">alert("Your Email was sent Successfully!");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  } else {
    echo '<script type="text/javascript">alert("Sorry! Email was not sent, Try again Later.");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  }
}
?>

