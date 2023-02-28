import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'app/model/role';
import { RoleService } from 'app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles!: any[];
  role: Role = new Role();

  constructor(private roleService: RoleService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllRole();
  }

  findAllRole() {
    this.roleService.findAll().subscribe(data => { this.roles = data; });
  }

  saveRole() {
    this.roleService.save(this.role).subscribe(
      () => {
        this.findAllRole();
        this.role = new Role();
      }
    )
  }
  deleteRole(id: number) {
    this.roleService.delete(id).subscribe(
      () => {
        this.findAllRole();
      }
    )
  }
}
