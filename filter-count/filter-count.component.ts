import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-count',
  templateUrl: './filter-count.component.html',
  styleUrls: ['./filter-count.component.scss']
})
export class FilterCountComponent implements OnInit {

  @Input() selectedFilterCount: Number = 0;

  constructor() { }

  ngOnInit() {
  }

}
