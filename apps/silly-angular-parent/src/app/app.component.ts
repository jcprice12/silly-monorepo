import { Component, OnInit } from '@angular/core';
import {SharedDataAccessSillyFamilyService} from '@silly-monorepo/shared/data-access-silly-family'
import { SharedUtilSillyFamilyModel } from '@silly-monorepo/shared/util-silly-family'

@Component({
  selector: 'silly-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title = 'silly-angular-parent';
  public familyName = ''
  public familySize = 0

  constructor(private readonly sillyFamilyService: SharedDataAccessSillyFamilyService){}

  public async ngOnInit(): Promise<void> {
    this.startListeningForAddedFamilyMembers()
    await this.loadInitialData()
  }

  private async loadInitialData(): Promise<void> {
    const family: SharedUtilSillyFamilyModel = await this.sillyFamilyService.retrieveFamilyFromApi()
    this.familyName = family.familyName
    this.familySize = family.members.length
  }

  private startListeningForAddedFamilyMembers(): void {
    this.sillyFamilyService.familyMemberAdded.subscribe(() => {
      this.familySize++
    })
  }
}
