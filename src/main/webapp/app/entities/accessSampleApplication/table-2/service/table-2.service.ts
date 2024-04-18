import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable2, NewTable2 } from '../table-2.model';

export type PartialUpdateTable2 = Partial<ITable2> & Pick<ITable2, 'id'>;

type RestOf<T extends ITable2 | NewTable2> = Omit<
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

export type RestTable2 = RestOf<ITable2>;

export type NewRestTable2 = RestOf<NewTable2>;

export type PartialUpdateRestTable2 = RestOf<PartialUpdateTable2>;

export type EntityResponseType = HttpResponse<ITable2>;
export type EntityArrayResponseType = HttpResponse<ITable2[]>;

@Injectable({ providedIn: 'root' })
export class Table2Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-2-s', 'accesssampleapplication');

  create(table2: NewTable2): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table2);
    return this.http
      .post<RestTable2>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table2: ITable2): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table2);
    return this.http
      .put<RestTable2>(`${this.resourceUrl}/${this.getTable2Identifier(table2)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table2: PartialUpdateTable2): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table2);
    return this.http
      .patch<RestTable2>(`${this.resourceUrl}/${this.getTable2Identifier(table2)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable2>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable2[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable2Identifier(table2: Pick<ITable2, 'id'>): number {
    return table2.id;
  }

  compareTable2(o1: Pick<ITable2, 'id'> | null, o2: Pick<ITable2, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable2Identifier(o1) === this.getTable2Identifier(o2) : o1 === o2;
  }

  addTable2ToCollectionIfMissing<Type extends Pick<ITable2, 'id'>>(
    table2Collection: Type[],
    ...table2sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table2s: Type[] = table2sToCheck.filter(isPresent);
    if (table2s.length > 0) {
      const table2CollectionIdentifiers = table2Collection.map(table2Item => this.getTable2Identifier(table2Item));
      const table2sToAdd = table2s.filter(table2Item => {
        const table2Identifier = this.getTable2Identifier(table2Item);
        if (table2CollectionIdentifiers.includes(table2Identifier)) {
          return false;
        }
        table2CollectionIdentifiers.push(table2Identifier);
        return true;
      });
      return [...table2sToAdd, ...table2Collection];
    }
    return table2Collection;
  }

  protected convertDateFromClient<T extends ITable2 | NewTable2 | PartialUpdateTable2>(table2: T): RestOf<T> {
    return {
      ...table2,
      dateDebutResv18: table2.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table2.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table2.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table2.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table2.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table2.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table2.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table2.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table2.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table2.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table2.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table2.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table2.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table2.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table2.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table2.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table2.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table2.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table2.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table2.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table2.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table2.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table2.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table2.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table2.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table2.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table2.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table2.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table2.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table2.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table2.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table2.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table2.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table2.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable2: RestTable2): ITable2 {
    return {
      ...restTable2,
      dateDebutResv18: restTable2.dateDebutResv18 ? dayjs(restTable2.dateDebutResv18) : undefined,
      dateFinResv19: restTable2.dateFinResv19 ? dayjs(restTable2.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable2.truncDateDebutResv20 ? dayjs(restTable2.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable2.truncDateFinResv21 ? dayjs(restTable2.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable2.dateAnnResv22 ? dayjs(restTable2.dateAnnResv22) : undefined,
      crsInsertDate57: restTable2.crsInsertDate57 ? dayjs(restTable2.crsInsertDate57) : undefined,
      dateCreaResv58: restTable2.dateCreaResv58 ? dayjs(restTable2.dateCreaResv58) : undefined,
      datePremier59: restTable2.datePremier59 ? dayjs(restTable2.datePremier59) : undefined,
      dateDernier61: restTable2.dateDernier61 ? dayjs(restTable2.dateDernier61) : undefined,
      dateDernierPseudo63: restTable2.dateDernierPseudo63 ? dayjs(restTable2.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable2.techCreateDate106 ? dayjs(restTable2.techCreateDate106) : undefined,
      techUpdateDate107: restTable2.techUpdateDate107 ? dayjs(restTable2.techUpdateDate107) : undefined,
      dateDebutResv125: restTable2.dateDebutResv125 ? dayjs(restTable2.dateDebutResv125) : undefined,
      dateFinResv126: restTable2.dateFinResv126 ? dayjs(restTable2.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable2.truncDateDebutResv127 ? dayjs(restTable2.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable2.truncDateFinResv128 ? dayjs(restTable2.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable2.dateAnnResv129 ? dayjs(restTable2.dateAnnResv129) : undefined,
      crsInsertDate164: restTable2.crsInsertDate164 ? dayjs(restTable2.crsInsertDate164) : undefined,
      dateCreaResv165: restTable2.dateCreaResv165 ? dayjs(restTable2.dateCreaResv165) : undefined,
      datePremier166: restTable2.datePremier166 ? dayjs(restTable2.datePremier166) : undefined,
      dateDernier168: restTable2.dateDernier168 ? dayjs(restTable2.dateDernier168) : undefined,
      dateDernierPseudo170: restTable2.dateDernierPseudo170 ? dayjs(restTable2.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable2.techCreateDate213 ? dayjs(restTable2.techCreateDate213) : undefined,
      techUpdateDate214: restTable2.techUpdateDate214 ? dayjs(restTable2.techUpdateDate214) : undefined,
      dateDebutResv232: restTable2.dateDebutResv232 ? dayjs(restTable2.dateDebutResv232) : undefined,
      dateFinResv233: restTable2.dateFinResv233 ? dayjs(restTable2.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable2.truncDateDebutResv234 ? dayjs(restTable2.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable2.truncDateFinResv235 ? dayjs(restTable2.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable2.dateAnnResv236 ? dayjs(restTable2.dateAnnResv236) : undefined,
      crsInsertDate271: restTable2.crsInsertDate271 ? dayjs(restTable2.crsInsertDate271) : undefined,
      dateCreaResv272: restTable2.dateCreaResv272 ? dayjs(restTable2.dateCreaResv272) : undefined,
      datePremier273: restTable2.datePremier273 ? dayjs(restTable2.datePremier273) : undefined,
      dateDernier275: restTable2.dateDernier275 ? dayjs(restTable2.dateDernier275) : undefined,
      dateDernierPseudo277: restTable2.dateDernierPseudo277 ? dayjs(restTable2.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable2>): HttpResponse<ITable2> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable2[]>): HttpResponse<ITable2[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
