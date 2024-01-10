import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevPage } from './dev.page';

describe('DevPage', () => {
  let component: DevPage;
  let fixture: ComponentFixture<DevPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
