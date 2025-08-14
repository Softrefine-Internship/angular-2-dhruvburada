import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-changer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.scss']
})
export class ColorChangerComponent implements OnChanges {
  textColor: string = '#000000';
  backColor: string = '#ffffff';

  @ViewChild('myName') myName!: ElementRef;

  ngOnChanges() {
    console.log("function called")
    this.updateColors();
  }


  updateColors() {
    if (this.myName?.nativeElement) {
      this.myName.nativeElement.style.color = this.textColor;
      this.myName.nativeElement.style.backgroundColor = this.backColor
    }
  }
}
