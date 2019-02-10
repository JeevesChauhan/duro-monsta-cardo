<?php
  $dbServername = "localhost";
  $dbUsername = "root";
  $dbPassword = "";
  $dbName = "duro";

  $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

  $sql = "UPDATE Counting SET Duros = Duros + 1;";
  $sql2 = "UPDATE Counting SET Totals = Totals + 1500;";

  mysqli_query($conn, $sql);
  mysqli_query($conn, $sql2);
?>
