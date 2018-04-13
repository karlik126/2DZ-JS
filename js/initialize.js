var mage;
var dir;
var g=0;
function initialize(){
   // mage=new Mage(Math.floor(Math.random() * (19 - 0) + 0),Math.floor(Math.random() * (19 - 0) + 0)); //маг для 1 задания
    mage=new Mage(20,20); //маг для 2го задания
    dir=new Dir(3,2);  // куда нам нужно идти
    document.getElementById(Math.floor(mage.coordinateX)+' and '+Math.floor(mage.coordinateY)).style.backgroundColor='red';
}
initialize();
 // второе задание
var mass=mage.quest(21);

setInterval(function() {
    //mage.move(dir); // первое задание
    document.getElementById(Math.floor(mass[g].coordinateX)+' and '+Math.floor(mass[g].coordinateY)).style.backgroundColor='red';// второе задание
    g++;
}, 10);
