import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  private data: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getJsonData();
  }
  getJsonData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
    // return this.data;
  }
}
