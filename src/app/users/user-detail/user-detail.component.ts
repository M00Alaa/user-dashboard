import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserDetails } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: UserDetails = {} as UserDetails;
  gettingData = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(id).subscribe(response => {
      this.gettingData = false;
      this.user = response;
    },
      error => {
        this.gettingData = false;
        console.log(error);
      });
  }
}
