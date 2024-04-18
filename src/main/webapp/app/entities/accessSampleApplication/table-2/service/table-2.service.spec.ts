import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { ITable2 } from '../table-2.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../table-2.test-samples';

import { Table2Service, RestTable2 } from './table-2.service';

const requireRestSample: RestTable2 = {
  ...sampleWithRequiredData,
  dateDebutResv18: sampleWithRequiredData.dateDebutResv18?.format(DATE_FORMAT),
  dateFinResv19: sampleWithRequiredData.dateFinResv19?.format(DATE_FORMAT),
  truncDateDebutResv20: sampleWithRequiredData.truncDateDebutResv20?.format(DATE_FORMAT),
  truncDateFinResv21: sampleWithRequiredData.truncDateFinResv21?.format(DATE_FORMAT),
  dateAnnResv22: sampleWithRequiredData.dateAnnResv22?.format(DATE_FORMAT),
  crsInsertDate57: sampleWithRequiredData.crsInsertDate57?.format(DATE_FORMAT),
  dateCreaResv58: sampleWithRequiredData.dateCreaResv58?.format(DATE_FORMAT),
  datePremier59: sampleWithRequiredData.datePremier59?.format(DATE_FORMAT),
  dateDernier61: sampleWithRequiredData.dateDernier61?.format(DATE_FORMAT),
  dateDernierPseudo63: sampleWithRequiredData.dateDernierPseudo63?.format(DATE_FORMAT),
  techCreateDate106: sampleWithRequiredData.techCreateDate106?.format(DATE_FORMAT),
  techUpdateDate107: sampleWithRequiredData.techUpdateDate107?.format(DATE_FORMAT),
  dateDebutResv125: sampleWithRequiredData.dateDebutResv125?.format(DATE_FORMAT),
  dateFinResv126: sampleWithRequiredData.dateFinResv126?.format(DATE_FORMAT),
  truncDateDebutResv127: sampleWithRequiredData.truncDateDebutResv127?.format(DATE_FORMAT),
  truncDateFinResv128: sampleWithRequiredData.truncDateFinResv128?.format(DATE_FORMAT),
  dateAnnResv129: sampleWithRequiredData.dateAnnResv129?.format(DATE_FORMAT),
  crsInsertDate164: sampleWithRequiredData.crsInsertDate164?.format(DATE_FORMAT),
  dateCreaResv165: sampleWithRequiredData.dateCreaResv165?.format(DATE_FORMAT),
  datePremier166: sampleWithRequiredData.datePremier166?.format(DATE_FORMAT),
  dateDernier168: sampleWithRequiredData.dateDernier168?.format(DATE_FORMAT),
  dateDernierPseudo170: sampleWithRequiredData.dateDernierPseudo170?.format(DATE_FORMAT),
  techCreateDate213: sampleWithRequiredData.techCreateDate213?.format(DATE_FORMAT),
  techUpdateDate214: sampleWithRequiredData.techUpdateDate214?.format(DATE_FORMAT),
  dateDebutResv232: sampleWithRequiredData.dateDebutResv232?.format(DATE_FORMAT),
  dateFinResv233: sampleWithRequiredData.dateFinResv233?.format(DATE_FORMAT),
  truncDateDebutResv234: sampleWithRequiredData.truncDateDebutResv234?.format(DATE_FORMAT),
  truncDateFinResv235: sampleWithRequiredData.truncDateFinResv235?.format(DATE_FORMAT),
  dateAnnResv236: sampleWithRequiredData.dateAnnResv236?.format(DATE_FORMAT),
  crsInsertDate271: sampleWithRequiredData.crsInsertDate271?.format(DATE_FORMAT),
  dateCreaResv272: sampleWithRequiredData.dateCreaResv272?.format(DATE_FORMAT),
  datePremier273: sampleWithRequiredData.datePremier273?.format(DATE_FORMAT),
  dateDernier275: sampleWithRequiredData.dateDernier275?.format(DATE_FORMAT),
  dateDernierPseudo277: sampleWithRequiredData.dateDernierPseudo277?.format(DATE_FORMAT),
};

describe('Table2 Service', () => {
  let service: Table2Service;
  let httpMock: HttpTestingController;
  let expectedResult: ITable2 | ITable2[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(Table2Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a Table2', () => {
      const table2 = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(table2).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Table2', () => {
      const table2 = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(table2).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Table2', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Table2', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Table2', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addTable2ToCollectionIfMissing', () => {
      it('should add a Table2 to an empty array', () => {
        const table2: ITable2 = sampleWithRequiredData;
        expectedResult = service.addTable2ToCollectionIfMissing([], table2);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(table2);
      });

      it('should not add a Table2 to an array that contains it', () => {
        const table2: ITable2 = sampleWithRequiredData;
        const table2Collection: ITable2[] = [
          {
            ...table2,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addTable2ToCollectionIfMissing(table2Collection, table2);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Table2 to an array that doesn't contain it", () => {
        const table2: ITable2 = sampleWithRequiredData;
        const table2Collection: ITable2[] = [sampleWithPartialData];
        expectedResult = service.addTable2ToCollectionIfMissing(table2Collection, table2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(table2);
      });

      it('should add only unique Table2 to an array', () => {
        const table2Array: ITable2[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const table2Collection: ITable2[] = [sampleWithRequiredData];
        expectedResult = service.addTable2ToCollectionIfMissing(table2Collection, ...table2Array);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const table2: ITable2 = sampleWithRequiredData;
        const table22: ITable2 = sampleWithPartialData;
        expectedResult = service.addTable2ToCollectionIfMissing([], table2, table22);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(table2);
        expect(expectedResult).toContain(table22);
      });

      it('should accept null and undefined values', () => {
        const table2: ITable2 = sampleWithRequiredData;
        expectedResult = service.addTable2ToCollectionIfMissing([], null, table2, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(table2);
      });

      it('should return initial array if no Table2 is added', () => {
        const table2Collection: ITable2[] = [sampleWithRequiredData];
        expectedResult = service.addTable2ToCollectionIfMissing(table2Collection, undefined, null);
        expect(expectedResult).toEqual(table2Collection);
      });
    });

    describe('compareTable2', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareTable2(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareTable2(entity1, entity2);
        const compareResult2 = service.compareTable2(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareTable2(entity1, entity2);
        const compareResult2 = service.compareTable2(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareTable2(entity1, entity2);
        const compareResult2 = service.compareTable2(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
