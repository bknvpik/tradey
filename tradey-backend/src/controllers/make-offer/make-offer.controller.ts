import { Controller, Get, Param } from '@nestjs/common';

@Controller('make-offer')
export class MakeOfferController {

    @Get(':itemId')
    makeOffer(@Param() params): string {
        return 'Renders make-offer page for item with id: ' + params.itemId;
    }
}
