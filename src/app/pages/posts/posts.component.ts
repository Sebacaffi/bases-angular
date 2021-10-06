import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  //se carga al momento de iniciar la aplicación
  ngOnInit(): void {
    //traer los datos desde data.services y el metodo getPosts.
    //Se debe poner suscribe para traer los datos.
    this.dataService.getPosts().subscribe(posts => {
      console.log(posts)
    });
  }

}
