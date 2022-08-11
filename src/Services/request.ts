import axios from "axios"
import { BASE_URL } from "../Constants/Url"

export const getList = async (dataList:any, breend:string) => {
  try {
    const token:any = {headers:{Authorization: localStorage.getItem("token")}}
    await axios.get(`${BASE_URL}/list?breed=${breend}`, token)
      .then((res) => {
        dataList(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
    
  } catch (error) {
    
  }
}