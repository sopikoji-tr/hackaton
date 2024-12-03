import { Component, Input, OnInit } from '@angular/core';
import { LogInterface } from '../../models/log.interface';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss']
})
export class LogDetailComponent implements OnInit {
  @Input() log!: LogInterface | null;

  ngOnInit(): void {
    console.log('LogDetailComponent', this.log);
  }

}
