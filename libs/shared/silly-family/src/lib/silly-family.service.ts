import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SillyFamilyService {

  private sillyFamilyMembers: Array<string> = []
  public familyMemberAdded = new Subject<string>()

  public getFamilyName(): string {
    return 'silly family'
  }

  public getFamilyMembers(): Array<string> {
    return this.sillyFamilyMembers
  }

  public getFamilySize(): number {
    return this.sillyFamilyMembers.length
  }

  public addFamilyMember(familyMember: string): void {
    this.sillyFamilyMembers.push(familyMember)
    this.familyMemberAdded.next(familyMember)
  }
}
