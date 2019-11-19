import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <p>Hola mundo desde app.component</p>
    <hr>
    <app-clases></app-clases>
    <hr>
    <p [appResaltado]="'orange'">
        Hola mundo
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                      AfterContentChecked, AfterViewInit, 
                                      AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("OnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ontentIni");
  }

  ngAfterContentChecked() {
    console.log("ontentChe");
  }

  ngAfterViewInit() {
    console.log("rViewInit");
  }

  ngAfterViewChecked() {
    console.log("iewChecke");
  }

  ngOnDestroy() {
    console.log("ngOnDestr");
  }

}

