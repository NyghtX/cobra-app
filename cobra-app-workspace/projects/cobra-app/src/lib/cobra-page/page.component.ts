import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {CobraPage} from "./cobraPage";

@Component({
  selector: 'cobra-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  /**
   * CobraPage, die angezeigt werden soll
   */
  @Input()
  who?: CobraPage;

  /**
   * Template zum Rendern der Multiplen Optionen
   */
  @ContentChild('contentTemplate', {static: false})
  contentTemplateRef?: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
