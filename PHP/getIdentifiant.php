<?php

    include 'cnx.php';

    echo"<label>Quel est votre identifiant ?</label>";
    echo"<br>";
    echo"<br>";
    echo"<input type=text value='' id='recherche' >";
    echo"<br>";
    echo"<br>";
    echo"<input type=button value='Chercher les deals' id='btnRecherche' onclick='AfficherLesDeals'>";

?>