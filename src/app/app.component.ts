import { Component, computed, DestroyRef, effect, inject, input, OnInit, signal  } from '@angular/core';
import { toSignal,toObservable } from '@angular/core/rxjs-interop';

import { from, interval, map, of } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rowHeight: string = '150px';  // Default height for larger screens

  constructor(private breakpointObserver: BreakpointObserver) {
    // Observe screen size changes to dynamically adjust rowHeight
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.Small]) {
            this.rowHeight = '100px';  // Mobile screens
          } else if (result.breakpoints[Breakpoints.Medium]) {
            this.rowHeight = '120px';  // Tablet screens
          } else {
            this.rowHeight = '150px';  // Desktop screens
          }
        }
      });
  }
}
