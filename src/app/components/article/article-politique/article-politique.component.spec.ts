import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePolitiqueComponent } from './article-politique.component';

describe('ArticlePolitiqueComponent', () => {
  let component: ArticlePolitiqueComponent;
  let fixture: ComponentFixture<ArticlePolitiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePolitiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
