import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  findNews(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=638cd6870fb14895ac1c298d6767a1d1`)
  }
}
