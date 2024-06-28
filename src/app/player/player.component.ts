import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GcpDataService } from '../gcp-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  currentMsg: string = '';
  Category: string = '';
  videoFrame: string = '';

  videoId: string;
  video: any;
  @ViewChild('myVideo') myVideo: ElementRef<HTMLVideoElement>;
  startTime: number;
  videoElm: HTMLVideoElement;
  currentTimeIndex: number = 0;
  constructor(private route: ActivatedRoute, private gcp: GcpDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id');
      this.loadVideo(this.videoId);
    });
  }

  ngAfterViewInit(): void {
    this.videoElm = this.myVideo.nativeElement;
    // this.startVideoAtTimeIfNeeded();
  }

  loadVideo(id: string): void {
    this.gcp.getVideoData(id).subscribe((res: any) => {
      this.video = {
        v_id: res[0].v_id,
        video_link: res[0].video_link,
        data: res
      }
      console.log(this.video)
      //this.video = this.videoArr.find(v => v.id === +this.videoId);
      this.Category = this.video.data[0].category;
      this.startVideoAtTimeIfNeeded();
    }, (err: any) => {
      console.log(err);
    })
  }

  startVideoAtTimeIfNeeded(): void {
    if (this.video && this.videoElm) {
      if (!isNaN(this.video.data[this.currentTimeIndex].start) && this.video.data[this.currentTimeIndex].start >= 0) {
        this.videoElm.src = this.video.video_link; // Set the video source
        this.videoElm.currentTime = this.video.data[this.currentTimeIndex].start;
        this.videoElm.play();
      } else {
        alert("Please enter a valid start time.");
      }
    }
  }

  timeForwardBackward(startime) {
    this.videoElm.currentTime = startime
    this.videoElm.play();
  }

  onNextClick(): void {
    this.currentTimeIndex++;
    if (this.currentTimeIndex < this.video.time.length) {
      const nextSegment = this.video.time[this.currentTimeIndex];
      this.videoElm.currentTime = nextSegment.Start;
      this.videoElm.play();
    } else {
      alert("Please enter a valid start time.");
    }
  }

  onTimeUpdate(): void {
    this.currentMsg = '';
    this.videoFrame = ''
    let number = this.videoElm.currentTime;
    // const currentTime = this.videoElm.currentTime;
    // const currentSegment = this.video.time.find(segment => currentTime >= segment.secFrom && currentTime <= segment.secTo);
    // this.currentMsg = currentSegment ? currentSegment.msg : '';
    for (let i = 0; i < this.video.data.length; i++) {
      if (number >= this.video.data[i].start && number <= this.video.data[i].end) {
        this.videoFrame = this.convertSecondsToMMSS(this.video.data[i].start) + " - " + this.convertSecondsToMMSS(this.video.data[i].end) + " Minutes"
        this.currentMsg = this.video.data[i].speaker + " : " + this.video.data[i].transcript;
      }
    }
  }

  convertSecondsToMMSS(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.ceil(seconds % 60);
    return `${this.padToTwoDigits(minutes)}:${this.padToTwoDigits(remainingSeconds)}`;
  }

  private padToTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  isCurrentTimeInRange(startTime: number, endTime: number): boolean {
    if (!this.videoElm) return false; // Ensure video element is available
  
    const currentTime = this.videoElm.currentTime;
    return currentTime >= startTime && currentTime <= endTime;
  }

}
