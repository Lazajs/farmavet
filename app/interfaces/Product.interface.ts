export type IProvider = string

export type IType = string

export interface IProduct {
  _id: string,
  ARTICULO: string,
  CODIGO: string
  PROVEEDOR: IProvider
  TIPO: IType
  IMAGE?: string
}
