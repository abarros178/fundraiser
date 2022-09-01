import { useState } from "react"
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'


export const useHttpRequest = (url, method) => {

  const [data, setData] = useState(null)
  const [statusCode, setStatusCode] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingComponent, setLoadingComponent] = useState(true)
  const [message, setMessage] = useState(null)


  const request = {
    GET: (_body) => Axios.get(url),
    POST: (body) => Axios.post(url, body,),
    PUT: (body) => Axios.put(url, body,),
    PATCH: (body) => Axios.patch(url, body),
    DELETE: (_body) => Axios.delete(url)
  }

  const execute = async (body = {}) => {
    try {
      setLoading(true)
      const response = await request[method](body)
      setData(response.data)
      setMessage(response.data.message)
      setError(false)
      setStatusCode(response.status)
      return {
        data: response.data,
        message: response.data.message,
        error: false,
        statusCode: response.status
      }
    } catch (err) {
      const responseError = err
      setData(null)
      setMessage(responseError.response?.data.message ?? null)
      setError(true)
      setStatusCode(responseError.response?.status ?? null)
      return {
        data: null,
        message: responseError.response?.data.message ?? null,
        error: true,
        statusCode: responseError.response?.status ?? null
      }
    } finally {
      setLoading(false)
      setLoadingComponent(false)
    }
  }
  return { data, message, error, statusCode, loading, execute,loadingComponent }
}
