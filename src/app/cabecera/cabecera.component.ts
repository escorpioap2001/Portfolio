import { Component } from '@angular/core';
import { faList, faHouse, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent {
  faHouse = faHouse;
  faList = faList;
  faBrain = faBrain;
  faEnvelope = faEnvelope;

  spanish = true;
  english = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'es') {
      this.spanish = true;
      this.english = false;
    } else {
      this.spanish = false;
      this.english = true;
    }
  }
}
