import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss']
})
export class DropdownlistComponent  implements OnInit{

  @Input() options: string[] = [];
  selectedOption: string | undefined;
  isOpen: boolean = false;

  ngOnInit(): void {
    this.selectedOption = this.options[0] ;
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
