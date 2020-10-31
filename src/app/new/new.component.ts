import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(formData) {
    formData.createdat = new Date();
    let fromStorage = localStorage.getItem('posts');
    if (fromStorage) {
      let toUpdate = JSON.parse(fromStorage);
      toUpdate.push(formData);
      localStorage.setItem('posts', JSON.stringify(toUpdate));
    } else {
      localStorage.setItem('posts', JSON.stringify([formData]))
    }

    this.router.navigate(['/'])
  }
}
