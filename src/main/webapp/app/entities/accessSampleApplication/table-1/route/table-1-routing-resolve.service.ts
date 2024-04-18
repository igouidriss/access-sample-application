import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable1 } from '../table-1.model';
import { Table1Service } from '../service/table-1.service';

const table1Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable1> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table1Service)
      .find(id)
      .pipe(
        mergeMap((table1: HttpResponse<ITable1>) => {
          if (table1.body) {
            return of(table1.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table1Resolve;
