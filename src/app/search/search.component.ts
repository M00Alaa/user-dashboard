import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchId: number | undefined = undefined;

  search = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.search = false;
      }
      else {
        this.search = true;
      }
    });
  }

  searchUser(): void {
    if (this.searchId) {
      this.router.navigate(['/user', this.searchId]);
    }
  }
}
