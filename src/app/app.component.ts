import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counterExample';
  countValue : number=0;
  IncreaseCounter()
  {
    this.countValue++;
  }

  CleasrCounter()
  {
    this.countValue = 0;
  }


}
