import { NgModule } from "@angular/core";
import { TextOverflowClampDirective } from "./clamp.directive";

/**
 * Module for importing the TextOverflowClampDirective
 * 
 * @deprecated Since Angular 20, consider using standalone components.
 * Import TextOverflowClampDirective directly in your components.
 * 
 * @example
 * ```typescript
 * // Modern approach (recommended)
 * import { TextOverflowClampDirective } from 'ngx-text-overflow-clamp-v2';
 * 
 * @Component({
 *   imports: [TextOverflowClampDirective],
 *   template: '<p [clamp]="2">Text content</p>'
 * })
 * export class MyComponent {}
 * 
 * // Legacy approach (still supported)
 * import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp-v2';
 * 
 * @NgModule({
 *   imports: [NgxTextOverflowClampModule]
 * })
 * export class MyModule {}
 * ```
 */
@NgModule({
    imports: [TextOverflowClampDirective],
    exports: [TextOverflowClampDirective]
})
export class NgxTextOverflowClampModule {
}
