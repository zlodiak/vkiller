export type loginRespType = {
  isLogged: string
}

export type userType = {
  id?: number
  login: string
  password: string
}

export type victimFieldsType = {
  gender: number | string
  user_id: number
  is_complete: number| string
  firstname: string
  lastname: string
  address: string
  birthdate: string
  created_date: string
}

export type victimType = {
  pk: number
  model: string
  fields: victimFieldsType
}