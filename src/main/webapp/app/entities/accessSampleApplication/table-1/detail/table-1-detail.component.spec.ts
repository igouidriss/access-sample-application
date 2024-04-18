import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table1DetailComponent } from './table-1-detail.component';

describe('Table1 Management Detail Component', () => {
  let comp: Table1DetailComponent;
  let fixture: ComponentFixture<Table1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table1DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table1DetailComponent,
              resolve: { table1: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table1DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table1DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table1 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table1DetailComponent);

      // THEN
      expect(instance.table1()).toEqual(expect.objectContaining({ id: 123 }));
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
