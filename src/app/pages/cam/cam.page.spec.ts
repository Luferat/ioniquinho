import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamPage } from './cam.page';

describe('CamPage', () => {
  let component: CamPage;
  let fixture: ComponentFixture<CamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
