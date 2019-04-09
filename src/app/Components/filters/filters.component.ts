import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  FilterForm: FormGroup;
  menuId: string;
  FilterList: any[];
  HideAndShowFilters: any;
  constructor(private _route: ActivatedRoute,
    private _filter: FilterService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this._route.paramMap.subscribe((data) => {
      this.menuId = (data.get('code'));
      if (this.menuId) {
        this.GetReport(this.menuId);
      }
    });
    this.InitializeFormControls();
  }

  InitializeFormControls() {
    this.FilterForm = this._fb.group({
      // Calendars
      FromDate: [''],
      ToDate: [''],
      Date: [''],
      UptoDate: [''],

      // Dropdowns

      // Textboxes

      // Radio Button
      exportAs: ['']
    });
  }

  GetReport(menuId: string) {
    this._filter.GetMenuListAndFilterData().subscribe((data) => {
      this.FilterList = data.FilterData;
      if (this.FilterList) {
        this.HideAndShowFilters = this.FilterList.filter(x => x.MenuId === Number(menuId));
        console.log(this.HideAndShowFilters[0].MenuId);
      }
    });
  }

}
