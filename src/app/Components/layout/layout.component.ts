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
  MenuId: number;

  constructor(private _router: Router,
    private _filter: FilterService) { }

  ngOnInit() {

    this._filter.GetMenuListAndFilterData().subscribe((data) => {
      this.MenuList = data.MenuList;
    });
  }
  GetSubMenu(menuId) {
    this.MenuId = menuId;
  }
}


/*
MenuID 107

Above %: null
Aspect1: true
Aspect2: true
Aspect3: true
Aspect4: true
Below %: null
Category: true
Color: true
Compn: true
Created (If Checked Expired): null
DL Format: null
DL No: null
DL No/ PromoName/ Long Description: null
DL Type: null
Date: null
Dept: true
Detail: null
Division: true
EDA - Month: null
EDA - Year: null
"Employee Name ": null
Exchange Long RRNO.: null
Export/Print/Screen: true
FabConnect ID: null
FilterId: 1
Free Search On SKU: null
Free Search TONo: null
From: true
From Month-Year: null
From PH Filter: null
From Store/ DC/ MRW/ PH Filter: null
Gv No.: null
LDS: null
Long Description: true
MR Filter: null
MR/Store: null
MR/Store/PH Filter: null
MenuId: 225
Month: null
OrgUnitCode Wise: null
PH / Vendor Filter: null
PH Filter: null
PO No.: null
PO Status: null
PPINO: null
"Promo / PH/ Vendor Filter ": true
Promo Filter: null
Promotions: null
Report Type: null
Report View: null
SI OrderNO: null
SKU Description: null
SKU ID/Desc And Customer Search: null
SKU Master Name: null
SKU Name: null
SKUID/SKU Description: null
Search: null
Search on: null
Seasonality: true
Shipped Status: null
Short GR No.: null
Short GRN No.: null
Short Inv. No.: null
Short PO No.: null
Short SANO: null
Short Source ID: null
Short TINo: null
Short TONo: null
Short TR No.: null
Size: true
Source Type: null
State Name: null
Status: true
Status Selection: null
Store Filter: null
Store Filter (POS Sale Only): null
Store Wise: null
Store/ DC/ MRW/ PH Filter: null
Store/ DC/ PH Filter: null
Store/PH Filter: null
Subcompn: true
Subdept: true
Target - Month: null
Target - Year: null
Till No.: null
To: true
To Month-Year: null
To Store/ DC/ MRW/ PH Filter: null
To Store/DC/MRW Filter: null
Type: null
Upto: null
Value or %: null
Year: null
isCancellationDate: null


*/
