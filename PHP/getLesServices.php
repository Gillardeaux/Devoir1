<?php

    include 'cnx.php';

    $sql = $cnx->prepare("select idService, nomService from service where idCateg = ".$_GET['id']);
    $sql->execute();

    foreach($sql->fetchAll(PDo::FETCH_ASSOC) as $ligne)
    {
        echo "<p value='".$ligne['idService']."'>".$ligne['nomService']."</p>";
    }

?>