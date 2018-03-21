import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSolutionsComponent } from './erp-solutions.component';

describe('ErpSolutionsComponent', () => {
  let component: ErpSolutionsComponent;
  let fixture: ComponentFixture<ErpSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
