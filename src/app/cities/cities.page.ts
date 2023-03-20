import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  permisos: boolean = false;

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.permisos = true;
    this.getCities().subscribe((res) =>{
      console.log("Respuesta de peticion",res)
      this.cities = res;
    })
  }


  goToHome(){
    this.router.navigate(['/home'])
  }

  getCities(){
    return this.http
    .get('assets/files/cities.json')
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }
  

}
