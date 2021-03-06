
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Clases nesesarias para el envio via Ajax
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importamos la Clase de las Propiedades del Sistema
import { SystemPropertiesService } from '../../../shared/system-properties.service';
import { SystemEndPointsService } from '../../../shared/system-end-points.service';

@Injectable()
export class ListasComunesService {

  // private estadosArray: any[];

  public tokenHeader = this._systemPropertiesService.getIdentity().token;
  public usernameHeader = this._systemPropertiesService.getIdentity().userName;
  // httpOptions = new HttpHeaders();

  public headers = new HttpHeaders();


  /****************************************************************************
  * Funcion: FND-00001
  * Fecha: 01-06-2018
  * Descripcion: Metodo para obtener los Datos de la
  * variable identity del localStorage
  * Objetivo: Seteo de las variables en json
  ****************************************************************************/
  constructor(private _http: HttpClient,
    private _systemEndPointsService: SystemEndPointsService,
    private _systemPropertiesService: SystemPropertiesService) {
    // Instanciamos la Url de la API
    // this._url = this._systemProperties.getmethodUrlService();

    // Seteo de los Headers
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenHeader, 'Access-Control-Allow-Origin': '*',
    });
  }// FIN | Constructor


  /****************************************************************************
  * Funcion: FND-00001
  * Fecha: 21-08-2018
  * Descripcion: Metodo para obtener los Datos de los Estados de la Actividad
  * Objetivo: datos de los Estados de las Actividades
  * Params: {  }
  ****************************************************************************/
  getAllEstados(idGrupo): Observable<any> {
    // Parametros solicitados (Grupo Solicitao)
    const paramSend = idGrupo;
    // Retorno de la Funcion
    // return this._http.get( 'http://localhost:8090/api/v1/usuarios/findByMail/' + params, { headers: this.headers,
    return this._http.get(this._systemEndPointsService.getEndPointService('estadosGroup', 2) + paramSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00001


  /****************************************************************************
  * Funcion: FND-00002
  * Fecha: 22-08-2018
  * Descripcion: Metodo para obtener los Datos de los Sectores Ejecutores de la
  * Actividad
  * Objetivo: datos de los Sectores Ejecutores de las Actividades
  * Params: {  }
  ****************************************************************************/
  getAllSectoresEjecutores(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('matActGroup', 1), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00002


  /****************************************************************************
  * Funcion: FND-00003
  * Fecha: 22-08-2018
  * Descripcion: Metodo para obtener los Datos de los Estrategias de la
  * Actividad
  * Objetivo: datos de las Estrategias de las Actividades
  * Params: {  }
  ****************************************************************************/
  getAllEstrategias(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('matActGroup', 3), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00003


  /****************************************************************************
  * Funcion: FND-00004
  * Fecha: 22-08-2018
  * Descripcion: Metodo para obtener los Datos de los Presupuestos de la
  * Actividad
  * Objetivo: datos de las Presupuestos de las Actividades
  * Params: {  }
  ****************************************************************************/
  getAllPresupuesto(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('matActGroup', 5), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00004


  /****************************************************************************
  * Funcion: FND-00005
  * Fecha: 12-10-2018
  * Descripcion: Metodo para obtener los Datos de los Espacios de Trabajo
  * Objetivo: datos de los Espacios de Trabajo
  * Params: {  }
  ****************************************************************************/
  getAllEspaciosTrabajo(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('espacioTrabajoGroup', 1), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00005


  /****************************************************************************
  * Funcion: FND-00006
  * Fecha: 12-10-2018
  * Descripcion: Metodo para obtener los Datos de los Espacios de Trabajo
  * con su respectivo Id
  * Objetivo: datos de los Espacios de Trabajo consultado de forma individual
  * Params: { idEsapcioTrabajo }
  ****************************************************************************/
  getEspaciosTrabajo(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('espacioTrabajoGroup', 2), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00006


  /****************************************************************************
  * Funcion: FND-00007
  * Fecha: 12-10-2018
  * Descripcion: Metodo para obtener los Datos de los Espacios de Trabajo
  * asignados al usuario, al momento de Crearlo
  * Objetivo: datos de los Espacios de Trabajo asignados al Usuarios
  * Params: { idUsuario }
  ****************************************************************************/
  getAllEspaciosTrabajoUsuario(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('espacioTrabajoGroup', 3), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00007


  /****************************************************************************
  * Funcion: FND-00008
  * Fecha: 13-10-2018
  * Descripcion: Metodo para obtener los Datos de los Tipos de Organizaciones
  * Objetivo: datos de los Tipos de Organizaciones
  * Params: { idTipoOrganizacion }
  ****************************************************************************/
  getAllTipoOrganizacion(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('organizacionesGroup', 1), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00008

  /****************************************************************************
  * Funcion: FND-00009
  * Fecha: 13-10-2018
  * Descripcion: Metodo para obtener los Datos de los Paises
  * Objetivo: datos de los Tipos de Paises
  * Params: { }
  ****************************************************************************/
  getAllPaises(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('mantGenericosGroup', 1), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00009


  /****************************************************************************
  * Funcion: FND-00010
  * Fecha: 15-10-2018
  * Descripcion: Metodo para obtener los Datos de las Organizaciones
  * Objetivo: datos de las Organizaciones
  * Params: { }
  ****************************************************************************/
  getAllOrganizaciones(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('organizacionesGroup', 4), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00010

  /****************************************************************************
  * Funcion: FND-00011
  * Fecha: 20-10-2018
  * Descripcion: Metodo para obtener los Datos de las Organizaciones
  * Objetivo: datos de las Organizaciones
  * Params: {idTipoOrganizacion}/{idPais}
  ****************************************************************************/
  getIdTipoIdPaisOrganizaciones(idTipoOrganizacion: number, idPais: number): Observable<any> {
    // Parametros de la Funcion
    // const tipoOrgSend = idTipoOrganizacion;
    // const paisOrgSend = idPais;
    const paramsSend = idTipoOrganizacion + '/' + idPais;
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('organizacionesGroup', 6) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  }// FIN | FND-00011

}
