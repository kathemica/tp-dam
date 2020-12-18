import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {
  private weatherIcon = '../../assets/thermometer.svg';
  private mapMarkerIcon = '../../assets/map-marker-radius.svg';
  private valveOpen = '../../assets/valve-open.svg';
  private valveClosed = '../../assets/valve-closed.svg';
  private rightArrow = '../../assets/keyboard_arrow_right.svg';
  valveType = '';

  @Input() elemento: any;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // icono de termometro
    this.matIconRegistry.addSvgIcon(
      `weatherIcon`,
      this. domSanitizer.bypassSecurityTrustResourceUrl(this.weatherIcon));

    // icono de mapa
    this.matIconRegistry.addSvgIcon(
      `mapMarker`,
      this. domSanitizer.bypassSecurityTrustResourceUrl(this.mapMarkerIcon));

    // icono de valvula abierta
    this.matIconRegistry.addSvgIcon(
      `valveOpen`,
      this. domSanitizer.bypassSecurityTrustResourceUrl(this.valveOpen));

    // icono de valvula cerrada
    this.matIconRegistry.addSvgIcon(
      `valveClosed`,
      this. domSanitizer.bypassSecurityTrustResourceUrl(this.valveClosed));

    this.matIconRegistry.addSvgIcon(
      `rightArrow`,
      this. domSanitizer.bypassSecurityTrustResourceUrl(this.rightArrow));

    // this.valveType = this.elemento.electroValvulaID ? `<mat-icon svgIcon="valveOpen">
    // </mat-icon>` : `<mat-icon svgIcon="valveClose"></mat-icon>`;
  }

  ngOnInit(): void {
  }
}
