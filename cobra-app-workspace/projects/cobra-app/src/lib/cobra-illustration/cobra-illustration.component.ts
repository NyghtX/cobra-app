import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CobraIllustrationService} from './cobra-illustration.service';
import {CobraIllustration} from './cobraIllustration';

/**
 * <example-url>http://localhost:4200/cobra-illustration</example-url>
 */
@Component({
  selector: 'cobra-illustration',
  templateUrl: './cobra-illustration.component.html',
  styleUrls: ['./cobra-illustration.component.scss']
})
export class CobraIllustrationComponent implements OnInit, OnDestroy {

  /**
   * Identifier, über welchen der Illustration-Container angesprochen kann
   */
  @Input()
  public identifier?: string;

  /**
   * Größe, in welcher die Illustration angezeigt werden soll
   * (Wird in PX gemessen und intern zu REM konvertiert)
   */
  @Input()
  public height = 10;

  /**
   * Illustration, die aktuell angezeigt wird
   */
  public illustration?: CobraIllustration;

  constructor(
    private illustrationService: CobraIllustrationService
  ) {
  }

  ngOnInit() {
    // => Beim Illustration-Service registrieren
    this.illustrationService.register(this);
  }

  ngOnDestroy() {
    // => Beim Illustration-Service deregistrieren
    this.illustrationService.deregister(this);
  }

  getHeight() {
    // => Größe wird in REM umgewandelt
    return this.height * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }


}
