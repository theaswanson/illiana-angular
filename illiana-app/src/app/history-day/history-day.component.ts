import { Component, OnInit } from '@angular/core';
import { HistoryDayService, Video } from './history-day.service';

export class Credit {
  what: string;
  who: string;
}

@Component({
  selector: 'app-history-day',
  templateUrl: './history-day.component.html',
  styleUrls: ['./history-day.component.scss']
})
export class HistoryDayComponent implements OnInit {

  videos: Video[];
  firstVideo: Video;
  credits: Credit[] = [
    { what: 'Cameraman, Video Editor, and Drone Operator', who: 'Dave Hobbs' } as Credit,
    { what: 'Main Character', who: 'Dave Sims' } as Credit,
    { what: 'Sawmill Preparer', who: 'Owen Moudy' } as Credit,
    { what: 'Blacksmithing Preparers', who: 'Dominick Andrisani and assistant' } as Credit,
    { what: 'Blacksmithing Organizer', who: 'Ted Stout' } as Credit,
    { what: 'Train Organizer', who: 'Charlie Lupinik' } as Credit,
    { what: 'Antique Car Organizer', who: 'Doc Fontaine' } as Credit,
    { what: 'Gate Man', who: 'Gary York' } as Credit,
    { what: 'Special Thanks', who: 'The Beheler Family (Liam, Callum, Phoebe, Amanda, and Mom)' } as Credit,
  ];

  constructor(private videoService: HistoryDayService) { }

  ngOnInit(): void {

    this.videos = this.videoService.getVideos();
    if (this.videos.length > 0) {
      this.firstVideo = this.videos[0];
    }
  }

}
