# ngx-text-overflow-clamp-v2: Angular 20+ wrapper for [text-overflow-clamp](https://github.com/joshgillies/text-overflow-clamp)

[![npm version](https://badge.fury.io/js/ngx-text-overflow-clamp-v2.svg)](https://www.npmjs.com/package/ngx-text-overflow-clamp-v2)

> **🔄 This is a modernized fork** of [mbenzenhoefer/ngx-text-overflow-clamp](https://github.com/mbenzenhoefer/ngx-text-overflow-clamp) updated for Angular 20+ compatibility.

> Maintained by [@raazatul7](https://github.com/raazatul7) — [GitHub Repo](https://github.com/raazatul7/ngx-text-overflow-clamp)

This library wraps the plain JS library [text-overflow-clamp](https://github.com/joshgillies/text-overflow-clamp) for Angular 20+ usage, providing a simple directive to clamp overflowing text to a specified number of lines.

## Installation

```shell
npm install --save ngx-text-overflow-clamp-v2 text-overflow-clamp
```

## Usage

### Standalone Directive (Angular 20+ recommended)
```typescript
import { TextOverflowClampDirective } from 'ngx-text-overflow-clamp-v2';

@Component({
  selector: 'my-component',
  standalone: true,
  imports: [TextOverflowClampDirective],
  template: `
    <div style="width:250px;">
      <div [clamp]="2">
        Lorem ipsum dolor sit amet, ...
      </div>
    </div>
  `
})
export class MyComponent {}
```

### NgModule (Legacy/Compatible)
```typescript
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp-v2';

@NgModule({
  imports: [NgxTextOverflowClampModule]
})
export class MyModule {}
```

## Example
```html
<!-- the outer container MUST have a width! -->
<div style="width:250px;">
  <!-- we want two lines max. -->
  <div [clamp]="2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...
  </div>
</div>
```

Will become (depending on font size etc.):
```
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy...
```

---

## About
- **This is a fork** of [mbenzenhoefer/ngx-text-overflow-clamp](https://github.com/mbenzenhoefer/ngx-text-overflow-clamp) updated for Angular 20+ compatibility
- Maintained by [@raazatul7](https://github.com/raazatul7)
- [GitHub Repo](https://github.com/raazatul7/ngx-text-overflow-clamp)
- Compatible with Angular 20+

## Why This Fork?
The original `ngx-text-overflow-clamp` library needed updates for Angular 20+ compatibility. This fork provides:
- Updated dependencies for Angular 20+
- Modern standalone component support
- Continued maintenance and updates
