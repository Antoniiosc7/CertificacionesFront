// @ts-nocheck
import {Routes} from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
    {
        path: 'certificacion/javaCert/docs/chapter-10---streams',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-10---streams/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-1---building-blocks',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-1---building-blocks/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-13---concurrency',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-13---concurrency/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-12---modules',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-12---modules/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-14---i-o',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-14---i-o/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-2---operators',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-2---operators/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-11---exceptions-and-localizations',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-11---exceptions-and-localizations/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-15---jdbc',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-15---jdbc/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-3---making-decisions',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-3---making-decisions/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-4---core-apis',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-4---core-apis/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-6---glass-design',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-6---glass-design/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-5---methods',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-5---methods/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-8---lambdas-and-functional-interfaces',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-8---lambdas-and-functional-interfaces/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-7---beyond-classes',
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-7---beyond-classes/module')
    },
    {
        path: 'certificacion/javaCert/docs/chapter-9---collections-and-generics',
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
