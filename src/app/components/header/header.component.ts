// Se importar NgModule para utilizar los componentes de Ng con Bootstrap
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Hacemos la importacion del injector del buscador para que pueda buscar entre las paginas
import { ComponentSearchService } from '../../services/buscador.service';
import { FormsModule } from '@angular/forms';

// Importamos Observable y Subject para que cuando busquemos entre los componentes el observable se actualice cuando cambie el searchTerm
import { Observable, Subject } from 'rxjs';

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
    const searchSubject = new Subject<string>();

    // utilizamos la funcion searchTerm para que cuando cambie el searchTerm se actualice el observable
    searchSubject.subscribe((searchTerm) => {
      this.componentesFiltrados = this.componentSearchService.obtenerComponentesFiltrados(
        searchTerm
      );
    });

    searchSubject.next(this.searchTerm);
  }

}

export class AppModule { }