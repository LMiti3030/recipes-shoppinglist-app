import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective implements OnInit{

    @Input('appDropDown') defaultClass : string ='btn-group';


    @HostBinding('class') customClass : string;

    isOpen : boolean = false;

    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
        if(this.isOpen){
            this.customClass = this.defaultClass + ' open';
        } else{
            this.customClass = this.defaultClass;
        }
    }

    ngOnInit(): void {
        this.customClass = this.defaultClass;
    }


}