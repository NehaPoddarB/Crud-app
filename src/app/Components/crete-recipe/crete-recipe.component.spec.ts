import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteRecipeComponent } from './crete-recipe.component';

describe('CreteRecipeComponent', () => {
  let component: CreteRecipeComponent;
  let fixture: ComponentFixture<CreteRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
