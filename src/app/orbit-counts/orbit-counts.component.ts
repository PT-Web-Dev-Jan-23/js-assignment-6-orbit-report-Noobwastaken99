import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	countItems: string[] = ['Total:', 'Communication:', 'Probe:', 'Space Station:', 'Telescope:', 'Positioning:', 'Space Debris:'];

  constructor() { }

  ngOnInit() {
  }

//   countByType(type: string): number {
// 	let count = 0;
// 	if (this.satellites) {
// 	  for (let i = 0; i < this.satellites.length; i++) {
// 		 if (this.satellites[i].type === type) {
// 			count++;
// 		 }
// 	  }
// 	}
// 	return count;
//  }

	countByType(type: string): number {
    let count = 0;
    console.log(type,type.substring(0,type.length-1))
    type = type.substring(0,type.length-1);
    if (this.satellites && type !== 'Total') {
      for (let i = 0; i < this.satellites.length; i++) {
         if (this.satellites[i].type === type) {
            count++;
         }
      }
      return count;
    } else {
        return this.satellites.length;
    }
 }

}