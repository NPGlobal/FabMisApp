import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  menuId: string;
  FilterList: any[];
  HideAndShowFilters: any[];
  constructor(private _route: ActivatedRoute,
    private _filter: FilterService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((data) => {
      this.menuId = (data.get('code'));
      if (this.menuId) {
        this.GetReport(this.menuId);
      }
    });
  }

  GetReport(menuId: string) {
    // this._filter.GetMenuListAndFilterData().subscribe((data) => {
    //   this.FilterList = data.Table[1];
    // });
    this.FilterList = [{FilterId: 1, MenuId: 10,	Seasonality: 1,	Status: 1,	From: 1,	To: 0,	Division: 0,	Dept: 1,	Subdept: 0,
Category: 0,	Compn: 0, Subcompn: 0,	Aspect1: 0,	Aspect2: 0,	Aspect3: 0,	Aspect4: 0,	Color: 1,	Size: 1}];

    if (this.FilterList) {
      // tslint:disable-next-line:triple-equals
      this.HideAndShowFilters = this.FilterList.filter(x => x.MenuId == menuId);
    }
  }

}
