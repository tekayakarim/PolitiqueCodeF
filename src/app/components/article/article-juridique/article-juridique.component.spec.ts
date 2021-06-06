import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleJuridiqueComponent } from './article-juridique.component';

describe('ArticleJuridiqueComponent', () => {
  let component: ArticleJuridiqueComponent;
  let fixture: ComponentFixture<ArticleJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleJuridiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
