import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipyListComponent } from './recipy-list.component';

describe('RecipyListComponent', () => {
  let component: RecipyListComponent;
  let fixture: ComponentFixture<RecipyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
