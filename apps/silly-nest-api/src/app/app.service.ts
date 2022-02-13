import { Injectable } from '@nestjs/common';
import { SharedUtilSillyFamilyModel } from '@silly-monorepo/shared/util-silly-family';

@Injectable()
export class AppService {
  private sillyFamily: SharedUtilSillyFamilyModel = {
    familyName: 'silly family',
    members: ['member 1']
  }

  getFamily(): SharedUtilSillyFamilyModel {
    return this.sillyFamily
  }

  updateFamily(family: SharedUtilSillyFamilyModel): SharedUtilSillyFamilyModel {
    this.sillyFamily = family
    return this.sillyFamily
  }
}
