import { Controller, Get, Param } from '@nestjs/common';

@Controller('browse')
export class BrowseController {

    @Get(':category')
    browseCategory(@Param() params): string {
      return 'Renders browse page with items in category: ' + params.category;
    }
}
