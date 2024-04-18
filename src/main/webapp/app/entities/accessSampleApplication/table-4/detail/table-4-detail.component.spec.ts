import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table4DetailComponent } from './table-4-detail.component';

describe('Table4 Management Detail Component', () => {
  let comp: Table4DetailComponent;
  let fixture: ComponentFixture<Table4DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table4DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table4DetailComponent,
              resolve: { table4: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table4DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table4DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table4 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table4DetailComponent);

      // THEN
      expect(instance.table4()).toEqual(expect.objectContaining({ id: 123 }));
    });
  });

  describe('PreviousState', () => {
    it('Should navigate to previous state', () => {
      jest.spyOn(window.history, 'back');
      comp.previousState();
      expect(window.history.back).toHaveBeenCalled();
    });
  });
});
