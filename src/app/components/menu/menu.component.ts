import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  rutas = [
    {
      name: 'home',
      path: '/home',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ];
}
