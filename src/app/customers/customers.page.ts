import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];


  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getUsers().subscribe((res) =>{
      console.log("Respuesta de peticion",res)
      this.users = res;
    })
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http
    .get('assets/files/customers.json')
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}