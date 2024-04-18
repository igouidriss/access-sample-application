import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table3Component } from './list/table-3.component';
import { Table3DetailComponent } from './detail/table-3-detail.component';
import { Table3UpdateComponent } from './update/table-3-update.component';
import Table3Resolve from './route/table-3-routing-resolve.service';

const table3Route: Routes = [
  {
    path: '',
    component: Table3Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table3DetailComponent,
    resolve: {
      table3: Table3Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table3UpdateComponent,
    resolve: {
      table3: Table3Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table3UpdateComponent,
    resolve: {
      table3: Table3Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table3Route;
