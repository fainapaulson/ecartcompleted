import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit{

  allProductArray:any
  filterProductsData:any
searchData:any
constructor(private ds:DataService){}

ngOnInit():void{
  this.ds.viewAllProducts().subscribe((result:any)=>{
    this.allProductArray=result
    // console.log(this.allProductArray);
    this.filterProductsData=this.allProductArray
    
  })
this.ds.searchInput.subscribe((data:any)=>{
  this.searchData=data
})

}
filterProducts(catId:any){
  this.filterProductsData=this.allProductArray.filter((item:any)=>
  catId==""|| catId==item.categoryId)
  console.log(this.filterProductsData);
  

}
}
