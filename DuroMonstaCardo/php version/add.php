<?php

include_once 'Connect.php';

 $sql = "UPDATE Counting SET Duros = Duros + 1;";
 $sql2 = "UPDATE Counting SET Totals = Totals + 1500;";

 mysqli_query($conn, $sql1);
 mysqli_query($conn, $sql2);
?>
