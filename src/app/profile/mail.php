<?php
    $to = $_POST['dillichalise@gmail.com'];
    $name = $_POST["name"];
    $email= $_POST["email"];
    $message= $_POST["message"];
    $subject= $_POST["subject"];

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$name.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>subject: '.$subject.'</td></tr>
        <tr><td>message: '.$message.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'Message sending failed.';
    }

?>
