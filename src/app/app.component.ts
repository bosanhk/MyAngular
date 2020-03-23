import { Component, enableProdMode, Compiler } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngular';

  constructor(private compiler: Compiler) {
    compiler.clearCache();
  }
}
