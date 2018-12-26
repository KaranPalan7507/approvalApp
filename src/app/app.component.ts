import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataLoaded: boolean = false;
  public selectedIndex = 0;
  public headers = ["ALL DUE", "PENDING", "AUTO APPROVAL", "COMPLETED"];
  public data: Array<any> = [];
  constructor(private http: Http) {

  }

  public ngOnInit(): void {
    this.http.get("./assets/data.json").subscribe((response) => {
      const data = response.json();
      console.log(data);
      this.data.push((data.pending).concat(data.autoApprove));
      this.data.push(data.pending);
      this.data.push(data.autoApprove);
      this.data.push(data.completed);
      console.log(this.data);
      this.dataLoaded = true;
    })
  }

  public swipeLeft(): void {
    if (this.selectedIndex < this.headers.length - 1) {
      this.selectedIndex++;
    }
  }

  public swipeRight(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

}
