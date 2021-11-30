import {TestBed} from '@angular/core/testing';

import {CobraIllustrationService} from './cobra-illustration.service';
import {CobraIllustrationComponent} from './cobra-illustration.component';

describe('IllustrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    expect(service).toBeTruthy();
  });

  it('Sollte Illustrations initialisieren', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    service.initIllustrations([
      {
        path: 'test/path.svg',
        description: 'TestDesc',
        identifier: 'TestIdent'
      }
    ]);
  });

  it('Sollte Component registrieren und deregistrieren', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    const component = new CobraIllustrationComponent(service);
    service.register(component);
    service.deregister(component);
  });

  it('Sollte Illustration in Component setzen', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    service.initIllustrations([
      {
        path: 'test/path.svg',
        description: 'TestDesc',
        identifier: '1234'
      }
    ]);
    const component = new CobraIllustrationComponent(service);
    component.identifier = '123';
    service.register(component);
    service.setIllustration('123', '1234');
  });

  it('Sollte Illustration nicht in deregistrierter Component setzen', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    service.initIllustrations([
      {
        path: 'test/path.svg',
        description: 'TestDesc',
        identifier: '1234'
      }
    ]);
    const component = new CobraIllustrationComponent(service);
    component.identifier = '123';
    service.register(component);
    service.deregister(component);
    expect(() => service.setIllustration('123', '1234')).toThrowError();
  });

  it('Sollte keine nicht vorhandene Illustration setzen', () => {
    const service: CobraIllustrationService = TestBed.get(CobraIllustrationService);
    service.initIllustrations([]);
    const component = new CobraIllustrationComponent(service);
    component.identifier = '123';
    service.register(component);
    expect(() => service.setIllustration('123', '1234')).toThrowError();
  });


});
