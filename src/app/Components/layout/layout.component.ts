import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  MenuList: any;
  prmMenuId: number;
//   public MenuList: Array<any> = [
//     {MenuId: 1, ParentId: 0,MenuCaption = 'Product' },
//     {id: 2, text: 'Sentence 2'},
//     {id: 3, text: 'Sentence 3'},
//     {id: 4, text: 'Sentenc4 '},
// ];
   constructor(private _router: Router) { }

  ngOnInit() {
    this.MenuList = [{MenuId: 500, ParentId: 0, MenuCaption: 'Home' },
    {MenuId: 1, ParentId: 0, MenuCaption: 'Product' },
    {MenuId: 2, ParentId: 0, MenuCaption: 'Sale and Stock I' },
    {MenuId: 3, ParentId: 0, MenuCaption: 'Sale and Stock II' },
    {MenuId: 4, ParentId: 0, MenuCaption: 'Transactions' },
    {MenuId: 5, ParentId: 0, MenuCaption: 'PH/Store' },
    {MenuId: 6, ParentId: 0, MenuCaption: 'Trackers' },
    {MenuId: 7, ParentId: 0, MenuCaption: 'Dashboard' },
    {MenuId: 8, ParentId: 0, MenuCaption: 'GST Reports' },
    {MenuId: 9, ParentId: 0, MenuCaption: 'Sign Out' },
    {MenuId: 10, ParentId: 1, MenuCaption: 'Product List' },
    {MenuId: 11, ParentId: 2, MenuCaption: 'Sale Details' },
    {MenuId: 12, ParentId: 1, MenuCaption: 'Product List 2' },
    {MenuId: 13, ParentId: 1, MenuCaption: 'Product List 3' },
    {MenuId: 14, ParentId: 6, MenuCaption: 'Trackers SubMenu1' }
     ];
  }
abc(a) {
  this.prmMenuId = a;
//  alert(this.prmMenuId);
}
}
