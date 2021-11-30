import {Component} from '@angular/core';
import {CobraToolbarService} from './cobra-toolbar.service';

/**
 * Toolbar, die dynamisch konfiguriert werden kann
 */
@Component({
  selector: 'cobra-toolbar',
  templateUrl: './cobra-toolbar.component.html',
  styleUrls: ['./cobra-toolbar.component.scss']
})
export class CobraToolbarComponent {

  constructor(
    public toolbarService: CobraToolbarService
  ) {
  }
}

