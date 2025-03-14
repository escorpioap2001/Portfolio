import { Component } from '@angular/core';
import {
  faList, faAddressCard,
  faPhone, faEnvelope, faHouse, faBrain
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  faHouse = faHouse;
  faBrain = faBrain;
  faList = faList;
  faAddressCard = faAddressCard;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  
}
