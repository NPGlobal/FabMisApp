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
  constructor(private _route: ActivatedRoute,
    private _filter: FilterService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((data) => {
      this.menuId = (data.get('code'));
    });
    this.GetReport(this.menuId);
  }

  GetReport(menuId: string) {
    this._filter.GetReport(menuId);
  }

}
