import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../Scripts/App/app.component.html'
})

export class AppComponent implements OnInit {
    temp: string;

    constructor() {
        this.temp = "Welcome";
    }

    ngOnInit() {
        console.log("hello")
    }

    btnClickedEvent(): void {
        console.log("button has been clicked");
    }

}