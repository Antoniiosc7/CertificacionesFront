import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/authService";
import { ActivatedRoute } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Obtain the user ID from the URL
    const userId = localStorage.getItem('username');
    console.log(userId)
    if (userId) {
      this.authService.getUserProfile(userId).subscribe({
        next: (data) => this.user = data,
        error: (e) => console.error(e)
      });
    }
  }
}
