import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table-5',
    data: { pageTitle: 'accessSampleApplicationApp.accessSampleApplicationTable5.home.title' },
    loadChildren: () => import('./accessSampleApplication/table-5/table-5.routes'),
  },
  {
    path: 'table-4',
    data: { pageTitle: 'accessSampleApplicationApp.accessSampleApplicationTable4.home.title' },
    loadChildren: () => import('./accessSampleApplication/table-4/table-4.routes'),
  },
  {
    path: 'table-3',
    data: { pageTitle: 'accessSampleApplicationApp.accessSampleApplicationTable3.home.title' },
    loadChildren: () => import('./accessSampleApplication/table-3/table-3.routes'),
  },
  {
    path: 'table-2',
    data: { pageTitle: 'accessSampleApplicationApp.accessSampleApplicationTable2.home.title' },
    loadChildren: () => import('./accessSampleApplication/table-2/table-2.routes'),
  },
  {
    path: 'table-1',
    data: { pageTitle: 'accessSampleApplicationApp.accessSampleApplicationTable1.home.title' },
    loadChildren: () => import('./accessSampleApplication/table-1/table-1.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
