import { routes } from "@aurelia/router";

@routes([
  { id: 'log', path: ['login'], title: 'Login', component: () => import('./routes/login')},
  { id: 'creator', path: ['','create'], title: 'Create Webmap', component: () => import('./routes/create')}
//   // { path: ['', 'home'], title: 'Home', component: () => import('./routes/home')},
])
export class MyApp {
  public message = 'Routing Example';
}
