// @ts-nocheck
import {Routes} from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
    {
        path: 'docs/java/chapter-10---streams',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-10---streams/module')
    },
    {
        path: 'docs/java/chapter-1---building-blocks',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-1---building-blocks/module')
    },
    {
        path: 'docs/java/chapter-13---concurrency',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-13---concurrency/module')
    },
    {
        path: 'docs/java/chapter-12---modules',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-12---modules/module')
    },
    {
        path: 'docs/java/chapter-14---i-o',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-14---i-o/module')
    },
    {
        path: 'docs/java/chapter-2---operators',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-2---operators/module')
    },
    {
        path: 'docs/java/chapter-11---exceptions-and-localizations',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-11---exceptions-and-localizations/module')
    },
    {
        path: 'docs/java/chapter-15---jdbc',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-15---jdbc/module')
    },
    {
        path: 'docs/java/chapter-3---making-decisions',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-3---making-decisions/module')
    },
    {
        path: 'docs/java/chapter-4---core-apis',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-4---core-apis/module')
    },
    {
        path: 'docs/java/chapter-6---glass-design',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-6---glass-design/module')
    },
    {
        path: 'docs/java/chapter-5---methods',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-5---methods/module')
    },
    {
        path: 'docs/java/chapter-8---lambdas-and-functional-interfaces',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-8---lambdas-and-functional-interfaces/module')
    },
    {
        path: 'docs/java/chapter-7---beyond-classes',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-7---beyond-classes/module')
    },
    {
        path: 'docs/java/chapter-9---collections-and-generics',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-9---collections-and-generics/module')
    },
    {
        path: 'docs/istqb/tfg',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/tfg/module')
    },
    {
        path: 'docs/istqb/installation',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/installation/module')
    },
    {
        path: 'docs/istqb/saber-mas',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/saber-mas/module')
    },
    {
      path: 'docs/istqb/saber-mas',
      loadChildren: () => import('../ng-doc/Certificaciones/guides/saber-mas/module')
    },
  {
    path: 'docs/istqb/I-Desarrollo-de-Software-Agil',
    loadChildren: () => import('../ng-doc/Certificaciones/guides/desarrollo--e--oftware--agil/module')
  },

];
