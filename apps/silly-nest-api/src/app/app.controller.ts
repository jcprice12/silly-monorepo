import { Body, Controller, Get, Put } from '@nestjs/common';
import { SharedUtilSillyFamilyModel } from '@silly-monorepo/shared/util-silly-family';

import { AppService } from './app.service';

@Controller('family')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFamily(): SharedUtilSillyFamilyModel {
    return this.appService.getFamily();
  }

  @Put()
  updateFamily(@Body() family: SharedUtilSillyFamilyModel): SharedUtilSillyFamilyModel {
    return this.appService.updateFamily(family);
  }
}
