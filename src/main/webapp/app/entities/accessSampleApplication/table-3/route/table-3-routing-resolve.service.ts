import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable3 } from '../table-3.model';
import { Table3Service } from '../service/table-3.service';

const table3Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable3> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table3Service)
      .find(id)
      .pipe(
        mergeMap((table3: HttpResponse<ITable3>) => {
          if (table3.body) {
            return of(table3.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table3Resolve;
