import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.css'
})
export class SecondpageComponent {
  id="";
  constructor(private route:ActivatedRoute){}


  ngOnInit(){
    console.log(this.route.snapshot.params);
    this.id=this.route.snapshot.params['id'];
  }

}
