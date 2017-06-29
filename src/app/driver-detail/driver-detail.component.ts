import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../../model/driver';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  @Input() selectedDriver:Driver;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
