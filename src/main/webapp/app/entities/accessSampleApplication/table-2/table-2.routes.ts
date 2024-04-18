import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table2Component } from './list/table-2.component';
import { Table2DetailComponent } from './detail/table-2-detail.component';
import { Table2UpdateComponent } from './update/table-2-update.component';
import Table2Resolve from './route/table-2-routing-resolve.service';

const table2Route: Routes = [
  {
    path: '',
    component: Table2Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table2DetailComponent,
    resolve: {
      table2: Table2Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table2UpdateComponent,
    resolve: {
      table2: Table2Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table2UpdateComponent,
    resolve: {
      table2: Table2Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table2Route;
