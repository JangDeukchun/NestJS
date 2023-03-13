// // 타입스크립트의 기본 정의
// function sum(a:number, b:number ){
//     return a + b; 
// }



// let is_login : boolean = false;
// let num : number = 10;

// let obj : object = {name: "name", age: 20};

// let arr: number[] = [1,2,3];
// let arr2: Array<number> = [1,2,3]

// let arr3: [string, number] = ["ih", 10];

// enum fruits {appele = 'red', bananan='blue', orange='red'} // Enum member must have initializer.
// let a : fruits = fruits.appele;

// console.log(a);

// let str : any = "hi";
// let num : any = 10;
// let arr : any = ["a",2,true];

// function say_hi() : void {
//     console.log("hi");

// }

// let a : void = null;
// let b : void = undefined;
// let a : null = null;


// // never는 일반적으로 함수의 리턴 타입으로 사용되는데, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.

// function invalid(message:string): never {
//     throw new Error(message);
//   };


// type operation = {
//     data: number[],
//     output:(num:number)=>number[];
// }

// let sum:operation = {
//     data:[10,30,60],
//     output(num){
//         return this.data.map(n=>n+num);
//     }
// }

// let multiply : operation = {
//     data: [110,230, 88, 231],
//     output(num){
//         return this.data.map(n=>n*num);
//     }
// }

// function gettAge(age:number | string) : string {
//     if (typeof age == 'number'){
//         return age.toString();

//     }
//     else {
//         return age;
//     }
// }



// // 타입스크립트 함수
// function sum(a:number, b:number): number {
//     return a + b;
// }

// // 타입스크립트는 파라미터의 타입이 다를 때뿐만 아니라, 지정된 개수의 파라미터를 전달하지 않았을 때도 에러가 발생하기 때문에 정상적으로 리턴되는 자바스크립트에 비해서 에러 핸들링에 유리하다.
// sum(1); // 에러 발생
// sum(1,2,3); // 에러 발생

// function sum(a:number, b?:number):number { // 파라미터가 전달되지 않아도 함수가 정상적으로 실행되게 하고 싶을 경우 ?를 작성해준다
//     if(b! == undefined){
//         return a + b;
//     }
//     else {
//         return a;
//     }
// }

// // sum(10, 20);
// // sum(10);

// /*
// function sum(a?: number, b: number): number { < -- 이건 말이 되지 않는다.
//   return a + b;
// } //error, A required parameter cannot follow an optional parameter.
// */

// // 굳이 선택적 파라미터를 먼저 쓰려면 ? 유니온타입을 섞어주자
// function sum(a:number | undefined, b: number): number {
//     if(a !== undefined){
//         return a+b;
//     }
//     else{
//         return b;
//     }
// }

// // sum(undefined,10);

// // 리턴값이 없는 경우에는 void 타입을 지정하자
// function sayhi(): void {
//     console.log('his');
// }


// // 매개변수 기본값 지정
// function sum(a=1, b:number): number {
//     return a + b;
// }

// // sum(undefined,3) // 4 라는 값이 출력된다.


// function sum(...nums:number[]): number { // javaSciprt의 REST 파라미터를 사용하면 인자를 배열 형태로 받아오기 때문에 인자를 배열로 정의해주어야 한다.
//     let total_nums = 0;
//     for(let key in nums){
//         total_nums += nums[key]
//     }
// }

// interface User {
//     name: string
// }

// const Sam: User = {name: 'Sam'};

// function show_name(){
//     console.log(this.name)
// }

// const a = show_name(Sam);
// // a(); 타입스크립트에서는 this에 타입 지정이 되지 않아서 에러가 발생한다.

// interface User {
//     name: string
// }


// // 만약 인자를 전달해야 한다면 첫번째 파라미터로 this의 타입을 동일하게 작성해주고 다음 파라미터에 인자를 전달해주면 된다. 함수를 실행할 때는 첫번째 파라미터가 정상적으로 age로 받아들여진다.
// const Sam: User = {name: 'sam'}
// function show_name(this:User, age:number){
//     console.log(this.name, age);
// }

// const a = show_name.bind(Sam);


// // 인터페이스
// /*
// 인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미하며 다음과 같은 범주에 대해 약속을 정의할 수 있다.

// 객체의 스펙(속성과 속성의 타입)
// 함수의 파라미터
// 함수의 스펙(파라미터, 반환 타입 등)
// 배열과 객체를 접근하는 방식
// 클래스
// */

// interface PersonAge{ // 첫글자는 대게 대문자로 선언한다
//     age: number;
// }

// function logAge(obj: PersonAge){
//     console.log(obj.age);
// }

// let person = {name: 'cap', age: 29};

// logAge(person);

// interface CraftBeer{
//     name: string;
//     hop?: number; // ?를 사용하여 옵션 속성을 지정하면 객체를 인자로 전달하여도 에러가 발생하지 않는다.
// }


// let myBeer = {
//     name: "saporo"
// };

// function brewBEER(beer: CraftBeer){
//     console.log(beer.name)
// }

// brewBEER(myBeer);

// // 읽기 전용 속성

// interface PersonAge {
//     readonly age: number;
// }

// let james : PersonAge = {age: 26};
// james.age = 27 // 읽기전용 속성이기 때문에 에러가 발생한다. 처음에 값을 할당하고, 그 이후에 변경할 수 없다.

// // 읽기 전용 배열
// let arr: ReadonlyArray<number> = [1,2,3];
// arr.splice(0,1); // 에러
// arr.push(4); // 에러
// arr[0] = 100; // 에러


// // 객체 선언과 관련된 타입 체킹

// interface CraftBeer {
//     brand?: string;
// }

// function brewBeer(beer: CraftBeer) {
//     // ... 
// }

// brewBeer({brandon: 'what'}) // 엄밀한 속성검사로 인해 오탈자 오류가 발생한다.

// let myBeer = {brandon: 'what'};
// brewBeer(myBeer as CraftBeer) // 추론을 무시하고싶을 때 as를 선언한다.

// // 인터페이스에 다른 속성을 정의할 수 있도록 설정해주어야 한다.
// interface CraftBeer{
//     brand?: string;
//     [propName: string] : any;
// }

// // 함수 타입
// interface login{
//     (username: string, password: string): boolean;
// }

// let loginUser: login;
// loginUser = function(id: string, pw: string){
//     console.log(id, pw);
//     return true;
// }


// // 클래스 타입
// interface CraftBeer {
//     beerName: string;
//     nameBeer(beer: string): void;
// }   

// class myBeer implements CraftBeer {
//     constructor() {}
//     beerName: string = 'baby guinness';
//     nameBeer(b: string){
//         this.beerName = b;
//     }
// }

// // 인터페이스 확장

// interface Person {
//     name: string;

// }

// interface Drinker {
//     dirnk: string;
// }

// interface Developer extends Person,Drinker {
//     skill: string;
// }

// let fe = {} as Developer;
// fe.name = 'josh';
// fe.skill = 'typescript';
// fe.dirnk = 'beer';

// // 하이브리드 타입

interface CraftBeer {
    (beer: string): string;
    brand: string;
    brew(): void;
}


function myBeer(): CraftBeer {
    let my = (function(beer: string) {}) as CraftBeer;
    my.brand = 'beer kitchen';
    my.brew = function(){
        return my;
    }

    
}

let brewedBeer = myBeer();
brewBeer('my first beer');
brewBeer.brand = 'pangyo craft';
brewBeer.brew();


// interface personAge {
//     age: number;
//   }
  
// function logAge(obj: personAge) {
//   console.log(obj.age);
// }
// let person = { name: "Capt", age: 28 };
// logAge(person);
