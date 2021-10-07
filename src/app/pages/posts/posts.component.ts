import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any; 

  constructor(private dataService: DataService) { }

  //se carga al momento de iniciar la aplicación
  ngOnInit() {

    //traer los datos desde data.services y el metodo getPosts. Se llama a la variable mensajes y se le asigna el valor
    this.mensajes = this.dataService.getPosts();
      
    
      // Se debe poner suscribe para traer los datos.
      // .subscribe( (posts: any) => {
      //   console.log(posts);
      //   this.mensajes = posts;
      // });
  }
  
  escuchaClick(id: number){
    console.log('Click en:', id);
  }
  
}
