import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoPage } from './geo.page';

describe('GeoPage', () => {
  let component: GeoPage;
  let fixture: ComponentFixture<GeoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
