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
    // Add more sample data here
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.logs);
  }

  ngAfterViewInit() {
    Prism.highlightAll(); // Highlights all <code> blocks
  }



  items = [
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 1' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 2' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 3' },
  ];

  ngOnInit() {
    this.items[0].content = `
    ngAfterViewInit() {
        Prism.highlightAll();  // Highlights all <code> blocks
    }`;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
