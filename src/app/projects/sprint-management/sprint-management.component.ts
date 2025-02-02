import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-sprint-management',
  templateUrl: './sprint-management.component.html',
  styleUrl: './sprint-management.component.css'
})
export class SprintManagementComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  inprogress = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  onHold = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inReview = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
