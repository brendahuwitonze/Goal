import { Injectable } from '@angular/core';
import { goals } from './goalarray';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return goals
  }
  constructor() { }
}
