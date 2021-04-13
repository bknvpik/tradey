import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class OffersController {
    @Get('make-offer/:itemId')
    makeOffer(@Param('itemId') itemId: number): string {
        return 'Renders make-offer page for item with id: ' + itemId;
    }
}
