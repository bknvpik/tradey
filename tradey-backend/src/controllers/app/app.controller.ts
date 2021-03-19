import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return 'Renders browse page with items in default caetgory';
  }
}
