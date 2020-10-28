import { Component, OnInit } from '@angular/core';
import { Television } from '../television'

@Component({
  selector: 'app-television-display',
  templateUrl: './television-display.component.html',
  styleUrls: ['./television-display.component.css']
})
export class TelevisionDisplayComponent implements OnInit {

  constructor() { }

  televisions: Television[] = [
    {
      name: 'Samsung',
      size: 65,
      smart: true
    },
    {
      name: 'Sony',
      size: 75,
      smart: false
    },
    {
      name: 'Hisense',
      size: 55,
      smart: true
    }
  ]

  ngOnInit(): void {
  }

  removeTV = (name) => {
    this.televisions = this.televisions.filter((x) => x.name !== name)
  }  

}
