import { Component } from '@angular/core';

export class Persona {

  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  personas: Persona[] = [];

  constructor() {

    const persona: Persona = new Persona('perico');
    this.personas.push(persona);

  }


}
