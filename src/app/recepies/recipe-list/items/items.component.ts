import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recipe.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

 @Input() recepie:Recepie; 
 @Input()  index:number;
constructor(private recepieService:RecepieService){
}
//  onSelect()
//  {
//    this.recepieService.recepieSelected.emit(this.recepie);
//  }

}
