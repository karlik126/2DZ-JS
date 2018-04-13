class Mage{
    constructor(X,Y){
        this.coordinateX=X;
        this.coordinateY=Y;
    }


    move(dir) { // функция для первого задания
        var differenceX = this.coordinateX - dir.coordinateX;
        var differenceY = this.coordinateY - dir.coordinateY;
        document.getElementById(Math.floor(this.coordinateX)+' and '+Math.floor(this.coordinateY)).style.backgroundColor='#ffcf48';
        if(differenceX > 0){
            this.coordinateX--;
        }else if(differenceX < 0){
            this.coordinateX++;
        }
        if(differenceY > 0){
            this.coordinateY--;
        }else if(differenceY < 0){
            this.coordinateY++;
        }
        document.getElementById(Math.floor(this.coordinateX)+' and '+Math.floor(this.coordinateY)).style.backgroundColor='red';
    }


     quest(N){//функция для второго задания
        var index=0;
        var mass=[];
        var dir=new Dir(0,0);
        while (dir.coordinateX!=Math.floor(N/2) && dir.coordinateY!=Math.floor(N/2)){
            for (var i=N-1;i!=-1+index;i--){
                dir=new Dir(i,N-1-index);
                mass.push(dir);
            }
            for (var i=N-1;i!=-1+index;i--){
                dir=new Dir(0+index,i);
                mass.push(dir);
            }

            for (var i=0+index;i<N-index;i++){
                dir=new Dir(i,index);
                mass.push(dir);
            }

            for (var i=0+index;i<N-index;i++){
                dir=new Dir(N-1-index,i);
                mass.push(dir);
            }
            index++;
        }

        return mass;
    }


}
/*
 3 задание
       Классы в игре:
       боевой маг  с показателями здоровья и маны, реализующий интерфейс действия-

       действия, от которого наследуется 2 класса: кастануть заклинание или сделать ход

       карта: содержит массив с информацией о каждом поле игрового стола и что находится на этом поле и методы для работы с этим

       команды: содержит в себе магов и запрещающий атаковать своих магов




 */

function change(a,b){  // четвертое задание
    var mass=[];
    a=3;
    b=5;
    a=a+b;
    b=a-b;
    a=a-b;
    mass.push(a);
    mass.push(b);
    return mass;
}



