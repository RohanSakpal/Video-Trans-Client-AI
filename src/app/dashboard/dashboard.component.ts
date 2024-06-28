import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GcpDataService } from '../gcp-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private gcpDataService: GcpDataService) { }
  videoArr: any[] = [];
  keyword:string = '';
  isDataNotFound:boolean = false;
  ngOnInit(): void {
   
  }

  visitPlayer(id:string) {
    this.router.navigate([`/videoplayer/${id}`]);
  }

  keyupFunc() {
    this.isDataNotFound = false;
  }

  onSearch() {
    if(this.keyword != '') {
      sessionStorage.setItem('keyword',this.keyword);
      this.gcpDataService.getGcpData(this.keyword).subscribe(data => {
        this.videoArr = data;
        if(this.videoArr.length == 0) {
          this.isDataNotFound = true;
        }
      });
    }
  }

}
