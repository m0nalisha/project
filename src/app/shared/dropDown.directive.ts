import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : '[appDropDown]'
})
export class DropdownDirective {
  @HostBinding('class.status.open') value=false;
  @HostListener('click') toggel()
  {
      this.value=!this.value;
  }
}