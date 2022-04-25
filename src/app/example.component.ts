import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})

export class ExampleComponent implements OnInit, OnDestroy {

  @Input() text: string = '';

  constructor() {
  }

  ngOnInit() {
    console.log('ExampleComponent OnInit');
  }

  ngOnDestroy() {
    console.log('ExampleComponent OnDestroy');
  }

}
