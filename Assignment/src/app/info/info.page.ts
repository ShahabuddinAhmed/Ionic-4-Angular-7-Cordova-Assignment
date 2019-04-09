import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  infos: any;

  constructor(private _infoService: InfoService) { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this._infoService._getData()
    .subscribe(data => {
      this.infos = data;
      this.infos.phenology.map(result => {
        console.log(result.name);
        let name = result.name;
        console.log(name.en);
        console.log(name.la);
        console.log(name.no);

        result.phases.map(innerresult => {
          console.log(innerresult);
          let id = innerresult.id;
          console.log(id);
          let title = innerresult.title;
          console.log(title.en);
          console.log(title.no);
          console.log(innerresult.ws);
          let ws = innerresult.ws;
          console.log(ws.add);
        });
      });
    });
  }
}
