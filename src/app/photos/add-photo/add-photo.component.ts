import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from '../../models/my-error-state-matcher';
import { Store } from '@ngrx/store';
import { IPhoto } from 'src/app/interfaces';
import { AddPhoto } from 'src/app/root-store/photos-feature-store/actions';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ photos: IPhoto[] }>,
    private router: Router,
    private route: ActivatedRoute) { }

  public form: FormGroup;
  public submitted = false;
  public loading = false;
  private returnUrl: string;

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      url: ['',[
        Validators.required,
        Validators.pattern("(https?:\/\/.*\.(?:jpg|jpeg|png|gif))")]],
      thumbnailUrl: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(): void{ 
    const photo: IPhoto = {
      id: 0,
      albumId:0,
      title: this.f.title.value,
      url: this.f.url.value,
      thumbnailUrl: this.f.thumbnailUrl.value
    } ;

    console.log(photo)
    this.router.navigate
    this.store.dispatch(new AddPhoto(photo));

    if(this.form.valid)
    this.form.reset();
    
  }

  get f() { return this.form.controls; }


}