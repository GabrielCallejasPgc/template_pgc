import { Injectable } from '@angular/core';

// Clase de Propieades Globales de la PGC
@Injectable()
export class ListEndPointsService {

  constructor() { }

  // Listado de los End Point que seran usados en la API ********************************
  // Json de los End Points de la API disponibles
  getEndPoint = {
    endPointEstados: {
      listAllEstados: {
        id: 1,
        nameEndpoint: 'ListAllEstados',
        urlEndPoint: '/estados',
        groupEndPoint: 'estadosGroup',
        descEndPoint: 'Busca todos los Estados de la API',
      },
      listAllEstadosActividades: {
        id: 2,
        nameEndpoint: 'ListAllEstadosActividades',
        urlEndPoint: '/estados/findByIdGrupo/',
        groupEndPoint: 'estadosGroup',
        descEndPoint: 'Busca todos los Estados de la API, que sean de Actividades',
      },
    },
    endPointUsers: {
      findByMail: {
        id: 1,
        nameEndpoint: 'findByMail',
        urlEndPoint: '/usuarios/findByMail/',
        groupEndPoint: 'userGroup',
        descEndPoint: 'Busca el Usuario con el Email, de parametro',
      },
    },
    endPointMantActividades: {
      listAllSectorEjecutor: {
        id: 1,
        nameEndpoint: 'ListAllSectoresEjecutores',
        urlEndPoint: '/mant-actividades/sector-ejecutor',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Sectores Ejecutores de la Actividad',
      },
      getSectorEjecutor: {
        id: 2,
        nameEndpoint: 'getSectorEjecutor',
        urlEndPoint: '/mant-actividades/sector-ejecutor/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Sectores Ejecutor de la Actividad',
      },
      listAllEstrategia: {
        id: 3,
        nameEndpoint: 'ListAllSEstrategia',
        urlEndPoint: '/mant-actividades/estrategia',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Sectores Ejecutores de la Actividad',
      },
      getEstrategia: {
        id: 4,
        nameEndpoint: 'getEstrategia',
        urlEndPoint: '/mant-actividades/estrategia/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Sectores Ejecutor de la Actividad',
      },
      listAllPresupuesto: {
        id: 5,
        nameEndpoint: 'listAllPresupuesto',
        urlEndPoint: '/mant-actividades/presupuesto',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Presupuesto de la Actividad',
      },
      getPresupuesto: {
        id: 6,
        nameEndpoint: 'getPresupuesto',
        urlEndPoint: '/mant-actividades/presupuesto/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Presupuesto de la Actividad',
      },
    },
    endPointEspaciosTrabajo: {
      listAllEspaciosTrabajo: {
        id: 1,
        nameEndpoint: 'ListAllEspaciosTrabajo',
        urlEndPoint: '/espacios-trabajo',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Busca todos los Espacios de Trabajo de la API',
      },
      findByIdEspacioTrabajo: {
        id: 2,
        nameEndpoint: 'findByIdEspacio',
        urlEndPoint: '/espacios-trabajo/findByIdEspacio/',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Busca los espacios de trabajo con el IdEspacioTrabajo, de parametro',
      },
      newEspacioTrabajo: {
        id: 3,
        nameEndpoint: 'newEspacioTrabajo',
        urlEndPoint: '/espacios-trabajo/new',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD',
      },
    },
    endPointEspaciosTrabajoUsuarios: {
      listAllEspaciosTrabajoUsuarios: {
        id: 1,
        nameEndpoint: 'ListAllEspaciosTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Busca todos los Espacios de Trabajo de la API que han sido asignados a los Usuarios',
      },
      findByIdEspacioTrabajoUsuarios: {
        id: 2,
        nameEndpoint: 'FindByIdEspacioTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario/findByIdUsuario/',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Busca los espacios de trabajo asignados al Usuario con el IdUsuario, de parametro',
      },
      newEspacioTrabajoUsuarios: {
        id: 3,
        nameEndpoint: 'NewEspacioTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario/new',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
    },
    endPointOrganizaciones: {
      listAllTipoOrganizaciones: {
        id: 1,
        nameEndpoint: 'ListAllTipoOrganizaciones',
        urlEndPoint: '/tipos-organizaciones',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca todos los Tipos de Organizaciones de la API',
      },
      findByIdTipoOrganizacion: {
        id: 2,
        nameEndpoint: 'FindByIdTipoOrganizacion',
        urlEndPoint: '/tipos-organizaciones/findByIdTipoOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      newTipoOrganizacion: {
        id: 3,
        nameEndpoint: 'NewTipoOrganizacion',
        urlEndPoint: '/espacios-trabajo-usuario/new',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
      listAllOrganizaciones: {
        id: 4,
        nameEndpoint: 'ListAllOrganizaciones',
        urlEndPoint: '/organizaciones',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca todos las Organizaciones de la API',
      },
      findByIdOrganizacion: {
        id: 5,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      findByIdTipoOrganizacionT: {
        id: 5,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdTipoOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      findByIdTipoPaisOrganizacion: {
        id: 6,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdTipoPaisOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el IdTipoOrganizacion, de parametro',
      },
      newOrganizacion: {
        id: 7,
        nameEndpoint: 'NewOrganizacion',
        urlEndPoint: '/organizaciones/new',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Ingresa un nueva Organizacion en la BD asignandolo',
      },
      findByIdPaisOrganizacion: { // 2018-10-20 | NAM
        id: 8,
        nameEndpoint: 'findByIdPaisOrganizacion',
        urlEndPoint: '/organizaciones/findByIdPaisOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el IdPaisOrganizacion, de parametro',
      },
    },
    endPointMantGenericos: {
      listAllPaises: {
        id: 1,
        nameEndpoint: 'ListAllPaises',
        urlEndPoint: '/ubicacion-geografica/pais',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Busca todos los Paises de la API',
      },
      findByIdTipoOrganizacion: {
        id: 2,
        nameEndpoint: 'FindByIdTipoOrganizacion',
        urlEndPoint: '/ubicacion-geografica/pais/',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Busca el Pais con el IdPais, de parametro',
      },
      newTipoOrganizacion: {
        id: 3,
        nameEndpoint: 'NewTipoOrganizacion',
        urlEndPoint: '/espacios-trabajo-usuario/new',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
    },
  };

}
