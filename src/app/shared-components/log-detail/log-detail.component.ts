import { Component, Input } from '@angular/core';
import { LogInterface } from '../../models/log.interface';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss']
})
export class LogDetailComponent {
  @Input() log!: LogInterface;

}
