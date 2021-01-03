export type loginRespType = {
  isLogged: string
}

export type userType = {
  id?: number
  login: string
  password: string
}

type victimFieldsType = {
  gender: number
  user_id: number
  is_complete: number
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