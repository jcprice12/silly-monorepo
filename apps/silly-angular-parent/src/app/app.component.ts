import { Component, OnInit } from '@angular/core';
import {SillyFamilyService} from '@silly-monorepo/shared/silly-family'

@Component({
  selector: 'silly-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title = 'silly-angular-parent';
  public familyName = ''
  public familySize = 0

  constructor(private readonly sillyFamilyService: SillyFamilyService){}

  public ngOnInit(): void {
    this.familyName = this.sillyFamilyService.getFamilyName()
    this.sillyFamilyService.familyMemberAdded.subscribe(() => {
      this.familySize = this.sillyFamilyService.getFamilySize()
    })
  }
}
