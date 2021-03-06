import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-dark-toggle',
   templateUrl: './dark-toggle.component.html',
   styleUrls: ['./dark-toggle.component.sass']
})
export class DarkToggleComponent implements OnInit {

   show = true;

   constructor() { }

   ngOnInit(): void {
   }

   toggleDarkTheme(): void {
      document.body.classList.toggle('dark-theme');
    }

}
