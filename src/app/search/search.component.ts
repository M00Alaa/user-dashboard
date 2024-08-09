import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NzInputModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchId: string = '';

  constructor(private router: Router) { }

  searchUser(): void {
    if (this.searchId) {
      this.router.navigate(['/user', this.searchId]);
      this.searchId = '';
    }
  }
}
