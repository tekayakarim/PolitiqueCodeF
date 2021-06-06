import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEconomiqueComponent } from './article-economique.component';

describe('ArticleEconomiqueComponent', () => {
  let component: ArticleEconomiqueComponent;
  let fixture: ComponentFixture<ArticleEconomiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEconomiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEconomiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
