import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable1, NewTable1 } from '../table-1.model';

export type PartialUpdateTable1 = Partial<ITable1> & Pick<ITable1, 'id'>;

type RestOf<T extends ITable1 | NewTable1> = Omit<
  T,
  | 'dateDebutResv18'
  | 'dateFinResv19'
  | 'truncDateDebutResv20'
  | 'truncDateFinResv21'
  | 'dateAnnResv22'
  | 'crsInsertDate57'
  | 'dateCreaResv58'
  | 'datePremier59'
  | 'dateDernier61'
  | 'dateDernierPseudo63'
  | 'techCreateDate106'
  | 'techUpdateDate107'
  | 'dateDebutResv125'
  | 'dateFinResv126'
  | 'truncDateDebutResv127'
  | 'truncDateFinResv128'
  | 'dateAnnResv129'
  | 'crsInsertDate164'
  | 'dateCreaResv165'
  | 'datePremier166'
  | 'dateDernier168'
  | 'dateDernierPseudo170'
  | 'techCreateDate213'
  | 'techUpdateDate214'
  | 'dateDebutResv232'
  | 'dateFinResv233'
  | 'truncDateDebutResv234'
  | 'truncDateFinResv235'
  | 'dateAnnResv236'
  | 'crsInsertDate271'
  | 'dateCreaResv272'
  | 'datePremier273'
  | 'dateDernier275'
  | 'dateDernierPseudo277'
> & {
  dateDebutResv18?: string | null;
  dateFinResv19?: string | null;
  truncDateDebutResv20?: string | null;
  truncDateFinResv21?: string | null;
  dateAnnResv22?: string | null;
  crsInsertDate57?: string | null;
  dateCreaResv58?: string | null;
  datePremier59?: string | null;
  dateDernier61?: string | null;
  dateDernierPseudo63?: string | null;
  techCreateDate106?: string | null;
  techUpdateDate107?: string | null;
  dateDebutResv125?: string | null;
  dateFinResv126?: string | null;
  truncDateDebutResv127?: string | null;
  truncDateFinResv128?: string | null;
  dateAnnResv129?: string | null;
  crsInsertDate164?: string | null;
  dateCreaResv165?: string | null;
  datePremier166?: string | null;
  dateDernier168?: string | null;
  dateDernierPseudo170?: string | null;
  techCreateDate213?: string | null;
  techUpdateDate214?: string | null;
  dateDebutResv232?: string | null;
  dateFinResv233?: string | null;
  truncDateDebutResv234?: string | null;
  truncDateFinResv235?: string | null;
  dateAnnResv236?: string | null;
  crsInsertDate271?: string | null;
  dateCreaResv272?: string | null;
  datePremier273?: string | null;
  dateDernier275?: string | null;
  dateDernierPseudo277?: string | null;
};

export type RestTable1 = RestOf<ITable1>;

export type NewRestTable1 = RestOf<NewTable1>;

export type PartialUpdateRestTable1 = RestOf<PartialUpdateTable1>;

export type EntityResponseType = HttpResponse<ITable1>;
export type EntityArrayResponseType = HttpResponse<ITable1[]>;

@Injectable({ providedIn: 'root' })
export class Table1Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-1-s', 'accesssampleapplication');

  create(table1: NewTable1): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table1);
    return this.http
      .post<RestTable1>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table1: ITable1): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table1);
    return this.http
      .put<RestTable1>(`${this.resourceUrl}/${this.getTable1Identifier(table1)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table1: PartialUpdateTable1): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table1);
    return this.http
      .patch<RestTable1>(`${this.resourceUrl}/${this.getTable1Identifier(table1)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable1>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable1[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable1Identifier(table1: Pick<ITable1, 'id'>): number {
    return table1.id;
  }

  compareTable1(o1: Pick<ITable1, 'id'> | null, o2: Pick<ITable1, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable1Identifier(o1) === this.getTable1Identifier(o2) : o1 === o2;
  }

  addTable1ToCollectionIfMissing<Type extends Pick<ITable1, 'id'>>(
    table1Collection: Type[],
    ...table1sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table1s: Type[] = table1sToCheck.filter(isPresent);
    if (table1s.length > 0) {
      const table1CollectionIdentifiers = table1Collection.map(table1Item => this.getTable1Identifier(table1Item));
      const table1sToAdd = table1s.filter(table1Item => {
        const table1Identifier = this.getTable1Identifier(table1Item);
        if (table1CollectionIdentifiers.includes(table1Identifier)) {
          return false;
        }
        table1CollectionIdentifiers.push(table1Identifier);
        return true;
      });
      return [...table1sToAdd, ...table1Collection];
    }
    return table1Collection;
  }

  protected convertDateFromClient<T extends ITable1 | NewTable1 | PartialUpdateTable1>(table1: T): RestOf<T> {
    return {
      ...table1,
      dateDebutResv18: table1.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table1.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table1.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table1.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table1.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table1.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table1.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table1.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table1.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table1.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table1.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table1.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table1.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table1.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table1.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table1.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table1.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table1.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table1.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table1.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table1.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table1.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table1.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table1.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table1.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table1.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table1.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table1.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table1.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table1.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table1.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table1.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table1.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table1.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable1: RestTable1): ITable1 {
    return {
      ...restTable1,
      dateDebutResv18: restTable1.dateDebutResv18 ? dayjs(restTable1.dateDebutResv18) : undefined,
      dateFinResv19: restTable1.dateFinResv19 ? dayjs(restTable1.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable1.truncDateDebutResv20 ? dayjs(restTable1.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable1.truncDateFinResv21 ? dayjs(restTable1.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable1.dateAnnResv22 ? dayjs(restTable1.dateAnnResv22) : undefined,
      crsInsertDate57: restTable1.crsInsertDate57 ? dayjs(restTable1.crsInsertDate57) : undefined,
      dateCreaResv58: restTable1.dateCreaResv58 ? dayjs(restTable1.dateCreaResv58) : undefined,
      datePremier59: restTable1.datePremier59 ? dayjs(restTable1.datePremier59) : undefined,
      dateDernier61: restTable1.dateDernier61 ? dayjs(restTable1.dateDernier61) : undefined,
      dateDernierPseudo63: restTable1.dateDernierPseudo63 ? dayjs(restTable1.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable1.techCreateDate106 ? dayjs(restTable1.techCreateDate106) : undefined,
      techUpdateDate107: restTable1.techUpdateDate107 ? dayjs(restTable1.techUpdateDate107) : undefined,
      dateDebutResv125: restTable1.dateDebutResv125 ? dayjs(restTable1.dateDebutResv125) : undefined,
      dateFinResv126: restTable1.dateFinResv126 ? dayjs(restTable1.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable1.truncDateDebutResv127 ? dayjs(restTable1.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable1.truncDateFinResv128 ? dayjs(restTable1.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable1.dateAnnResv129 ? dayjs(restTable1.dateAnnResv129) : undefined,
      crsInsertDate164: restTable1.crsInsertDate164 ? dayjs(restTable1.crsInsertDate164) : undefined,
      dateCreaResv165: restTable1.dateCreaResv165 ? dayjs(restTable1.dateCreaResv165) : undefined,
      datePremier166: restTable1.datePremier166 ? dayjs(restTable1.datePremier166) : undefined,
      dateDernier168: restTable1.dateDernier168 ? dayjs(restTable1.dateDernier168) : undefined,
      dateDernierPseudo170: restTable1.dateDernierPseudo170 ? dayjs(restTable1.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable1.techCreateDate213 ? dayjs(restTable1.techCreateDate213) : undefined,
      techUpdateDate214: restTable1.techUpdateDate214 ? dayjs(restTable1.techUpdateDate214) : undefined,
      dateDebutResv232: restTable1.dateDebutResv232 ? dayjs(restTable1.dateDebutResv232) : undefined,
      dateFinResv233: restTable1.dateFinResv233 ? dayjs(restTable1.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable1.truncDateDebutResv234 ? dayjs(restTable1.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable1.truncDateFinResv235 ? dayjs(restTable1.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable1.dateAnnResv236 ? dayjs(restTable1.dateAnnResv236) : undefined,
      crsInsertDate271: restTable1.crsInsertDate271 ? dayjs(restTable1.crsInsertDate271) : undefined,
      dateCreaResv272: restTable1.dateCreaResv272 ? dayjs(restTable1.dateCreaResv272) : undefined,
      datePremier273: restTable1.datePremier273 ? dayjs(restTable1.datePremier273) : undefined,
      dateDernier275: restTable1.dateDernier275 ? dayjs(restTable1.dateDernier275) : undefined,
      dateDernierPseudo277: restTable1.dateDernierPseudo277 ? dayjs(restTable1.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable1>): HttpResponse<ITable1> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable1[]>): HttpResponse<ITable1[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
