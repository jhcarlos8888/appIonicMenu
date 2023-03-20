import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  permisos: boolean = false;

  constructor(private router: Router,
    private http: HttpClient,
    private toastController: ToastController,
    private alertController: AlertController) { }

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


  async presentToast(){
    const toast = await this.toastController.create({
      message: "Ciudad seleccionada",
      duration: 1000
    });

    toast.present();
  }


  async alertConfirmDelete(){
    const alert = await this.alertController.create({
      header: "Mensaje de confirmacion",
      message: "Se ha borrado la ciudad correctamente!!!",
      buttons: ["ok"]
    })

    await alert.present();
  }


  async alertSelectDelete(){

    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "Desea borrar esta ciudad ?",
      buttons: [
        {
          text: "NO",
          role: "cancel",
          handler: () => {
            console.log("No eliminado")
          }
        },
        {
          text: "SI",
          
          handler: () => {
            console.log("Eliminado")
          }
        },
      ]
    });

    await alert.present();
  }

    
}


