<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="script.js"></script>
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>

  <title> DURO </title>

<script type="text/javascript">
  $(function () {
    $('form').on('submit', function (e) {

      e.preventDefault();

      $.ajax({
        type: 'Post',
        url: 'Connect.php',
        data: $('form').serialize(),

      });
    });
  });
</script>


</head>
<body>

  <div class="MainImage">
    <img id="img" class="top" src="assets/image.jpg">
    <img id="img2" class="bot" src="assets/image.jpg">
  </div>

  <div class="ButtonArea">
    <form action="Connect.php" method="POST">
      <input type="submit" id="button" onclick="draw()" value="DURO"/>
    </form>
      <p id="text1">  </p>
      <p id="text2">  </p>
      <br>

      <?php
      $dbServername = "localhost";
      $dbUsername = "root";
      $dbPassword = "";
      $dbName = "duro";

      $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

      $sql = "SELECT * FROM Counting;";
      $result = mysqli_query($conn, $sql);

      while ($row = mysqli_fetch_assoc($result)) {
        echo "So far there has been ".$row['Duros']." monsta cardos duro'd, dealing a total of ".$row['Totals']." Damage since this page has last been refreshed";
      }

       ?>
  </div>

  <footer>
    <div>
      <p> Don't know where this beauty came from? <br> check this video out: </p>
      <a href="http://www.youtube.com/watch?v=321wCzRSySw&t=0m49s">Here</a>
    </div>
  </footer>

</body>
</html>
