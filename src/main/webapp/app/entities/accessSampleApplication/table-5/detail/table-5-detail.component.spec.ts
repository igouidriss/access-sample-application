import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table5DetailComponent } from './table-5-detail.component';

describe('Table5 Management Detail Component', () => {
  let comp: Table5DetailComponent;
  let fixture: ComponentFixture<Table5DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table5DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table5DetailComponent,
              resolve: { table5: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table5DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table5DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table5 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table5DetailComponent);

      // THEN
      expect(instance.table5()).toEqual(expect.objectContaining({ id: 123 }));
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
