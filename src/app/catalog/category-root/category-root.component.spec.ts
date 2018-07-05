import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRootComponent } from './category-root.component';

describe('CategoryRootComponent', () => {
  let component: CategoryRootComponent;
  let fixture: ComponentFixture<CategoryRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
