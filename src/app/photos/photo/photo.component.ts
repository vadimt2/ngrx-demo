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

  constructor(
    public dialog: MatDialog, 
    private store: Store<{ photos: IPhoto[] }>, 
    private photoService:PhotoService) { }

  @Input() photo: IPhoto;

  ngOnInit(): void {
    // console.log(this.photo)
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
    this.photoService.deletePhoto(photo);
  }

  editPhoto(photo: IPhoto){
    this.photoService.updatePhotoEmitter.emit(photo);
  }

}
