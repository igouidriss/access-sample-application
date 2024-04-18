import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table4Service } from '../service/table-4.service';
import { ITable4 } from '../table-4.model';
import { Table4FormService } from './table-4-form.service';

import { Table4UpdateComponent } from './table-4-update.component';

describe('Table4 Management Update Component', () => {
  let comp: Table4UpdateComponent;
  let fixture: ComponentFixture<Table4UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table4FormService: Table4FormService;
  let table4Service: Table4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table4UpdateComponent],
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
      .overrideTemplate(Table4UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table4UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table4FormService = TestBed.inject(Table4FormService);
    table4Service = TestBed.inject(Table4Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table4: ITable4 = { id: 456 };

      activatedRoute.data = of({ table4 });
      comp.ngOnInit();

      expect(comp.table4).toEqual(table4);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable4>>();
      const table4 = { id: 123 };
      jest.spyOn(table4FormService, 'getTable4').mockReturnValue(table4);
      jest.spyOn(table4Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table4 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table4 }));
      saveSubject.complete();

      // THEN
      expect(table4FormService.getTable4).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table4Service.update).toHaveBeenCalledWith(expect.objectContaining(table4));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable4>>();
      const table4 = { id: 123 };
      jest.spyOn(table4FormService, 'getTable4').mockReturnValue({ id: null });
      jest.spyOn(table4Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table4: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table4 }));
      saveSubject.complete();

      // THEN
      expect(table4FormService.getTable4).toHaveBeenCalled();
      expect(table4Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable4>>();
      const table4 = { id: 123 };
      jest.spyOn(table4Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table4 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table4Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
