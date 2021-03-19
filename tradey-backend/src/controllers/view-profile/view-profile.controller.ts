import { Controller, Get, Param } from '@nestjs/common';

@Controller('view-profile')
export class ViewProfileController {

    @Get(':userId/:content')
    viewProfile(@Param() params): string {
        return 'Renders view-profile page of user with id: ' + params.userId + ' and content: ' + params.content;
    }
}
