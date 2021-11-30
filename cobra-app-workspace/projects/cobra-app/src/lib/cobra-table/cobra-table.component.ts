import {Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DisplayedColumn} from './displayed.column';
import {MatSort, SortDirection} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {NgForm} from '@angular/forms';
import {CobraTableService} from "./cobra-table.service";

@Component({
  selector: 'cobra-table',
  templateUrl: './cobra-table.component.html',
  styleUrls: ['./cobra-table.component.scss'],
  providers: [NgForm]
})
export class CobraTableComponent {
  /**
   * Template zum Rendern der Multiplen Optionen
   */
  @ContentChild('sucheTemplate', {static: false})
  sucheTemplateRef?: TemplateRef<any>;

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild('paginator') paginator?: MatPaginator;
  /*
   * Spalte, nach der die Default-Sortierung erfolgen soll.
   */
  @Input()
  defaultSortColumnName?: string;
  /*
   * Gibt an, ob die Default-Sortierung aufsteigend (Standard) oder absteigend erfolgen soll.
  */
  @Input()
  defaultSortDirection: SortDirection = 'asc';
  /*
 * Soll der Paginator genutzt werden?.
 */
  @Input()
  usePaginator = true;
  /**
   * Columns, die in der Tabelle angezeigt werden
   */
  displayedColumns?: Array<string>;
  /**
   * Data-Source, die in der Tabelle angezeigt wird
   */
  tableSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  private displayedColumnDefinitionsValue: DisplayedColumn<any>[] = [];

  constructor(private tableService: CobraTableService) {
  }

  get displayedColumnDefinitions() {
    return this.displayedColumnDefinitionsValue;
  }

  /**
   * Columns, die in der Tabelle angezeigt werden
   */
  @Input()
  set displayedColumnDefinitions(val: DisplayedColumn<any>[]) {
    if (!val)
      return;
    this.displayedColumnDefinitionsValue = val;
    this.displayedColumns = [];
    for (const displayedColumnDefinition of val) {
      this.displayedColumns.push(displayedColumnDefinition.name);
    }
  }

  @Input()
  set tableData(val: Array<any>) {
    this.tableSource.data = val;
    this.tableService.configureSort(this.tableSource, this.sort!);
    this.tableSource.paginator = this.paginator!;
  }

  memoize(col: DisplayedColumn<any>, element: any) {
    const anyCol = col as any;
    anyCol.__promise = anyCol.__promise || {};
    anyCol.__promiseId = anyCol.__promiseId || {};

    // @ts-ignore
    let promise = anyCol.__promise[element.id] || col.describeAsync(element);

    // @ts-ignore
    if (col.describe !== null && anyCol.__promiseId[element.id] !== col.describe(element)) {
      // @ts-ignore
      promise = col.describeAsync(element);
    }

    anyCol.__promise[element.id] = promise;
    // @ts-ignore
    anyCol.__promiseId[element.id] = col.describe !== null ? col.describe(element) : undefined;

    return promise;
  }
}
