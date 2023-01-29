interface Student {
    id: number;
    name: string;
    level:string;
    isSenior:boolean
  }
 let Student1:Student={
    id: 1,
    name:'fahad',
    level:'a',
    isSenior:true

  }
  let Student2:Student={
    id: 2,
    name:'ali',
    level:'b',
    isSenior:true

  }
  let Student3:Student={
    id: 3,
    name:'ahmad',
    level:'a',
    isSenior:false

  }
////////////////////
 


type Teacher = {
    id: number;
    name: string;
    specialty:string;
    courseNum:number
  }

  let Teacher1:Teacher={
    id: 1,
    name:'kalid',
    specialty:'ad',
    courseNum:4

  }

  let Teacher2:Teacher={
    id: 2,
    name:'saed',
    specialty:'av',
    courseNum:2

  }

  let Teacher3:Teacher={
    id: 3,
    name:'sad',
    specialty:'agg',
    courseNum:5

  }

let school= [Student1,Student2,Student3,Teacher1,Teacher2,Teacher3]

function print() {
    console.log(school);
    
}

print()

function change(array:any) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].isSenior==true) {
            array[i].isSenior=false
        }
        else if(array[i].isSenior==false){
            array[i].isSenior=true
        }
    }
    console.log(array);
    
}

function changeNum(array:any,name:string,n:number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name==name) {
            array[i].courseNum=n
       
    }
    console.log(array);
    
}
}
change(school)
changeNum(school,'sad',10)
export{}