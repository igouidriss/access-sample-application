import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable5, NewTable5 } from '../table-5.model';

export type PartialUpdateTable5 = Partial<ITable5> & Pick<ITable5, 'id'>;

type RestOf<T extends ITable5 | NewTable5> = Omit<
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

export type RestTable5 = RestOf<ITable5>;

export type NewRestTable5 = RestOf<NewTable5>;

export type PartialUpdateRestTable5 = RestOf<PartialUpdateTable5>;

export type EntityResponseType = HttpResponse<ITable5>;
export type EntityArrayResponseType = HttpResponse<ITable5[]>;

@Injectable({ providedIn: 'root' })
export class Table5Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-5-s', 'accesssampleapplication');

  create(table5: NewTable5): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table5);
    return this.http
      .post<RestTable5>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table5: ITable5): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table5);
    return this.http
      .put<RestTable5>(`${this.resourceUrl}/${this.getTable5Identifier(table5)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table5: PartialUpdateTable5): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table5);
    return this.http
      .patch<RestTable5>(`${this.resourceUrl}/${this.getTable5Identifier(table5)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable5>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable5[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable5Identifier(table5: Pick<ITable5, 'id'>): number {
    return table5.id;
  }

  compareTable5(o1: Pick<ITable5, 'id'> | null, o2: Pick<ITable5, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable5Identifier(o1) === this.getTable5Identifier(o2) : o1 === o2;
  }

  addTable5ToCollectionIfMissing<Type extends Pick<ITable5, 'id'>>(
    table5Collection: Type[],
    ...table5sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table5s: Type[] = table5sToCheck.filter(isPresent);
    if (table5s.length > 0) {
      const table5CollectionIdentifiers = table5Collection.map(table5Item => this.getTable5Identifier(table5Item));
      const table5sToAdd = table5s.filter(table5Item => {
        const table5Identifier = this.getTable5Identifier(table5Item);
        if (table5CollectionIdentifiers.includes(table5Identifier)) {
          return false;
        }
        table5CollectionIdentifiers.push(table5Identifier);
        return true;
      });
      return [...table5sToAdd, ...table5Collection];
    }
    return table5Collection;
  }

  protected convertDateFromClient<T extends ITable5 | NewTable5 | PartialUpdateTable5>(table5: T): RestOf<T> {
    return {
      ...table5,
      dateDebutResv18: table5.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table5.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table5.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table5.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table5.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table5.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table5.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table5.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table5.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table5.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table5.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table5.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table5.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table5.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table5.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table5.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table5.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table5.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table5.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table5.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table5.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table5.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table5.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table5.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table5.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table5.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table5.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table5.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table5.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table5.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table5.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table5.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table5.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table5.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable5: RestTable5): ITable5 {
    return {
      ...restTable5,
      dateDebutResv18: restTable5.dateDebutResv18 ? dayjs(restTable5.dateDebutResv18) : undefined,
      dateFinResv19: restTable5.dateFinResv19 ? dayjs(restTable5.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable5.truncDateDebutResv20 ? dayjs(restTable5.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable5.truncDateFinResv21 ? dayjs(restTable5.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable5.dateAnnResv22 ? dayjs(restTable5.dateAnnResv22) : undefined,
      crsInsertDate57: restTable5.crsInsertDate57 ? dayjs(restTable5.crsInsertDate57) : undefined,
      dateCreaResv58: restTable5.dateCreaResv58 ? dayjs(restTable5.dateCreaResv58) : undefined,
      datePremier59: restTable5.datePremier59 ? dayjs(restTable5.datePremier59) : undefined,
      dateDernier61: restTable5.dateDernier61 ? dayjs(restTable5.dateDernier61) : undefined,
      dateDernierPseudo63: restTable5.dateDernierPseudo63 ? dayjs(restTable5.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable5.techCreateDate106 ? dayjs(restTable5.techCreateDate106) : undefined,
      techUpdateDate107: restTable5.techUpdateDate107 ? dayjs(restTable5.techUpdateDate107) : undefined,
      dateDebutResv125: restTable5.dateDebutResv125 ? dayjs(restTable5.dateDebutResv125) : undefined,
      dateFinResv126: restTable5.dateFinResv126 ? dayjs(restTable5.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable5.truncDateDebutResv127 ? dayjs(restTable5.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable5.truncDateFinResv128 ? dayjs(restTable5.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable5.dateAnnResv129 ? dayjs(restTable5.dateAnnResv129) : undefined,
      crsInsertDate164: restTable5.crsInsertDate164 ? dayjs(restTable5.crsInsertDate164) : undefined,
      dateCreaResv165: restTable5.dateCreaResv165 ? dayjs(restTable5.dateCreaResv165) : undefined,
      datePremier166: restTable5.datePremier166 ? dayjs(restTable5.datePremier166) : undefined,
      dateDernier168: restTable5.dateDernier168 ? dayjs(restTable5.dateDernier168) : undefined,
      dateDernierPseudo170: restTable5.dateDernierPseudo170 ? dayjs(restTable5.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable5.techCreateDate213 ? dayjs(restTable5.techCreateDate213) : undefined,
      techUpdateDate214: restTable5.techUpdateDate214 ? dayjs(restTable5.techUpdateDate214) : undefined,
      dateDebutResv232: restTable5.dateDebutResv232 ? dayjs(restTable5.dateDebutResv232) : undefined,
      dateFinResv233: restTable5.dateFinResv233 ? dayjs(restTable5.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable5.truncDateDebutResv234 ? dayjs(restTable5.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable5.truncDateFinResv235 ? dayjs(restTable5.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable5.dateAnnResv236 ? dayjs(restTable5.dateAnnResv236) : undefined,
      crsInsertDate271: restTable5.crsInsertDate271 ? dayjs(restTable5.crsInsertDate271) : undefined,
      dateCreaResv272: restTable5.dateCreaResv272 ? dayjs(restTable5.dateCreaResv272) : undefined,
      datePremier273: restTable5.datePremier273 ? dayjs(restTable5.datePremier273) : undefined,
      dateDernier275: restTable5.dateDernier275 ? dayjs(restTable5.dateDernier275) : undefined,
      dateDernierPseudo277: restTable5.dateDernierPseudo277 ? dayjs(restTable5.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable5>): HttpResponse<ITable5> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable5[]>): HttpResponse<ITable5[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
