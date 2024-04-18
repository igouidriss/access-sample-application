import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table2Service } from '../service/table-2.service';
import { ITable2 } from '../table-2.model';
import { Table2FormService } from './table-2-form.service';

import { Table2UpdateComponent } from './table-2-update.component';

describe('Table2 Management Update Component', () => {
  let comp: Table2UpdateComponent;
  let fixture: ComponentFixture<Table2UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table2FormService: Table2FormService;
  let table2Service: Table2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table2UpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(Table2UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table2UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table2FormService = TestBed.inject(Table2FormService);
    table2Service = TestBed.inject(Table2Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table2: ITable2 = { id: 456 };

      activatedRoute.data = of({ table2 });
      comp.ngOnInit();

      expect(comp.table2).toEqual(table2);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable2>>();
      const table2 = { id: 123 };
      jest.spyOn(table2FormService, 'getTable2').mockReturnValue(table2);
      jest.spyOn(table2Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table2 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table2 }));
      saveSubject.complete();

      // THEN
      expect(table2FormService.getTable2).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table2Service.update).toHaveBeenCalledWith(expect.objectContaining(table2));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable2>>();
      const table2 = { id: 123 };
      jest.spyOn(table2FormService, 'getTable2').mockReturnValue({ id: null });
      jest.spyOn(table2Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table2: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table2 }));
      saveSubject.complete();

      // THEN
      expect(table2FormService.getTable2).toHaveBeenCalled();
      expect(table2Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable2>>();
      const table2 = { id: 123 };
      jest.spyOn(table2Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table2 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table2Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
