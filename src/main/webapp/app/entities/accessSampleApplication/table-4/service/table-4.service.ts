import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable4, NewTable4 } from '../table-4.model';

export type PartialUpdateTable4 = Partial<ITable4> & Pick<ITable4, 'id'>;

type RestOf<T extends ITable4 | NewTable4> = Omit<
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

export type RestTable4 = RestOf<ITable4>;

export type NewRestTable4 = RestOf<NewTable4>;

export type PartialUpdateRestTable4 = RestOf<PartialUpdateTable4>;

export type EntityResponseType = HttpResponse<ITable4>;
export type EntityArrayResponseType = HttpResponse<ITable4[]>;

@Injectable({ providedIn: 'root' })
export class Table4Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-4-s', 'accesssampleapplication');

  create(table4: NewTable4): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table4);
    return this.http
      .post<RestTable4>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table4: ITable4): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table4);
    return this.http
      .put<RestTable4>(`${this.resourceUrl}/${this.getTable4Identifier(table4)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table4: PartialUpdateTable4): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table4);
    return this.http
      .patch<RestTable4>(`${this.resourceUrl}/${this.getTable4Identifier(table4)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable4>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable4[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable4Identifier(table4: Pick<ITable4, 'id'>): number {
    return table4.id;
  }

  compareTable4(o1: Pick<ITable4, 'id'> | null, o2: Pick<ITable4, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable4Identifier(o1) === this.getTable4Identifier(o2) : o1 === o2;
  }

  addTable4ToCollectionIfMissing<Type extends Pick<ITable4, 'id'>>(
    table4Collection: Type[],
    ...table4sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table4s: Type[] = table4sToCheck.filter(isPresent);
    if (table4s.length > 0) {
      const table4CollectionIdentifiers = table4Collection.map(table4Item => this.getTable4Identifier(table4Item));
      const table4sToAdd = table4s.filter(table4Item => {
        const table4Identifier = this.getTable4Identifier(table4Item);
        if (table4CollectionIdentifiers.includes(table4Identifier)) {
          return false;
        }
        table4CollectionIdentifiers.push(table4Identifier);
        return true;
      });
      return [...table4sToAdd, ...table4Collection];
    }
    return table4Collection;
  }

  protected convertDateFromClient<T extends ITable4 | NewTable4 | PartialUpdateTable4>(table4: T): RestOf<T> {
    return {
      ...table4,
      dateDebutResv18: table4.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table4.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table4.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table4.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table4.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table4.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table4.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table4.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table4.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table4.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table4.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table4.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table4.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table4.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table4.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table4.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table4.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table4.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table4.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table4.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table4.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table4.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table4.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table4.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table4.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table4.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table4.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table4.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table4.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table4.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table4.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table4.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table4.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table4.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable4: RestTable4): ITable4 {
    return {
      ...restTable4,
      dateDebutResv18: restTable4.dateDebutResv18 ? dayjs(restTable4.dateDebutResv18) : undefined,
      dateFinResv19: restTable4.dateFinResv19 ? dayjs(restTable4.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable4.truncDateDebutResv20 ? dayjs(restTable4.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable4.truncDateFinResv21 ? dayjs(restTable4.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable4.dateAnnResv22 ? dayjs(restTable4.dateAnnResv22) : undefined,
      crsInsertDate57: restTable4.crsInsertDate57 ? dayjs(restTable4.crsInsertDate57) : undefined,
      dateCreaResv58: restTable4.dateCreaResv58 ? dayjs(restTable4.dateCreaResv58) : undefined,
      datePremier59: restTable4.datePremier59 ? dayjs(restTable4.datePremier59) : undefined,
      dateDernier61: restTable4.dateDernier61 ? dayjs(restTable4.dateDernier61) : undefined,
      dateDernierPseudo63: restTable4.dateDernierPseudo63 ? dayjs(restTable4.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable4.techCreateDate106 ? dayjs(restTable4.techCreateDate106) : undefined,
      techUpdateDate107: restTable4.techUpdateDate107 ? dayjs(restTable4.techUpdateDate107) : undefined,
      dateDebutResv125: restTable4.dateDebutResv125 ? dayjs(restTable4.dateDebutResv125) : undefined,
      dateFinResv126: restTable4.dateFinResv126 ? dayjs(restTable4.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable4.truncDateDebutResv127 ? dayjs(restTable4.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable4.truncDateFinResv128 ? dayjs(restTable4.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable4.dateAnnResv129 ? dayjs(restTable4.dateAnnResv129) : undefined,
      crsInsertDate164: restTable4.crsInsertDate164 ? dayjs(restTable4.crsInsertDate164) : undefined,
      dateCreaResv165: restTable4.dateCreaResv165 ? dayjs(restTable4.dateCreaResv165) : undefined,
      datePremier166: restTable4.datePremier166 ? dayjs(restTable4.datePremier166) : undefined,
      dateDernier168: restTable4.dateDernier168 ? dayjs(restTable4.dateDernier168) : undefined,
      dateDernierPseudo170: restTable4.dateDernierPseudo170 ? dayjs(restTable4.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable4.techCreateDate213 ? dayjs(restTable4.techCreateDate213) : undefined,
      techUpdateDate214: restTable4.techUpdateDate214 ? dayjs(restTable4.techUpdateDate214) : undefined,
      dateDebutResv232: restTable4.dateDebutResv232 ? dayjs(restTable4.dateDebutResv232) : undefined,
      dateFinResv233: restTable4.dateFinResv233 ? dayjs(restTable4.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable4.truncDateDebutResv234 ? dayjs(restTable4.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable4.truncDateFinResv235 ? dayjs(restTable4.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable4.dateAnnResv236 ? dayjs(restTable4.dateAnnResv236) : undefined,
      crsInsertDate271: restTable4.crsInsertDate271 ? dayjs(restTable4.crsInsertDate271) : undefined,
      dateCreaResv272: restTable4.dateCreaResv272 ? dayjs(restTable4.dateCreaResv272) : undefined,
      datePremier273: restTable4.datePremier273 ? dayjs(restTable4.datePremier273) : undefined,
      dateDernier275: restTable4.dateDernier275 ? dayjs(restTable4.dateDernier275) : undefined,
      dateDernierPseudo277: restTable4.dateDernierPseudo277 ? dayjs(restTable4.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable4>): HttpResponse<ITable4> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable4[]>): HttpResponse<ITable4[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
