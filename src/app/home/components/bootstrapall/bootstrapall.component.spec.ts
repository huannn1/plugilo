import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapallComponent } from './bootstrapall.component';

describe('BootstrapallComponent', () => {
  let component: BootstrapallComponent;
  let fixture: ComponentFixture<BootstrapallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
