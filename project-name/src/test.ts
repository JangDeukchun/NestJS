// interface User {
//     name: string;
//     age: number;
//   }

// class User {
//     constructor(name: string, age: number) {}
// };


// const user: User = {
//   name: 'Dexter',
//   age: 21,
// }

// function getLength(obj: string | string[]) {
//     return obj.length;
// }

// function identity(arg: any){ // 호출되는 시점에 타입이 결정된다.
//     return arg;
// }


// function deco(target: any, propertyKey: string, descriptor: PropertyDescriptor){
//     console.log("데코레이터가 평가됨");
// }

// class TestClaass {
//     @deco
//     test(){
//         console.log('함수 호출됨');
//     }
// }

// const t = new TestClaass();

// t.test();

// function Size() {
//     console.log('Size(): 평가됨');
//     // Size 데코레이터
//     return function (target: any, prop: string, desc: PropertyDescriptor) {
//        console.log('Size(): 실행됨');
//     };
//  }
//  // Color 데코레이터 팩토리
//  function Color() {
//     console.log('Color(): 평가됨');
//     // Color 데코레이터
//     return function (target: any, prop: string, desc: PropertyDescriptor) {
//        console.log('Color(): 실행됨');
//     };
//  }
//  // Button 클래스 정의
//  class Button {
//     // 메서드에 멀티 데코레이터 적용
//     @Size()
//     @Color()
//     isPressed() {}
//  }


// function methodDecorator() {
//     return function (target: any, property: string, descriptor: PropertyDescriptor) {
 
//        // descriptor.value는 test() 함수 자체를 가리킨다. 이 함수를 잠시 변수에 피신 시킨다.
//        let originMethod = descriptor.value; 
 
//        // 그리고 기존의 test() 함수의 내용을 다음과 같이 바꾼다.
//        descriptor.value = function (...args: any) {
//           console.log('before');
//           originMethod.apply(this, args); // 위에서 변수에 피신한 함수를 call,apply,bind 를 통해 호출
//           console.log('after');
//        };
//     };
//  }
 
//  class Test {
//     property = 'property';
//     hello: string;
 
//     constructor(m: string) {
//        this.hello = m;
//     }
 
//     @methodDecorator()
//     test() {
//        console.log('test');
//     }
//  }
 
// let test = new Test("world")
// test.test()