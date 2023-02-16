import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

//articles

// wnews={
//   articles:""
// }

  constructor( private service:NewsService) {}

  ngOnInit(): void {
    
  }

  fetchNews(inpt:any){
    console.log(inpt.value);
    this.service.findNews(inpt.value).then(res=>res.json()).then(data=>console.log(data))
    
    //   {
    //   this.wnews.articles=data.articles[0].articles
    // })
    
  }


}
