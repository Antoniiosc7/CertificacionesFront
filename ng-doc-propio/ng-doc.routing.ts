// @ts-nocheck
import {Routes} from '@angular/router';
import {ISTQB_DOCS, JAVA_DOCS} from '../src/config';
export const NG_DOC_ROUTING: Routes = [
    {
        path: `${JAVA_DOCS}/chapter-10---streams`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-10---streams/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-1---building-blocks`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-1---building-blocks/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-13---concurrency`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-13---concurrency/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-12---modules`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-12---modules/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-14---i-o`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-14---i-o/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-2---operators`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-2---operators/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-11---exceptions-and-localizations`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-11---exceptions-and-localizations/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-15---jdbc`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-15---jdbc/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-3---making-decisions`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-3---making-decisions/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-4---core-apis`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-4---core-apis/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-6---glass-design`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-6---glass-design/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-5---methods`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-5---methods/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-8---lambdas-and-functional-interfaces`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-8---lambdas-and-functional-interfaces/module')
    },
    {
        path:`${JAVA_DOCS}/chapter-7---beyond-classes`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-7---beyond-classes/module')
    },
    {
        path: `${JAVA_DOCS}/chapter-9---collections-and-generics`,
        loadChildren: () => import('../ng-doc/Certificaciones/guides/chapter-9---collections-and-generics/module')
    },

    {
      path: `${ISTQB_DOCS}/istqb-capitulo-ii`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-ii/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-i`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-i/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-iii`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-iii/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-iv`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-iv/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-v`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-v/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-vi`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-vi/module')
    },
    {
      path: `${ISTQB_DOCS}/istqb-capitulo-anexo`,
      loadChildren: () => import('../ng-doc/Certificaciones/guides/istqb-capitulo-anexo/module')
    },


];
