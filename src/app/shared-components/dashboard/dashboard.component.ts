import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import { MatTableDataSource } from '@angular/material/table';
import { LogInterface } from '../../models/log.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';  // Add other languages if needed
import { MainService } from 'src/app/services/main.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'application_name', 'code_snippet', 'error_message', 'suggestion', 'created_at', 'status'];
  dataSource!: MatTableDataSource<LogInterface>;
  expandedRow: LogInterface | null = null;
  expandedRowId: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private mainService: MainService) {
    this.mainService.getLogs().subscribe((logs: any) => {this.dataSource = new MatTableDataSource(logs);});
    // this.dataSource = new MatTableDataSource(this.mainService.getLogs());
  }

  ngAfterViewInit() {
    Prism.highlightAll(); // Highlights all <code> blocks
  }

  toggleRow(log: LogInterface): void {
    this.expandedRow = this.expandedRow === log ? null : log;
    this.expandedRowId = this.expandedRowId === log.id ? null : log.id;
    console.log('conksks', this.expandedRow);
  }

  isRowExpanded(logId?: number): boolean {
    return this.expandedRowId === logId;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
