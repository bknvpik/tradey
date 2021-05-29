import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('about')
  about(): string {
    return "Renders about page";
  }

}
