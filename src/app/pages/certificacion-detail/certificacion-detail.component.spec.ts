import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionDetailComponent } from './certificacion-detail.component';

describe('CertificacionDetailComponent', () => {
  let component: CertificacionDetailComponent;
  let fixture: ComponentFixture<CertificacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacionDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
