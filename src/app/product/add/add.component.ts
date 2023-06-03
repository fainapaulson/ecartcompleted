import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}
  // model form
  addForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]+')]],
  productName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    catId:['',[Validators.required,Validators.pattern('[0-9]+')]],
  discr:[''],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
 isAv:[''],
 image:[''],
 
 rate:[''],
review:['',[Validators.required,Validators.pattern('[0-9]+')]]

  })
  addProduct(){
    let path=this.addForm.value
    const newData={

      id:path.id,
      productName:path.productName,
      catId:path.catId,
      discr:path.discr,
      price:path.price,
      isAv:path.isAv,
      image:path.image,
      rate:path.rate,
      review:path.review
    }
    this.ds.addNewProduct(newData).subscribe((data:any)=>{
      alert('added new data')
      this.router.navigateByUrl('product')
    }
    )
  }
  
  
  ngOnInit(): void {
    
  }
}
