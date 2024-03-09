import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  title = "Notas";
  readonly API_URL = "http://localhost:5000/api/notasapp/";
  constructor(private http: HttpClient) {
  }

  notas: any = [];

  refrescar_notas() {
    this.http.get(this.API_URL + 'GetNotas').subscribe((data: any) => {
      this.notas = data;
    })
  }

  ngOnInit() {
    this.refrescar_notas();
  }

  addNotas() {
    var newNotas = (<HTMLInputElement>document.getElementById("newNotas")).value;
    var formData = new FormData();
    formData.append("newNotas", newNotas);
    this.http.post(this.API_URL + 'AddNotas', formData).subscribe(data => {
      alert(data);
      this.refrescar_notas();
    })
  }

  deleteNotas(id: any) {
    this.http.delete(this.API_URL + 'DeleteNotas?id=' + id).subscribe((data) => {
      alert(data);
      this.refrescar_notas();
    })
  }
}
