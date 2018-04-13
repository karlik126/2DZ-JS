<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BITVA</title>
    <link rel="stylesheet" type="text/css" href="css/css.css">
</head>
<body>
<div class="pole">
<?
$width=21;
$height=21;
$w=100/$width;
$w=$w.'%';
$h=100/$height;
$h=$h.'%';
for ($i=0;$i<$width;$i++){
    for ($j=0;$j<$height;$j++){
        $left=(100/$width)*$i;
        $left=$left.'%';
        $top=(100/$height)*$j;
        $top=$top.'%';
        echo "<div id='$i and $j' class='pustPole' style='left:$left;top:$top;width: $w;height: $h;'>$i,$j</div>";
    }
}


?>
</div>
<div style="position:absolute;top:100%;">
    <tr>
        <th>Команда</th>
        <th>Очки</th>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2</td>
    </tr>
</div>



</body>
<script src="js/coordinate.js"></script>
<script src="js/mage.js"></script>
<script src="js/initialize.js"></script>
</html>