import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Dors Venabili', 'Hari Seldon', 'Gaal Dornick', 'Salvor Hardin'];
  public deletedHero: string | undefined = '';

  removeHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
