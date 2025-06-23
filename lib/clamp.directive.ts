import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit,
    OnDestroy,
    inject,
    numberAttribute
} from "@angular/core";

import clamp from "text-overflow-clamp";

/**
 * Angular directive for text overflow clamping
 * 
 * Usage: <div [clamp]="3">Long text content here...</div>
 * 
 * @example
 * ```html
 * <p [clamp]="2">This text will be clamped to 2 lines with ellipsis</p>
 * ```
 */
@Directive({
    selector: "[clamp]",
    standalone: true // Modern Angular 20 standalone directive
})
export class TextOverflowClampDirective implements AfterViewInit, OnDestroy {
    /**
     * Number of lines to clamp the text to
     * Accepts number input with automatic string-to-number conversion
     */
    @Input({ 
        alias: "clamp", 
        transform: numberAttribute 
    }) lines: number = 1;

    // Modern Angular 20 dependency injection pattern
    private readonly elementRef = inject(ElementRef);
    private isDestroyed = false;

    ngAfterViewInit(): void {
        // Ensure we have a valid element and lines value
        if (this.elementRef.nativeElement && this.lines > 0 && !this.isDestroyed) {
            try {
                clamp(this.elementRef.nativeElement, this.lines);
            } catch (error) {
                console.warn('TextOverflowClampDirective: Error clamping text', error);
            }
        }
    }

    ngOnDestroy(): void {
        this.isDestroyed = true;
    }
}
