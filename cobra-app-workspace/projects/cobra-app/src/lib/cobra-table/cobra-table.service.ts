import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {StringService} from '../cobra-tools/string.service';

@Injectable({
  providedIn: 'root'
})
export class CobraTableService {

  constructor(
    private stringService: StringService
  ) {
  }

  configureSort(dataSource: MatTableDataSource<any>, sort: MatSort) {
    dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if ((typeof data[sortHeaderId]) === 'string') {
        return this.stringService.clearString(data[sortHeaderId]);
      }
      return data[sortHeaderId];
    };
    dataSource.sort = sort
  }
}
