import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table4Component } from './list/table-4.component';
import { Table4DetailComponent } from './detail/table-4-detail.component';
import { Table4UpdateComponent } from './update/table-4-update.component';
import Table4Resolve from './route/table-4-routing-resolve.service';

const table4Route: Routes = [
  {
    path: '',
    component: Table4Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table4DetailComponent,
    resolve: {
      table4: Table4Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table4UpdateComponent,
    resolve: {
      table4: Table4Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table4UpdateComponent,
    resolve: {
      table4: Table4Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table4Route;
