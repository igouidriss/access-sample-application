import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table2DetailComponent } from './table-2-detail.component';

describe('Table2 Management Detail Component', () => {
  let comp: Table2DetailComponent;
  let fixture: ComponentFixture<Table2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table2DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table2DetailComponent,
              resolve: { table2: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table2DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table2DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table2 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table2DetailComponent);

      // THEN
      expect(instance.table2()).toEqual(expect.objectContaining({ id: 123 }));
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
