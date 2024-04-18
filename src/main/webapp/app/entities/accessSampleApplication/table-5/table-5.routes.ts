import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table5Component } from './list/table-5.component';
import { Table5DetailComponent } from './detail/table-5-detail.component';
import { Table5UpdateComponent } from './update/table-5-update.component';
import Table5Resolve from './route/table-5-routing-resolve.service';

const table5Route: Routes = [
  {
    path: '',
    component: Table5Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table5DetailComponent,
    resolve: {
      table5: Table5Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table5UpdateComponent,
    resolve: {
      table5: Table5Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table5UpdateComponent,
    resolve: {
      table5: Table5Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table5Route;
