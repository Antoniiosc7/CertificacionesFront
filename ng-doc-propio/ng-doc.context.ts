// @ts-nocheck
import {Provider} from '@angular/core';
import {NG_DOC_CONTEXT} from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider {
    return {
        provide: NG_DOC_CONTEXT,
        useValue: {
            navigation: [

                {
                    title: `Chapter 01 - Building Blocks`,
                    route: '/docs/java/chapter-1---building-blocks',
                    hidden: false,
                },

                {
                    title: `Chapter 02 - Operators`,
                    route: '/docs/java/chapter-2---operators',
                    hidden: false,
                },

                {
                    title: `Chapter 03 - Making Decisions`,
                    route: '/docs/java/chapter-3---making-decisions',
                    hidden: false,
                },

                {
                    title: `Chapter 04 - Core APIs`,
                    route: '/docs/java/chapter-4---core-apis',
                    hidden: false,
                },

                {
                    title: `Chapter 05 - Methods`,
                    route: '/docs/java/chapter-5---methods',
                    hidden: false,
                },

                {
                    title: `Chapter 06 - Glass Design`,
                    route: '/docs/java/chapter-6---glass-design',
                    hidden: false,
                },

                {
                    title: `Chapter 07 - Beyond Classes`,
                    route: '/docs/java/chapter-7---beyond-classes',
                    hidden: false,
                },

                {
                    title: `Chapter 08 - Lambdas and Functional Interfaces`,
                    route: '/docs/java/chapter-8---lambdas-and-functional-interfaces',
                    hidden: false,
                },

                {
                    title: `Chapter 09 - Collections and Generics`,
                    route: '/docs/java/chapter-9---collections-and-generics',
                    hidden: false,
                },

                {
                    title: `Chapter 10 - Streams`,
                    route: '/docs/java/chapter-10---streams',
                    hidden: false,
                },

                {
                    title: `Chapter 11 - Exceptions and Localizations`,
                    route: '/docs/java/chapter-11---exceptions-and-localizations',
                    hidden: false,
                },

                {
                    title: `Chapter 12 - Modules`,
                    route: '/docs/java/chapter-12---modules',
                    hidden: false,
                },

                {
                    title: `Chapter 13 - Concurrency`,
                    route: '/docs/java/chapter-13---concurrency',
                    hidden: false,
                },

                {
                    title: `Chapter 14 - I-O`,
                    route: '/docs/java/chapter-14---i-o',
                    hidden: false,
                },

                {
                    title: `Chapter 15 - JDBC`,
                    route: '/docs/java/chapter-15---jdbc',
                    hidden: false,
                },

                {
                    title: `Installation`,
                    route: '/docs/istqb/installation',
                    hidden: false,
                },

                {
                    title: `saber mas`,
                    route: '/docs/istqb/saber-mas',
                    hidden: false,
                },

                {
                    title: `TFG`,
                    route: '/docs/istqb/tfg',
                    hidden: false,
                },
              {
                title: `I-Desarrollo-de-Software-Agil`,
                route: '/docs/istqb/I-Desarrollo-de-Software-Agil',
                hidden: false,
              }
            ],
        }
    };
}
