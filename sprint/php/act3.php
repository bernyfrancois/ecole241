<?php
// Des prenoms dans un tableau php
//tableau associatif
$prenoms = array(
  1 => "Berny",
  2 => "Stone",
  3 => "François",
  4 => "Disick",
  5 => "Henry",
  6 => "Junior",
  7 => "Red",
  8 => "John",
  9 => "Noel",
  10 => "Prenom",
 );
 // tableau simple
$prenoms2 = array("Berny", "Stone", "François", "Disick", "Henry", "Junior", "Red", "John", "Noel", "Prenom");
// Parcours du premier tableau
for($i = 1; $i <= 10; $i++){
  echo "$i : $prenoms[$i] <br>";
};
echo "<br>";
// parcours du deuxieme tableau
foreach($prenoms as $prenom){
  echo "<li>$prenom</li>";
};
?>
