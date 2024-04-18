import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table3DetailComponent } from './table-3-detail.component';

describe('Table3 Management Detail Component', () => {
  let comp: Table3DetailComponent;
  let fixture: ComponentFixture<Table3DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table3DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table3DetailComponent,
              resolve: { table3: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table3DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table3DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table3 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table3DetailComponent);

      // THEN
      expect(instance.table3()).toEqual(expect.objectContaining({ id: 123 }));
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
