import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassyBrandComponent } from './classy-brand.component';

describe('ClassyBrandComponent', () => {
  let component: ClassyBrandComponent;
  let fixture: ComponentFixture<ClassyBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassyBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassyBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
