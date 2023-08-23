
<?php

// Connect to the database
$db = new mysqli("localhost", "root", "", "Contact_form");

// Check if the connection was successful
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$tell = $_POST['tell'];
$gender = $_POST['gender'];
$message = $_POST['message'];

// Insert the form data into the table
$sql = "INSERT INTO Contact_data (name, email, tell, gender, message) VALUES ('$name', '$email', '$tell', '$gender', '$message')";
$result = $db->query($sql);

// Check if the query was successful
if ($result) {
  echo "Your message has been sent.";
} else {
  echo "An error occurred. Please try again.";
}

// Close the database connection
$db->close();

?>

