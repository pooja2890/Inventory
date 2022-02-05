import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../list';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  list!: List;
  form!: FormGroup;

  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    // this.postService.find(this.id).subscribe((data: Post)=>{
      this.list = {
        "id":1,
        "title":"Shirt",
        "desc":"White & black",
        "price":300
      };
    // });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    // this.postService.update(this.id, this.form.value).subscribe((res:any) => {
    //      console.log('Post updated successfully!');
    //      this.router.navigateByUrl('post/index');
    // })
  }

}
