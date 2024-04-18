import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table1Component } from './list/table-1.component';
import { Table1DetailComponent } from './detail/table-1-detail.component';
import { Table1UpdateComponent } from './update/table-1-update.component';
import Table1Resolve from './route/table-1-routing-resolve.service';

const table1Route: Routes = [
  {
    path: '',
    component: Table1Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table1DetailComponent,
    resolve: {
      table1: Table1Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table1UpdateComponent,
    resolve: {
      table1: Table1Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table1UpdateComponent,
    resolve: {
      table1: Table1Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table1Route;
