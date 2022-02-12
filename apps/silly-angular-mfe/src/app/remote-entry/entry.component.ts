import { Component, OnInit } from '@angular/core';
import {SillyFamilyService} from '@silly-monorepo/shared/silly-family'

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

  constructor(private readonly sillyFamilyService: SillyFamilyService){}

  public ngOnInit(): void {
    this.sillyFamilyMembers = this.sillyFamilyService.getFamilyMembers()
  }

  public addMember(): void {
    const familySize = this.sillyFamilyService.getFamilySize()
    this.sillyFamilyService.addFamilyMember(`member ${familySize + 1}`)
    this.sillyFamilyMembers = this.sillyFamilyService.getFamilyMembers()
  }
}
