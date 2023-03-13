
// 에러를 커스텀 하기 위한 코드ffff
export class CustomError extends Error {
    constructor(message) {
        super(message); // 여기에 더 message 이외에 더 많은 종류의 응답을 추가할 수 있습니다, super는 부모클래스의 속성을 사용하기 위함인데 왜 쓰는거?
    }
}





String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};