import { API_URL } from './config'

export function apiRequest(url: string, method = 'GET', payload = {}): Promise<any> {
  const params: any = {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload)
  }

  if(method === 'GET') {
    delete params.body
  }

  return fetch(API_URL + url, params)
}