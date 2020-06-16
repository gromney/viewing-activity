import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeResultComponent } from './time-result/time-result.component';
import { AboutComponent } from './about/about.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ShareComponent } from './share/share.component';
import { GridResultComponent } from './grid-result/grid-result.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeResultComponent,
    AboutComponent,
    FileUploadComponent,
    ShareComponent,
    GridResultComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
