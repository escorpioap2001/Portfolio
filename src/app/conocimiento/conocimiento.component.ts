import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css'],
})
export class ConocimientoComponent {
  categorias: any;

  constructor(private translate: TranslateService) {
    this.cargarConocimientos();

    this.translate.onLangChange.subscribe(() => {
      this.cargarConocimientos();
    });
  }

  cargarConocimientos() {
    this.translate
      .get(['WEBDEVELOP', 'DATABASE', 'DEVCONTAINER', 'TESTSECURITY'])
      .subscribe((translations) => {
        this.categorias = [
          {
            nombre: translations['WEBDEVELOP'],
            conocimientos: [
              {
                src: '../../assets/images/iconos/html.png',
                difficulty: 'alto',
                text: 'HTML',
              },
              {
                src: '../../assets/images/iconos/css.png',
                difficulty: 'alto',
                text: 'CSS',
              },
              {
                src: '../../assets/images/iconos/javascript.png',
                difficulty: 'alto',
                text: 'JAVASCRIPT',
              },
              {
                src: '../../assets/images/iconos/typescript.png',
                difficulty: 'alto',
                text: 'TYPESCRIPT',
              },
              {
                src: '../../assets/images/iconos/angularjs.png',
                difficulty: 'alto',
                text: 'ANGULAR',
              },
              {
                src: '../../assets/images/iconos/react.png',
                difficulty: 'bajo',
                text: 'REACT',
              },
              {
                src: '../../assets/images/iconos/ionic.png',
                difficulty: 'bajo',
                text: 'IONIC',
              },
            ],
          },
          {
            nombre: 'Backend',
            conocimientos: [
              {
                src: '../../assets/images/iconos/java.png',
                difficulty: 'alto',
                text: 'JAVA',
              },
              {
                src: '../../assets/images/iconos/node.png',
                difficulty: 'bajo',
                text: 'NODE',
              },
              {
                src: '../../assets/images/iconos/springboot.png',
                difficulty: 'medio',
                text: 'SPRINGBOOT',
              },
              {
                src: '../../assets/images/iconos/punto-net.png',
                difficulty: 'bajo',
                text: '.NET',
              },
              {
                src: '../../assets/images/iconos/c++.png',
                difficulty: 'alto',
                text: 'C++',
              },
              {
                src: '../../assets/images/iconos/c-sharp.png',
                difficulty: 'alto',
                text: 'C#',
              },
              {
                src: '../../assets/images/iconos/python.png',
                difficulty: 'bajo',
                text: 'PYTHON',
              },
            ],
          },
          {
            nombre: translations['DATABASE'],
            conocimientos: [
              {
                src: '../../assets/images/iconos/mysql.png',
                difficulty: 'alto',
                text: 'MYSQL',
              },
              {
                src: '../../assets/images/iconos/postgresql.png',
                difficulty: 'medio',
                text: 'POSTGRESQL',
              },
              {
                src: '../../assets/images/iconos/mongodb.png',
                difficulty: 'medio',
                text: 'MONGODB',
              },
            ],
          },
          {
            nombre: translations['DEVCONTAINER'],
            conocimientos: [
              {
                src: '../../assets/images/iconos/docker.png',
                difficulty: 'medio',
                text: 'DOCKER',
              },
              {
                src: '../../assets/images/iconos/kubernetes.png',
                difficulty: 'medio',
                text: 'KUBERNETES',
              },
              {
                src: '../../assets/images/iconos/git.png',
                difficulty: 'alto',
                text: 'GIT',
              },
            ],
          },
          {
            nombre: translations['TESTSECURITY'],
            conocimientos: [
              {
                src: '../../assets/images/iconos/junit.png',
                difficulty: 'alto',
                text: 'JUNIT',
              },
              {
                src: '../../assets/images/iconos/robot-framework.png',
                difficulty: 'medio',
                text: 'ROBOT FRAMEWORK',
              },
              {
                src: '../../assets/images/iconos/zap.png',
                difficulty: 'alto',
                text: 'OWASP ZAP',
              },
              {
                src: '../../assets/images/iconos/postman.png',
                difficulty: 'medio',
                text: 'POSTMAN',
              },
            ],
          },
          {
            nombre: 'Otros',
            conocimientos: [
              {
                src: '../../assets/images/iconos/scrum.png',
                difficulty: 'alto',
                text: 'SCRUM',
              },
              {
                src: '../../assets/images/iconos/json.png',
                difficulty: 'alto',
                text: 'JSON',
              },
              {
                src: '../../assets/images/iconos/oculus.png',
                difficulty: 'medio',
                text: 'OCULUS',
              },
              {
                src: '../../assets/images/iconos/unreal.png',
                difficulty: 'bajo',
                text: 'UNREAL',
              },
              {
                src: '../../assets/images/iconos/unity.png',
                difficulty: 'alto',
                text: 'UNITY',
              },
              {
                src: '../../assets/images/iconos/pycharm.png',
                difficulty: 'medio',
                text: 'PYCHARM',
              },
            ],
          },
        ];
      });
  }

  getColumnas(): { nombre: string; conocimientos: any[] }[][] {
    const columnas: { nombre: string; conocimientos: any[] }[][] = [];

    for (let i = 0; i < this.categorias.length; i += 2) {
      const grupo = this.categorias.slice(i, i + 2);

      while (grupo.length < 2) {
        grupo.push({ nombre: '', conocimientos: [] });
      }
      columnas.push(grupo);
    }

    return columnas;
  }
}
