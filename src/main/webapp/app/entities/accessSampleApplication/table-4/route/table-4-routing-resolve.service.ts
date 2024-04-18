import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable4 } from '../table-4.model';
import { Table4Service } from '../service/table-4.service';

const table4Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable4> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table4Service)
      .find(id)
      .pipe(
        mergeMap((table4: HttpResponse<ITable4>) => {
          if (table4.body) {
            return of(table4.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table4Resolve;
