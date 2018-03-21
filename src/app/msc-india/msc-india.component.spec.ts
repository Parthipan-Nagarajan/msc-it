import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscIndiaComponent } from './msc-india.component';

describe('MscIndiaComponent', () => {
  let component: MscIndiaComponent;
  let fixture: ComponentFixture<MscIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
