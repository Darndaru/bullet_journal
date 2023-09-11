import {$host} from "./index";

export const registration = async (email, password) => {
  return await $host.post('api/user/register',
    {email, password})
}

export const login = async (email, password) => {
  const response = await $host.post('api/user/login',
    {email, password})
  return response
}

export const check = async () => {
  const response = await $host.post('api/user/register')
  return response
}