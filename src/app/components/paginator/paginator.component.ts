import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.styl']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() current: number = 0;
  @Input() total: number = 1;
  @Input() end_size: number = 1;
  @Input() mid_size: number = 2;
  @Input() space: string = '&hellip;';
  @Input() base: string = '';
  // @Input() show_all: boolean = false;
  @Input() prevNext: boolean = true;
  leftEnd: number;
  rightEnd: number;
  leftMid: number;
  rightMid: number;

  leftEndNumber: number[] = [];
  rightEndNumber: number[] = [];
  leftMidNumber: number[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log("on init");
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    this.update();
  }

  update() {
    this.leftEnd = this.current <= this.end_size ?
      this.current - 1 : this.end_size;

    this.rightEnd = this.total - this.current <= this.end_size ?
      this.current + 1 : this.total - this.end_size + 1;

    this.leftMid = this.current - this.mid_size <= this.end_size ?
      this.leftEnd + 1 : this.current - this.mid_size;

    this.rightMid = this.current + this.mid_size + this.end_size > this.total ?
      this.rightEnd - 1 : this.current + this.mid_size;

    this.leftEndNumber=[];
    this.leftMidNumber=[];
    this.rightEndNumber=[];
    for (let i = 1; i <= this.leftEnd; i++) {
      this.leftEndNumber.push(i)
    }
    for (let i = this.leftMid; i <= this.rightMid; i++) {
      this.leftMidNumber.push(i)
    }
    for (let i = this.rightEnd; i <= this.total; i++) {
      this.rightEndNumber.push(i)
    }
    // this.leftEndNumber = [...Array(this.leftEnd).keys()].map(k => k + 1);
    // this.leftEndNumber = Array.from({length: this.leftEnd}, (_, i) => i + 1);

    // this.leftMidNumber = [...Array(this.rightEnd - this.leftMid).keys()].map(k => k + this.leftMid);
    // this.leftMidNumber = Array.from({length: this.rightEnd - this.leftMid}, (_, i) => i + this.leftMid);

    // this.rightEndNumber = [...Array(this.total - this.rightEnd).keys()].map(k => k + this.rightEnd);
    // this.rightEndNumber = Array.from({length: this.total - this.rightEnd}, (_, i) => i + this.rightEnd);

  }

}
