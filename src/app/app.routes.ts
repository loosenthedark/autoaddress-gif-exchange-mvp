import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    // facilitates lazy loading of desired routes
    loadChildren: () =>
      import('src/app/home/home.routes').then((m) => m.routes),
  },
];
