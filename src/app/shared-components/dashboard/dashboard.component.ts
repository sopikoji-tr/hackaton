import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import { MatTableDataSource } from '@angular/material/table';
import { LogInterface } from '../../models/log.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';  // Add other languages if needed
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'code_snippet', 'error_message', 'suggestion', 'created_at', 'status'];
  dataSource: MatTableDataSource<LogInterface>;
  expandedRow: LogInterface | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private mainService: MainService) { 
    this.dataSource = new MatTableDataSource(this.mainService.getLogs());
  }

  ngAfterViewInit() {
    Prism.highlightAll(); // Highlights all <code> blocks
  }

  toggleRow(log: LogInterface): void {
    this.expandedRow = this.expandedRow === log ? null : log;
  }

  isExpanded(log: LogInterface): boolean {
    return this.expandedRow === log;
  }

  isExpandedRow = (index: number, row: LogInterface) => {
    return this.expandedRow === row;
  };

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
