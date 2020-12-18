export class Dispositivo{
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _nombre: string;
  // tslint:disable-next-line:variable-name
  private _ubicacion: string;
  // tslint:disable-next-line:variable-name
  private _electroValvulaID: number;
  // tslint:disable-next-line:variable-name
  private _valveStatus: boolean;

  constructor(obj?: any){
    this._id = obj && obj.id || '';
    this._nombre = obj && obj.nombre || '';
    this._ubicacion = obj && obj.ubicacion || '';
    this._electroValvulaID = obj && obj.electroValvulaID || '';
    this._valveStatus = obj && obj.valveStatus || false;
  }

  get valveStatus(): boolean {
    return this._valveStatus;
  }

  set valveStatus(value: boolean) {
    this._valveStatus = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get ubicacion(): string {
    return this._ubicacion;
  }

  set ubicacion(value: string) {
    this._ubicacion = value;
  }

  get electroValvulaID(): number {
    return this._electroValvulaID;
  }

  set electroValvulaID(value: number) {
    this._electroValvulaID = value;
  }

  toString(): string {
    return `ID: ${this._id}, nombre: ${this._nombre}, ubicacion: ${this._ubicacion}, electro válvular ID: ${this._electroValvulaID}`;
  }
}
