import { Component, OnInit } from '@angular/core';
import {SharedDataAccessSillyFamilyService} from '@silly-monorepo/shared/data-access-silly-family'

@Component({
  selector: 'silly-monorepo-silly-angular-mfe-entry',
  templateUrl: './entry.component.html' 
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
    this.sillyFamilyMembers = (await this.sillyFamilyService.retrieveFamilyFromApi()).members
  }
}
