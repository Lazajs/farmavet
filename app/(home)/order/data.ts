const BRAZIL_STATES = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]

const ARGENTINA_PROVINCES = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán'
]

const PARAGUAY_DEPARTMENTS = [
  'Concepción',
  'San Pedro',
  'Cordillera',
  'Guairá',
  'Caaguazú',
  'Caazapá',
  'Itapúa',
  'Misiones',
  'Paraguarí',
  'Alto Paraná',
  'Central',
  'Ñeembucú',
  'Amambay',
  'Canindeyú',
  'Presidente Hayes',
  'Alto Paraguay',
  'Boquerón'
]

const URUGUAY_DEPARTMENTS = [
  'Artigas',
  'Canelones',
  'Cerro Largo',
  'Colonia',
  'Durazno',
  'Flores',
  'Florida',
  'Lavalleja',
  'Maldonado',
  'Montevideo',
  'Paysandú',
  'Río Negro',
  'Rivera',
  'Rocha',
  'Salto',
  'San José',
  'Soriano',
  'Tacuarembó',
  'Treinta y Tres'
]

const CHILE_REGIONS = [
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  "Región del Libertador General Bernardo O'Higgins",
  'Región del Maule',
  'Región del Biobío',
  'Región de la Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región Aysén del General Carlos Ibáñez del Campo',
  'Región de Magallanes y de la Antártica Chilena',
  'Región Metropolitana de Santiago'
]

const BOLIVIA_DEPARTMENTS = [
  'Beni',
  'Chuquisaca',
  'Cochabamba',
  'La Paz',
  'Oruro',
  'Pando',
  'Potosí',
  'Santa Cruz',
  'Tarija'
]

export const ALL_DATA: Record<string, string[]> = {
  Argentina: ARGENTINA_PROVINCES,
  Bolivia: BOLIVIA_DEPARTMENTS,
  Brasil: BRAZIL_STATES,
  Paraguay: PARAGUAY_DEPARTMENTS,
  Uruguay: URUGUAY_DEPARTMENTS,
  Chile: CHILE_REGIONS
}
