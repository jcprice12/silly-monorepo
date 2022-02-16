import { Component, OnInit } from '@angular/core';
import {SharedDataAccessSillyFamilyService} from '@silly-monorepo/shared/data-access-silly-family'

@Component({
  selector: 'silly-monorepo-silly-angular-mfe-entry',
  template: `<div>
    <button type=button (click)=addMember()>Add Member</button>
    <ul>
      <li *ngFor="let familyMember of sillyFamilyMembers">
        {{familyMember}}
      </li>
    </ul>
  </div>`
})
export class RemoteEntryComponent implements OnInit{
  public sillyFamilyMembers: Array<string> = []

  constructor(private readonly sillyFamilyService: SharedDataAccessSillyFamilyService){}

  public async ngOnInit(): Promise<void> {
    await this.loadInitialData()
  }

  public async addMember(): Promise<void> {
    this.sillyFamilyMembers = (await this.sillyFamilyService.addFamilyMember('member')).members
  }

  private async loadInitialData(): Promise<void> {
    const family = await this.sillyFamilyService.retrieveFamilyFromApi()
    this.sillyFamilyMembers = family.members
  }
}
