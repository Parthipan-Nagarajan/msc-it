import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { UserService } from '../../../app/data-service/user.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService,private userApi: UserService) { }

  ngOnInit() {
  }

}
