import { Component, OnInit , Input} from '@angular/core';
import { IPhoto } from '../interfaces/iphoto';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  @Input() photos: IPhoto[] = [];

  ngOnInit(): void {
  }

}
