import { Component } from '@angular/core';
import { AareguruService } from '../services/aareguru.service';
import { IAarguruData } from '../services/iaarguru-data';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent {
  data: IAarguruData = {}
  constructor(private aareGuruService: AareguruService){}

  ngOnInit(){
    this.aareGuruService.getTodayBern().subscribe((x: IAarguruData) => {
      this.data = x;
    });
  }
}
