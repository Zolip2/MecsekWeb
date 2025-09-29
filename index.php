<?php

$conn = new mysqli("localhost", "root", "", "mecsekdatabase");

if($conn -> connect_error) {
    die("Connection Failed");
}

$sql = "SELECT * FROM `img` WHERE `text` >= 0"

$result = $conn -> query($sql);

if($result -> num_rows > 0){

    $row = $result -> fetch_assoc();
    echo htmlspecialchars($row["mytext"]);

}else{
    echo "No data found.";
}

$conn -> close();

?>