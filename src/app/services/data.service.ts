import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

//oeprador para ver en consola los datos del pipe
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      //Como ver los datos en consola
      .pipe( tap( console.log ));
  }

}
