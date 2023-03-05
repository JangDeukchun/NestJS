import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 해당 클래스는 컨트롤러 역할을 하게 된다. 인수전달 가능 ex) @controller('app') 이라면 3000/app/hello 로 가게 된다.
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  // @Get('he*lo')  와일드 카드: 문자열 가운데 어떤 문자가 와도 상관없이 라우팅 패스를 사용하겠다는 뜻. 단 - 과 .은 문자열로 취급
  @Get('/hello') // ""를 사용하면 오류 발생,  3000/hello로 엔드포인트 정의 
  getHello(): string {
    return this.appService.getHello();
  }
}
