import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
  
})
export class SingleComponent implements OnInit {
 stars:any
   constructor(private routeId:ActivatedRoute,private api:ApiService){}
   
     data:any=[]
     rating:number=0
     ngOnInit(){
      this.api.getData().subscribe((res:any)=>{
        let id= this.routeId.snapshot.paramMap.get('id')
        let response=res
        let product=response.filter((e:any)=>e.id==id)
        this.data=product[0]

      })
     }
   getStars(rating: number):boolean[]{
   const stars=new Array(5).fill(false);
    for(let i=0;i<rating;i++)
    {
      rating=Math.round(rating)
      stars[i]=true;
    }
    return stars;
   }
}
function round(rating: number) {
  throw new Error('Function not implemented.');
}

