import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table1Service } from '../service/table-1.service';
import { ITable1 } from '../table-1.model';
import { Table1FormService } from './table-1-form.service';

import { Table1UpdateComponent } from './table-1-update.component';

describe('Table1 Management Update Component', () => {
  let comp: Table1UpdateComponent;
  let fixture: ComponentFixture<Table1UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table1FormService: Table1FormService;
  let table1Service: Table1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table1UpdateComponent],
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
      .overrideTemplate(Table1UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table1UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table1FormService = TestBed.inject(Table1FormService);
    table1Service = TestBed.inject(Table1Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table1: ITable1 = { id: 456 };

      activatedRoute.data = of({ table1 });
      comp.ngOnInit();

      expect(comp.table1).toEqual(table1);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable1>>();
      const table1 = { id: 123 };
      jest.spyOn(table1FormService, 'getTable1').mockReturnValue(table1);
      jest.spyOn(table1Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table1 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table1 }));
      saveSubject.complete();

      // THEN
      expect(table1FormService.getTable1).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table1Service.update).toHaveBeenCalledWith(expect.objectContaining(table1));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable1>>();
      const table1 = { id: 123 };
      jest.spyOn(table1FormService, 'getTable1').mockReturnValue({ id: null });
      jest.spyOn(table1Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table1: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table1 }));
      saveSubject.complete();

      // THEN
      expect(table1FormService.getTable1).toHaveBeenCalled();
      expect(table1Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable1>>();
      const table1 = { id: 123 };
      jest.spyOn(table1Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table1 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table1Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
