import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { RatingComponent, RatingModule } from 'ng-bootstrap';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlicePipe,NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(public api:ApiService){}
  ngOnInit(){
    this.api.getData().subscribe(response=>{this.data=response})
  }
  data:any=[]


}
