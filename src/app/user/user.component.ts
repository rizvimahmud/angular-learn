import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public  user$!: Observable<User>

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(map(data => data['user']))
  }

}
