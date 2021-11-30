import {AfterViewInit, Directive, OnInit} from '@angular/core';
import {DisplayedColumn} from './displayed.column';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class CobraTableSucheBase<T> implements AfterViewInit, OnInit {
  /**
   * Daten, die gefunden wurden
   */
  data: Array<T> = [];

  /**
   * Definitionen der Columns, die angezeigt werden sollen
   */
  displayedColumns: Array<DisplayedColumn<T>> = [];

  /**
   * Führt die Suche aus
   */
  searchCount = 0;

  search() {
    this.searchCount++;
    const count = this.searchCount;
    this.searchImplementation().then(value => {
      if (count !== this.searchCount) {
        return Promise.reject('overtake');
      } else {
        return Promise.resolve(value);
      }
    }).then(value => {
      this.data = value;
      this.searchCount = 0;
    }).catch(() => {
    });
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.displayedColumns = this.defineDisplayedColumns();
    });
  }

  async ngOnInit() {
    // => Initiale Suche ausführen
    await this.search();
  }

  protected abstract defineDisplayedColumns(): Array<DisplayedColumn<T>>;

  /**
   * Implementierung der Suche
   * @protected
   */
  protected abstract searchImplementation(): Promise<Array<T>>;
}
