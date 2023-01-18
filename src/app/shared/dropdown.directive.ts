import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen : boolean = false;


    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        
    }

}