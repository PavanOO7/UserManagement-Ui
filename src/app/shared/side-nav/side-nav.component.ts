import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor() {}
  ngOnInit() {
    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');
    let searchBtn = document.querySelector('.bx-search');
    sidebar?.classList.toggle('open');

    // closeBtn?.addEventListener('click', () => {
    //   sidebar?.classList.toggle('open');
    //   // menuBtnChange(); //calling the function(optional)
    // });

    // searchBtn?.addEventListener('click', () => {
    //   // Sidebar open when you click on the search iocn
    //   sidebar?.classList.toggle('open');
    //   // menuBtnChange(); //calling the function(optional)
    // });

    // // following are the code to change sidebar button(optional)
    // function menuBtnChange() {
    //   if (sidebar?.classList.contains('open')) {
    //     closeBtn?.classList.replace('bx-menu', 'bx-menut'); //replacing the iocns class
    //   } else {
    //     closeBtn?.classList.replace('bx-menu', 'bx-menu'); //replacing the iocns class
    //   }
    // }
  }
}
