import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table5Service } from '../service/table-5.service';
import { ITable5 } from '../table-5.model';
import { Table5FormService } from './table-5-form.service';

import { Table5UpdateComponent } from './table-5-update.component';

describe('Table5 Management Update Component', () => {
  let comp: Table5UpdateComponent;
  let fixture: ComponentFixture<Table5UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table5FormService: Table5FormService;
  let table5Service: Table5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table5UpdateComponent],
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
      .overrideTemplate(Table5UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table5UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table5FormService = TestBed.inject(Table5FormService);
    table5Service = TestBed.inject(Table5Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table5: ITable5 = { id: 456 };

      activatedRoute.data = of({ table5 });
      comp.ngOnInit();

      expect(comp.table5).toEqual(table5);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable5>>();
      const table5 = { id: 123 };
      jest.spyOn(table5FormService, 'getTable5').mockReturnValue(table5);
      jest.spyOn(table5Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table5 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table5 }));
      saveSubject.complete();

      // THEN
      expect(table5FormService.getTable5).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table5Service.update).toHaveBeenCalledWith(expect.objectContaining(table5));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable5>>();
      const table5 = { id: 123 };
      jest.spyOn(table5FormService, 'getTable5').mockReturnValue({ id: null });
      jest.spyOn(table5Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table5: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table5 }));
      saveSubject.complete();

      // THEN
      expect(table5FormService.getTable5).toHaveBeenCalled();
      expect(table5Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable5>>();
      const table5 = { id: 123 };
      jest.spyOn(table5Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table5 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table5Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
