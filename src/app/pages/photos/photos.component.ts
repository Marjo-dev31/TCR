import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
photos: Array<string> = ["1","2","3","4","5","6","7","8","9","10","11"].reverse()
route = "../../../assets/images/galery/"

}
