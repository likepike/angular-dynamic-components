import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

const componentParsers: Array<HookParserEntry> = [
    { component: AppComponent },
    { component: ExampleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
