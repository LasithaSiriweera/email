import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.css']
})
export class SendEmailsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
