import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuMaster } from 'src/app/Models/menu-master';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  MenuList: MenuMaster[];
  FilterList: any;
  prmMenuId: number;
  //   public MenuList: Array<any> = [
  //     {MenuID: 1, ParentId: 0,MenuCaption = 'Product' },
  //     {id: 2, text: 'Sentence 2'},
  //     {id: 3, text: 'Sentence 3'},
  //     {id: 4, text: 'Sentenc4 '},
  // ];
  constructor(private _router: Router,
    private _filter: FilterService) { }

  ngOnInit() {
    this.MenuList = [{ MenuID: 500, ParentId: 0, MenuCaption: 'Home' },
    { MenuID: 1, ParentId: 0, MenuCaption: 'Product' },
    { MenuID: 2, ParentId: 0, MenuCaption: 'Sale and Stock I' },
    { MenuID: 3, ParentId: 0, MenuCaption: 'Sale and Stock II' },
    { MenuID: 4, ParentId: 0, MenuCaption: 'Transactions' },
    { MenuID: 5, ParentId: 0, MenuCaption: 'PH/Store' },
    { MenuID: 6, ParentId: 0, MenuCaption: 'Trackers' },
    { MenuID: 7, ParentId: 0, MenuCaption: 'Dashboard' },
    { MenuID: 8, ParentId: 0, MenuCaption: 'GST Reports' },
    { MenuID: 9, ParentId: 0, MenuCaption: 'Sign Out' },
    { MenuID: 10, ParentId: 1, MenuCaption: 'Product List' },
    { MenuID: 11, ParentId: 2, MenuCaption: 'Sale Details' },
    { MenuID: 12, ParentId: 1, MenuCaption: 'Product List 2' },
    { MenuID: 13, ParentId: 1, MenuCaption: 'Product List 3' },
    { MenuID: 14, ParentId: 6, MenuCaption: 'Trackers SubMenu1' }
    ];

    // this._filter.GetMenuListAndFilterData().subscribe((data) => {
    //   this.MenuList = data.Table[0];
    // });
  }
  GetSubMenu(menuId) {
    this.prmMenuId = menuId;
    //  alert(this.prmMenuId);
  }
}
