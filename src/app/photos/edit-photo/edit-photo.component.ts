import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormControlName } from '@angular/forms';
import { MyErrorStateMatcher } from '../../models/my-error-state-matcher';
import { Store } from '@ngrx/store';
import { IPhoto } from 'src/app/interfaces';
import { AddPhoto } from 'src/app/root-store/photos-feature-store/actions';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ photos: IPhoto[] }>,
    private photoService:PhotoService) { }

  public form: FormGroup;
  public submitted = false;
  public loading = false;
  private returnUrl: string;
  @Input() photo:IPhoto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      url: ['',[
        Validators.required,
       ]],
      thumbnailUrl: ['', Validators.required]
  });
// Validators.pattern("(https?:\/\/.*\.(?:jpg|jpeg|png|gif))")


  this.photoService.updatePhotoEmitter.subscribe(photo => {
    if(photo){
      this.photo = photo;
      this.f.title.setValue(photo.title);
      this.f.url.setValue(photo.url);
      this.f.thumbnailUrl.setValue(photo.thumbnailUrl)
    }
  })

    this.f.title.setValue(this.photo.title);
    this.f.url.setValue(this.photo.url);
    this.f.thumbnailUrl.setValue(this.photo.thumbnailUrl)
  }

  onSubmit(): void{ 
    const photo: IPhoto = {
      id: this.photo.id,
      albumId: this.photo.albumId,
      title: this.f.title.value,
      url: this.f.url.value,
      thumbnailUrl: this.f.thumbnailUrl.value
    } ;


    if(this.form.valid){
      this.photoService.updatePhoto(photo);
    }
  }

  get f() { return this.form.controls; }


}