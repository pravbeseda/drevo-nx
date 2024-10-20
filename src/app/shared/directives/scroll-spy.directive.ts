import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

// Todo: fix it
@Directive({
    selector: '[drevoScrollSpy]',
    standalone: true,
})
export class ScrollSpyDirective {
    @Input()
    public tags: string[] = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

    @Output()
    public sectionChanged = new EventEmitter<string>();

    private currentSection: string | undefined;

    constructor(private _el: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    public onScroll(event: Event) {
        const target = event.target as HTMLElement;
        let currentSection: string | undefined;
        const children = this._el.nativeElement.children;
        const scrollTop = target.scrollTop;
        const parentOffset = target.offsetTop;
        children.forEach((element: HTMLElement) => {
            if (this.tags.includes(element.tagName.toUpperCase())) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                    currentSection = element.id;
                }
            }
        });

        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChanged.emit(this.currentSection);
        }
    }
}
