// @ts-nocheck
import {Provider} from '@angular/core';
import {NG_DOC_CONTEXT} from '@ng-doc/app/tokens';
import {ISTQB_DOCS, JAVA_DOCS} from '../src/config';

export function provideNgDocContext(): Provider {
    return {
        provide: NG_DOC_CONTEXT,
        useValue: {
            navigation: [

                {
                    title: `Chapter 01 - Building Blocks`,
                    route: `${JAVA_DOCS}/chapter-1---building-blocks`,
                    hidden: false,
                },

                {
                    title: `Chapter 02 - Operators`,
                    route: `${JAVA_DOCS}/chapter-2---operators`,
                    hidden: false,
                },

                {
                    title: `Chapter 03 - Making Decisions`,
                    route: `${JAVA_DOCS}/chapter-3---making-decisions`,
                    hidden: false,
                },

                {
                    title: `Chapter 04 - Core APIs`,
                    route: `${JAVA_DOCS}/chapter-4---core-apis`,
                    hidden: false,
                },

                {
                    title: `Chapter 05 - Methods`,
                    route: `${JAVA_DOCS}/chapter-5---methods`,
                    hidden: false,
                },

                {
                    title: `Chapter 06 - Glass Design`,
                    route: `${JAVA_DOCS}/chapter-6---glass-design`,
                    hidden: false,
                },

                {
                    title: `Chapter 07 - Beyond Classes`,
                    route: `${JAVA_DOCS}/chapter-7---beyond-classes`,
                    hidden: false,
                },

                {
                    title: `Chapter 08 - Lambdas and Functional Interfaces`,
                    route: `${JAVA_DOCS}/chapter-8---lambdas-and-functional-interfaces`,
                    hidden: false,
                },

                {
                    title: `Chapter 09 - Collections and Generics`,
                    route: `${JAVA_DOCS}/chapter-9---collections-and-generics`,
                    hidden: false,
                },

                {
                    title: `Chapter 10 - Streams`,
                    route: `${JAVA_DOCS}/chapter-10---streams`,
                    hidden: false,
                },

                {
                    title: `Chapter 11 - Exceptions and Localizations`,
                    route: '/certificacion/javaCert/docs/chapter-11---exceptions-and-localizations',
                    hidden: false,
                },

                {
                    title: `Chapter 12 - Modules`,
                    route: `${JAVA_DOCS}/chapter-12---modules`,
                    hidden: false,
                },

                {
                    title: `Chapter 13 - Concurrency`,
                    route: `${JAVA_DOCS}/chapter-13---concurrency`,
                    hidden: false,
                },

                {
                    title: `Chapter 14 - I-O`,
                    route: `${JAVA_DOCS}/chapter-14---i-o`,
                    hidden: false,
                },

                {
                    title: `Chapter 15 - JDBC`,
                    route: `${JAVA_DOCS}/chapter-15---jdbc`,
                    hidden: false,
                },

              {
                title: `ISTQB-Capitulo-I`,
                route: `${ISTQB_DOCS}/istqb-capitulo-i`,
                hidden: false,
              },

              {
                title: `ISTQB-Capitulo-II`,
                route: `${ISTQB_DOCS}/istqb-capitulo-ii`,
                hidden: false,
              },

              {
                title: `ISTQB-Capitulo-III`,
                route: `${ISTQB_DOCS}/istqb-capitulo-iii`,
                hidden: false,
              },

              {
                title: `ISTQB-Capitulo-IV`,
                route: `${ISTQB_DOCS}/istqb-capitulo-iv`,
                hidden: false,
              },

              {
                title: `ISTQB-Capitulo-V`,
                route: `${ISTQB_DOCS}/istqb-capitulo-v`,
                hidden: false,
              },
              {
                title: `ISTQB-Capitulo-VI`,
                route: `${ISTQB_DOCS}/istqb-capitulo-vi`,
                hidden: false,
              },
              {
                title: `ISTQB-Capitulo-Anexo`,
                route: `${ISTQB_DOCS}/istqb-capitulo-anexo`,
                hidden: false,
              },

            ],
        }
    };
}
