import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hexagonal-grid',
  templateUrl: './hexagonal-grid.component.html',
  styleUrls: ['./hexagonal-grid.component.css'],
})
export class HexagonalGridComponent {
  @Input() images: { src: string, difficulty: string, text: string }[] = [];
  @Input() invertido: boolean = false;
  
  celda: string = '../../../assets/images/celda.png';
  celda_bajo: string = '../../../assets/images/celda_bajo.png';
  celda_medio: string = '../../../assets/images/celda_medio.png';
  celda_alto: string = '../../../assets/images/celda_alto.png';

  groupImagesIntoRows(): { src: string, difficulty: string, text: string }[][] {
    const rows: { src: string, difficulty: string, text: string }[][] = [];
    const rowLength = 2;

    for (let i = 0; i < this.images.length; i += rowLength) {
      rows.push(this.images.slice(i, i + rowLength));
    }

    return rows;
  }

  getCellImage(difficulty: string): string {
    switch (difficulty) {
      case 'bajo':
        return this.celda_bajo;
      case 'medio':
        return this.celda_medio;
      case 'alto':
        return this.celda_alto;
      default:
        return this.celda;
    }
  }
}
