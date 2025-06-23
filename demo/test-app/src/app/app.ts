import { Component } from '@angular/core';
import { TextOverflowClampDirective, NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp-v2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextOverflowClampDirective, NgxTextOverflowClampModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>ngx-text-overflow-clamp-v2 Demo</h1>
      
      <h2>Standalone Directive Usage</h2>
      <div style="width: 300px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>2 Lines Clamp</h3>
        <p [clamp]="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div style="width: 300px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>3 Lines Clamp</h3>
        <p [clamp]="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>1 Line Clamp (Narrow Container)</h3>
        <p [clamp]="1">
          This is a very long text that should be clamped to just one line when the container is narrow.
        </p>
      </div>

      <div style="width: 400px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>4 Lines Clamp (Wider Container)</h3>
        <p [clamp]="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>

      <h2>Dynamic Clamp Example</h2>
      <div style="width: 300px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>Dynamic Lines: {{ dynamicLines }}</h3>
        <button (click)="changeDynamicLines()">Change Lines ({{ dynamicLines }})</button>
        <p [clamp]="dynamicLines">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <h2>Edge Cases</h2>
      <div style="width: 300px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>Short Text (should not clamp)</h3>
        <p [clamp]="3">Short text.</p>
      </div>

      <div style="width: 300px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>Empty Text</h3>
        <p [clamp]="2"></p>
      </div>
    </div>
  `,
  styles: [`
    h1 { color: #2196F3; }
    h2 { color: #4CAF50; margin-top: 30px; }
    h3 { color: #FF9800; margin: 0 0 10px 0; font-size: 14px; }
    button { 
      padding: 5px 10px; 
      margin-bottom: 10px; 
      background: #2196F3; 
      color: white; 
      border: none; 
      border-radius: 3px; 
      cursor: pointer; 
    }
    button:hover { background: #1976D2; }
    div[style*="border"] { background: #f9f9f9; }
  `]
})
export class App {
  title = 'ngx-text-overflow-clamp-v2 Demo';
  dynamicLines = 2;

  changeDynamicLines() {
    this.dynamicLines = this.dynamicLines === 2 ? 4 : this.dynamicLines === 4 ? 1 : 2;
  }
}
