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

    if (this.FilterList) {
      // tslint:disable-next-line:triple-equals
      this.HideAndShowFilters = this.FilterList.filter(x => x.MenuID == menuId);
    }
  }

}
