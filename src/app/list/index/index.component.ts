import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
lists:any;
  constructor(public listservice: ListService,private router:Router) { }

  ngOnInit(): void {
this.listservice.getItems().subscribe((res:any) => {
         console.log('list of data ==>'+JSON.stringify(res));
         this.lists=res;
         this.router.navigateByUrl('list/index');
    },
    (error:any) =>{
      console.log('Error while fetching data  ==>'+error);
    }
    )
  }

  deleteList(id:number){
    console.log('Deleted successfully...');
  }

}
