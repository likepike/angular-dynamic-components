import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'test-angular';

  public dynamicContent: any;
  public htmlString: any;

  constructor() {
  }

  public embedContent(): void {
      this.dynamicContent = this.htmlString;
  }

  ngOnInit() {
      console.log('AppComponent OnInit');
  }

  ngOnDestroy() {
      console.log('AppComponent OnDestroy');
  }

}
