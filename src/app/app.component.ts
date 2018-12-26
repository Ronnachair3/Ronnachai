import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'helloAngular7';
  mDataArray:any[]=[];

  constructor(private http:HttpClient){
  }

  onSubmit(data){
    //let data = {username: feedbackData.email, feedback: feedbackData.feedback};
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
      alert(JSON.stringify(result));
      this.getFeedback();
    });
  }

  getFeedback(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result=>{
    this.mDataArray = result.data;
    //alert(JSON.stringify(result));
    });
  }

  ngOnInit(): void {
    this.getFeedback();
  }
}
