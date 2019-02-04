import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecbookComponent } from './specbook.component';

describe('SpecbookComponent', () => {
  let component: SpecbookComponent;
  let fixture: ComponentFixture<SpecbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
