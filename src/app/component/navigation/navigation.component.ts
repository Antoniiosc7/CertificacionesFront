import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  menuItems: any[] = [];
  allMenuItems: any[] = [
    { title: 'Chapter 01 - Building Blocks', route: '/docs/java/chapter-1---building-blocks' },
    { title: 'Chapter 02 - Operators', route: '/docs/java/chapter-2---operators' },
    { title: 'Chapter 03 - Making Decisions', route: '/docs/java/chapter-3---making-decisions' },
    { title: 'Chapter 04 - Core APIs', route: '/docs/java/chapter-4---core-apis' },
    { title: 'Chapter 05 - Methods', route: '/docs/java/chapter-5---methods' },
    { title: 'Chapter 06 - Glass Design', route: '/docs/java/chapter-6---glass-design' },
    { title: 'Chapter 07 - Beyond Classes', route: '/docs/java/chapter-7---beyond-classes' },
    { title: 'Chapter 08 - Lambdas and Functional Interfaces', route: '/docs/java/chapter-8---lambdas-and-functional-interfaces' },
    { title: 'Chapter 09 - Collections and Generics', route: '/docs/java/chapter-9---collections-and-generics' },
    { title: 'Chapter 10 - Streams', route: '/docs/java/chapter-10---streams' },
    { title: 'Chapter 11 - Exceptions and Localizations', route: '/docs/java/chapter-11---exceptions-and-localizations' },
    { title: 'Chapter 12 - Modules', route: '/docs/java/chapter-12---modules' },
    { title: 'Chapter 13 - Concurrency', route: '/docs/java/chapter-13---concurrency' },
    { title: 'Chapter 14 - I-O', route: '/docs/java/chapter-14---i-o' },
    { title: 'Chapter 15 - JDBC', route: '/docs/java/chapter-15---jdbc' },
    { title: 'Installation', route: '/docs/istqb/installation' },
    { title: 'saber mas', route: '/docs/istqb/saber-mas' },
    { title: 'TFG', route: '/docs/istqb/tfg' },
    { title: 'I. Desarrollo de software ágil', route: '/docs/istqb/I-Desarrollo-de-Software-Agil' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute.startsWith('/docs/java')) {
        this.menuItems = this.allMenuItems.filter(item => item.route.startsWith('/docs/java'));
      } else if (currentRoute.startsWith('/docs/istqb')) {
        this.menuItems = this.allMenuItems.filter(item => item.route.startsWith('/docs/istqb'));
      }
    });
  }
}
