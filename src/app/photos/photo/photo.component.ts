import { Component, OnInit , Input} from '@angular/core';
import { IPhoto } from '../../interfaces/iphoto'
import { MatDialog } from '@angular/material/dialog';
import { DialogPhotoComponent } from '../dialog-photo/dialog-photo.component';
import { Store } from '@ngrx/store';
import { AddPhoto, RemovePhoto } from 'src/app/root-store/photos-feature-store/actions';
import {PhotoService} from '../../services/'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store<{ photos: IPhoto[] }>) { }

  @Input() photo: IPhoto;

  ngOnInit(): void {
    
  }

  openDialog():void {
    const dialogRef = this.dialog.open(DialogPhotoComponent, {
      data: this.photo
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removePhoto(photo: IPhoto) {
    this.store.dispatch(new RemovePhoto(photo));
  }

  // editPhoto(photo: IPhoto){
  //   console.log(photo)
  // }

}
