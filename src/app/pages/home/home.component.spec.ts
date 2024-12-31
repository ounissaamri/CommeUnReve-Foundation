import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BlogComponent } from '../../shared/components/blog/blog.component';
import { BlogService } from '../../shared/services/blog.service';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogServiceMock: any;

  beforeEach(async () => {
    // Mock du service BlogService
    blogServiceMock = {
      getArticles: jasmine.createSpy('getArticles').and.returnValue(of([{ id: 1, title: 'Test Article' }])),
    };

    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
      providers: [
        { provide: BlogService, useValue: blogServiceMock }, // Remplace le vrai service par le mock
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
  });

  it('should fetch articles on ngOnInit', () => {
    component.ngOnInit(); // Appelle la méthode ngOnInit

    // Vérifie que le service a été appelé
    expect(blogServiceMock.getArticles).toHaveBeenCalled();

    // Vérifie que les articles ont été assignés au composant
    expect(component.articles).toEqual([{ id: 1, title: 'Test Article' }]);
  });
});
