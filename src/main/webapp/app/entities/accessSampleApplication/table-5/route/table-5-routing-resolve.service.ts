import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable5 } from '../table-5.model';
import { Table5Service } from '../service/table-5.service';

const table5Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable5> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table5Service)
      .find(id)
      .pipe(
        mergeMap((table5: HttpResponse<ITable5>) => {
          if (table5.body) {
            return of(table5.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table5Resolve;
