import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable2 } from '../table-2.model';
import { Table2Service } from '../service/table-2.service';

const table2Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable2> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table2Service)
      .find(id)
      .pipe(
        mergeMap((table2: HttpResponse<ITable2>) => {
          if (table2.body) {
            return of(table2.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table2Resolve;
