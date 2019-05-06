import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlamelinkService } from '../../shared/services/flamelink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  content: any;
  posts: any[];

  constructor(private fl: FlamelinkService) { }

  ngOnInit() {
    this.fl.getApp().content.subscribe({
      schemaKey: 'myBlog1',
      populate: true,
      entryId: 'QY3dQvQehgYFx8I6QDyT',
      callback : (error, data) => {
        if (error) {
          console.error(error);
        }

        this.content = data;
      }
    });

    this.fl.getApp().content.subscribe({
      schemaKey: 'myBlog1',
      callback : (error, data) => {
        if (error) {
          console.error(error);
        }

        this.posts = Object.keys(data).map(key => data[ key ]);
      }
    });
  }
}
