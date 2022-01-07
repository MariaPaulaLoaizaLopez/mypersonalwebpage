import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  @Input() dark = false;
  @Input() title: string | undefined;
  color: string | undefined;
  divider: string | undefined;
  

  constructor() { }

  ngOnInit(): void {
    if (this.dark){
    this.color = 'text-secondary';
    this.divider = '';
    } else {
      this.color = 'text-white';
      this.divider = 'divider-light';
    }
    
    
  }

}
