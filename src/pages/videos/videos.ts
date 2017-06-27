import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Modal, Alert} from 'ionic-angular';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

// import {YoutubeService} from '../../providers/youtube-service/youtube-service';


 @IonicPage()
 @Component({
   selector: 'page-videos',
   templateUrl: 'videos.html',
//   providers:[YoutubeService]
 })
 export class VideosPage {
  
//   channelID: string = 'UCTndwRfQ2oYdleJ28RezbOg';
//   maxResults: string = '10';
//   pageToken: string; 
//   googleToken: string = 'AIzaSyCiXw4yuaDxMlemFSA6MPhpetwPqja7M-U';
//   searchQuery: string = 'ravetraintv -kissing';
//   posts: any = [];
//   onPlaying: boolean = false; 

//   constructor(public http: Http, public ytPlayer: YoutubeService, public navCtrl: NavController, public navParams: NavParams) {
//         this.loadSettings();

//   }

  constructor( public navCtrl: NavController, public navParams: NavParams) {

  }

//   launchYTPlayer(id, title): void {
//     this.ytPlayer.launchPlayer(id, title);
//   }

//   fetchData(): void {

//     let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;

//     if(this.pageToken) {
//       url += '&pageToken=' + this.pageToken;
//     }

//     this.http.get(url).map(res => res.json()).subscribe(data => {
      
//       console.log (data.items);
//       // *** Get individual video data like comments, likes and viewCount. Enable this if you want it.
//       // let newArray = data.items.map((entry) => {
//       //   let videoUrl = 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&id=' + entry.id.videoId + '&key=' + this.googleToken;
//       //   this.http.get(videoUrl).map(videoRes => videoRes.json()).subscribe(videoData => {
//       //     console.log (videoData);
//       //     this.posts = this.posts.concat(videoData.items);
//       //     return entry.extra = videoData.items;
//       //   });
//       // });
//       this.posts = this.posts.concat(data.items);
//     });
//   }
//   loadSettings(): void {
//       this.fetchData();
//   }
//   openSettings(): void {
//       console.log("TODO: Implement openSettings()");
//   }
//   playVideo(e, post): void {
//       console.log(post);
//       this.onPlaying = true;
//       this.ytPlayer.launchPlayer(post.id, post.snippet.title);
//   }
//   loadMore(): void {
//       console.log("TODO: Implement loadMore()");
//   }
}


