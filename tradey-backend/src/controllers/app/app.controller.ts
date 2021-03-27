import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return [
      { id: 1, surname: 'Johnson' }
    ];
  }
}
