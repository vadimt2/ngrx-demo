import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from '../../models/my-error-state-matcher';
import { Store } from '@ngrx/store';
import { IPhoto } from 'src/app/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services';


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private photoService:PhotoService) { }

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
        ]],
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
    this.photoService.addPhoto(photo);

    if(this.form.valid)
    this.form.reset();
    
  }

  get f() { return this.form.controls; }


}