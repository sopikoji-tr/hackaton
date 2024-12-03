import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import { MatTableDataSource } from '@angular/material/table';
import { LogInterface } from '../../models/log.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';  // Add other languages if needed


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

  logs: LogInterface[] = [
    {
      id: 1,
      code_snippet: 'console.log("Error")',
      error_message: 'ReferenceError: x is not defined',
      suggestion: 'Declare the variable x before using it.',
      created_at: '2024-12-02',
      status: 'Open',
    },
    {
      id: 2,
      code_snippet: 'let x = 5; console.log(x)',
      error_message: 'No error',
      suggestion: 'None needed',
      created_at: '2024-12-03',
      status: 'Resolved',
    },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.logs);
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

  items = [
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', snippet: 'Content for section 1' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', snippet: 'Content for section 2' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', snippet: 'Content for section 3' },
  ];

  ngOnInit() {
    this.items[0].snippet = `
    ngAfterViewInit() { 
        Prism.highlightAll();  // Highlights all <code> blocks
    }
     ngAfterViewInit() { 
        Prism.highlightAll();  // Highlights all <code> blocks
    }
         ngAfterViewInit() { 
        Prism.highlightAll();  // Highlights all <code> blocks
    }`;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
