import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedUtilSillyFamilyModel } from '@silly-monorepo/shared/util-silly-family';
import { lastValueFrom, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataAccessSillyFamilyService {

  public familyMemberAdded = new Subject<string>()

  constructor(private readonly httpClient: HttpClient){}

  public async addFamilyMember(familyMember: string): Promise<SharedUtilSillyFamilyModel> {
    const family = await this.retrieveFamilyFromApi()
    family.members.push(familyMember)
    const updatedFamily = await this.updateFamilyViaApi(family)
    this.familyMemberAdded.next(familyMember)
    return updatedFamily
  }

  public retrieveFamilyFromApi(): Promise<SharedUtilSillyFamilyModel>{
    const family$ = this.httpClient.get<SharedUtilSillyFamilyModel>('/silly-nest-api/family')
    return lastValueFrom(family$)
  }

  private updateFamilyViaApi(family: SharedUtilSillyFamilyModel): Promise<SharedUtilSillyFamilyModel> {
    const updatedFamiily$ = this.httpClient.put<SharedUtilSillyFamilyModel>('/silly-nest-api/family', family)
    return lastValueFrom(updatedFamiily$)
  }
}
