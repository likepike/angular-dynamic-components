import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'test-angular';

  public dynamicContent: any;
  public htmlString: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  public embedContent(): void {
      this.dynamicContent = this.sanitizer.bypassSecurityTrustHtml(this.htmlString);
  }

}
