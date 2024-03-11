// Se importar NgModule para utilizar los componentes de Ng con Bootstrap
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Hacemos la importacion del injector del buscador para que pueda buscar entre las paginas
import { ComponentSearchService } from '../../services/buscador.service';
import { FormsModule } from '@angular/forms';

// Importamos Subject para que cuando busquemos entre los componentes el observable se actualice cuando cambie el searchTerm
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  //Declaramos el FormsModule para poder redigir a otras paginas
  //Despues declarmos el RouterLink en los imports
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  searchTerm: string = '';
  componentesFiltrados: string[] = [];

  constructor(private componentSearchService: ComponentSearchService) { }

  search(): void {
    const searchSubject = new Subject<string>();//se esta creando un subject que puede multidifundir valores a muchos observables

    // utilizamos la funcion searchTerm para que cuando cambie el searchTerm se actualice el observable
    searchSubject.subscribe((searchTerm) => {
      this.componentesFiltrados = this.componentSearchService.obtenerComponentesFiltrados(
        searchTerm
      );
    });

    searchSubject.next(this.searchTerm); // cuando cambie el searchTerm se actualiza el observable
  }

}

export class AppModule { }