import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table3Service } from '../service/table-3.service';
import { ITable3 } from '../table-3.model';
import { Table3FormService } from './table-3-form.service';

import { Table3UpdateComponent } from './table-3-update.component';

describe('Table3 Management Update Component', () => {
  let comp: Table3UpdateComponent;
  let fixture: ComponentFixture<Table3UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table3FormService: Table3FormService;
  let table3Service: Table3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table3UpdateComponent],
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
      .overrideTemplate(Table3UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table3UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table3FormService = TestBed.inject(Table3FormService);
    table3Service = TestBed.inject(Table3Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table3: ITable3 = { id: 456 };

      activatedRoute.data = of({ table3 });
      comp.ngOnInit();

      expect(comp.table3).toEqual(table3);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable3>>();
      const table3 = { id: 123 };
      jest.spyOn(table3FormService, 'getTable3').mockReturnValue(table3);
      jest.spyOn(table3Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table3 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table3 }));
      saveSubject.complete();

      // THEN
      expect(table3FormService.getTable3).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table3Service.update).toHaveBeenCalledWith(expect.objectContaining(table3));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable3>>();
      const table3 = { id: 123 };
      jest.spyOn(table3FormService, 'getTable3').mockReturnValue({ id: null });
      jest.spyOn(table3Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table3: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table3 }));
      saveSubject.complete();

      // THEN
      expect(table3FormService.getTable3).toHaveBeenCalled();
      expect(table3Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable3>>();
      const table3 = { id: 123 };
      jest.spyOn(table3Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table3 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table3Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
