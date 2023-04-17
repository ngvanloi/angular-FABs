import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myimage') myimage: ElementRef;
  @ViewChild('mylink') link: ElementRef;

  change() {
    this.myimage.nativeElement.src =
      'https://cdn0.iconfinder.com/data/icons/flowers-and-leaves/42/flower_2-512.png';

    this.link.nativeElement.href = 'microsoft.com';
    this.link.nativeElement.text = 'Microsoft';
    //this.myimage.nativeElement.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/flowers-and-leaves/42/flower_2-512.png')
  }

  myFunction(): void {
    console.log('Scroll');
  }
}
