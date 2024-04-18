import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable3, NewTable3 } from '../table-3.model';

export type PartialUpdateTable3 = Partial<ITable3> & Pick<ITable3, 'id'>;

type RestOf<T extends ITable3 | NewTable3> = Omit<
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

export type RestTable3 = RestOf<ITable3>;

export type NewRestTable3 = RestOf<NewTable3>;

export type PartialUpdateRestTable3 = RestOf<PartialUpdateTable3>;

export type EntityResponseType = HttpResponse<ITable3>;
export type EntityArrayResponseType = HttpResponse<ITable3[]>;

@Injectable({ providedIn: 'root' })
export class Table3Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-3-s', 'accesssampleapplication');

  create(table3: NewTable3): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table3);
    return this.http
      .post<RestTable3>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table3: ITable3): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table3);
    return this.http
      .put<RestTable3>(`${this.resourceUrl}/${this.getTable3Identifier(table3)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table3: PartialUpdateTable3): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table3);
    return this.http
      .patch<RestTable3>(`${this.resourceUrl}/${this.getTable3Identifier(table3)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable3>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable3[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable3Identifier(table3: Pick<ITable3, 'id'>): number {
    return table3.id;
  }

  compareTable3(o1: Pick<ITable3, 'id'> | null, o2: Pick<ITable3, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable3Identifier(o1) === this.getTable3Identifier(o2) : o1 === o2;
  }

  addTable3ToCollectionIfMissing<Type extends Pick<ITable3, 'id'>>(
    table3Collection: Type[],
    ...table3sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table3s: Type[] = table3sToCheck.filter(isPresent);
    if (table3s.length > 0) {
      const table3CollectionIdentifiers = table3Collection.map(table3Item => this.getTable3Identifier(table3Item));
      const table3sToAdd = table3s.filter(table3Item => {
        const table3Identifier = this.getTable3Identifier(table3Item);
        if (table3CollectionIdentifiers.includes(table3Identifier)) {
          return false;
        }
        table3CollectionIdentifiers.push(table3Identifier);
        return true;
      });
      return [...table3sToAdd, ...table3Collection];
    }
    return table3Collection;
  }

  protected convertDateFromClient<T extends ITable3 | NewTable3 | PartialUpdateTable3>(table3: T): RestOf<T> {
    return {
      ...table3,
      dateDebutResv18: table3.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table3.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table3.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table3.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table3.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table3.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table3.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table3.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table3.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table3.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table3.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table3.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table3.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table3.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table3.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table3.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table3.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table3.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table3.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table3.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table3.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table3.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table3.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table3.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table3.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table3.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table3.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table3.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table3.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table3.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table3.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table3.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table3.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table3.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable3: RestTable3): ITable3 {
    return {
      ...restTable3,
      dateDebutResv18: restTable3.dateDebutResv18 ? dayjs(restTable3.dateDebutResv18) : undefined,
      dateFinResv19: restTable3.dateFinResv19 ? dayjs(restTable3.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable3.truncDateDebutResv20 ? dayjs(restTable3.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable3.truncDateFinResv21 ? dayjs(restTable3.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable3.dateAnnResv22 ? dayjs(restTable3.dateAnnResv22) : undefined,
      crsInsertDate57: restTable3.crsInsertDate57 ? dayjs(restTable3.crsInsertDate57) : undefined,
      dateCreaResv58: restTable3.dateCreaResv58 ? dayjs(restTable3.dateCreaResv58) : undefined,
      datePremier59: restTable3.datePremier59 ? dayjs(restTable3.datePremier59) : undefined,
      dateDernier61: restTable3.dateDernier61 ? dayjs(restTable3.dateDernier61) : undefined,
      dateDernierPseudo63: restTable3.dateDernierPseudo63 ? dayjs(restTable3.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable3.techCreateDate106 ? dayjs(restTable3.techCreateDate106) : undefined,
      techUpdateDate107: restTable3.techUpdateDate107 ? dayjs(restTable3.techUpdateDate107) : undefined,
      dateDebutResv125: restTable3.dateDebutResv125 ? dayjs(restTable3.dateDebutResv125) : undefined,
      dateFinResv126: restTable3.dateFinResv126 ? dayjs(restTable3.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable3.truncDateDebutResv127 ? dayjs(restTable3.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable3.truncDateFinResv128 ? dayjs(restTable3.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable3.dateAnnResv129 ? dayjs(restTable3.dateAnnResv129) : undefined,
      crsInsertDate164: restTable3.crsInsertDate164 ? dayjs(restTable3.crsInsertDate164) : undefined,
      dateCreaResv165: restTable3.dateCreaResv165 ? dayjs(restTable3.dateCreaResv165) : undefined,
      datePremier166: restTable3.datePremier166 ? dayjs(restTable3.datePremier166) : undefined,
      dateDernier168: restTable3.dateDernier168 ? dayjs(restTable3.dateDernier168) : undefined,
      dateDernierPseudo170: restTable3.dateDernierPseudo170 ? dayjs(restTable3.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable3.techCreateDate213 ? dayjs(restTable3.techCreateDate213) : undefined,
      techUpdateDate214: restTable3.techUpdateDate214 ? dayjs(restTable3.techUpdateDate214) : undefined,
      dateDebutResv232: restTable3.dateDebutResv232 ? dayjs(restTable3.dateDebutResv232) : undefined,
      dateFinResv233: restTable3.dateFinResv233 ? dayjs(restTable3.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable3.truncDateDebutResv234 ? dayjs(restTable3.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable3.truncDateFinResv235 ? dayjs(restTable3.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable3.dateAnnResv236 ? dayjs(restTable3.dateAnnResv236) : undefined,
      crsInsertDate271: restTable3.crsInsertDate271 ? dayjs(restTable3.crsInsertDate271) : undefined,
      dateCreaResv272: restTable3.dateCreaResv272 ? dayjs(restTable3.dateCreaResv272) : undefined,
      datePremier273: restTable3.datePremier273 ? dayjs(restTable3.datePremier273) : undefined,
      dateDernier275: restTable3.dateDernier275 ? dayjs(restTable3.dateDernier275) : undefined,
      dateDernierPseudo277: restTable3.dateDernierPseudo277 ? dayjs(restTable3.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable3>): HttpResponse<ITable3> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable3[]>): HttpResponse<ITable3[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
