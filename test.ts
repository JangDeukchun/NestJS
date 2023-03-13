// 타입스크립트의 기본 정의
function sum(a:number, b:number ){
    return a + b; 
}



let is_login : boolean = false;
let num : number = 10;

let obj : object = {name: "name", age: 20};

let arr: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3]

let arr3: [string, number] = ["ih", 10];

enum fruits {appele = 'red', bananan='blue', orange='red'} // Enum member must have initializer.
let a : fruits = fruits.appele;

console.log(a);

let str : any = "hi";
let num : any = 10;
let arr : any = ["a",2,true];

function say_hi() : void {
    console.log("hi");

}

let a : void = null;
let b : void = undefined;
let a : null = null;


// never는 일반적으로 함수의 리턴 타입으로 사용되는데, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.

function invalid(message:string): never {
    throw new Error(message);
  };


type operation = {
    data: number[],
    output:(num:number)=>number[];
}

let sum:operation = {
    data:[10,30,60],
    output(num){
        return this.data.map(n=>n+num);
    }
}

let multiply : operation = {
    data: [110,230, 88, 231],
    output(num){
        return this.data.map(n=>n*num);
    }
}

function gettAge(age:number | string) : string {
    if (typeof age == 'number'){
        return age.toString();

    }
    else {
        return age;
    }
}



