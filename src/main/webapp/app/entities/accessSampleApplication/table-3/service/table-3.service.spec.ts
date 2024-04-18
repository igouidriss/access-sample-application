import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { ITable3 } from '../table-3.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../table-3.test-samples';

import { Table3Service, RestTable3 } from './table-3.service';

const requireRestSample: RestTable3 = {
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

describe('Table3 Service', () => {
  let service: Table3Service;
  let httpMock: HttpTestingController;
  let expectedResult: ITable3 | ITable3[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(Table3Service);
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

    it('should create a Table3', () => {
      const table3 = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(table3).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Table3', () => {
      const table3 = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(table3).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Table3', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Table3', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Table3', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addTable3ToCollectionIfMissing', () => {
      it('should add a Table3 to an empty array', () => {
        const table3: ITable3 = sampleWithRequiredData;
        expectedResult = service.addTable3ToCollectionIfMissing([], table3);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(table3);
      });

      it('should not add a Table3 to an array that contains it', () => {
        const table3: ITable3 = sampleWithRequiredData;
        const table3Collection: ITable3[] = [
          {
            ...table3,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addTable3ToCollectionIfMissing(table3Collection, table3);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Table3 to an array that doesn't contain it", () => {
        const table3: ITable3 = sampleWithRequiredData;
        const table3Collection: ITable3[] = [sampleWithPartialData];
        expectedResult = service.addTable3ToCollectionIfMissing(table3Collection, table3);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(table3);
      });

      it('should add only unique Table3 to an array', () => {
        const table3Array: ITable3[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const table3Collection: ITable3[] = [sampleWithRequiredData];
        expectedResult = service.addTable3ToCollectionIfMissing(table3Collection, ...table3Array);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const table3: ITable3 = sampleWithRequiredData;
        const table32: ITable3 = sampleWithPartialData;
        expectedResult = service.addTable3ToCollectionIfMissing([], table3, table32);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(table3);
        expect(expectedResult).toContain(table32);
      });

      it('should accept null and undefined values', () => {
        const table3: ITable3 = sampleWithRequiredData;
        expectedResult = service.addTable3ToCollectionIfMissing([], null, table3, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(table3);
      });

      it('should return initial array if no Table3 is added', () => {
        const table3Collection: ITable3[] = [sampleWithRequiredData];
        expectedResult = service.addTable3ToCollectionIfMissing(table3Collection, undefined, null);
        expect(expectedResult).toEqual(table3Collection);
      });
    });

    describe('compareTable3', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareTable3(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareTable3(entity1, entity2);
        const compareResult2 = service.compareTable3(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareTable3(entity1, entity2);
        const compareResult2 = service.compareTable3(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareTable3(entity1, entity2);
        const compareResult2 = service.compareTable3(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
