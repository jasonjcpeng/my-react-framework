import * as Fetch from './fetch'
import {isOnline} from '../config/config'
import axios from 'axios'
/*
 * 整合包装异步获取数据的方法，最终返回一个Promise
 * @param
 * api:string api
 * callBack:function 解析返回对象的回调函数，回调参数有(data,resolve,reject)
 *           data:JSON 数据对象
 *           resolve:Promise中的resolve
 *           reject:Promise中的reject
 * args:obj 请求参数
 * method:HTTP method
 * @return
 * promise:Promise
 * */
const createFetchPromise = (api, callBack, args = '', method = 'GET')=> {
    let finalArgs = args
    if(!isOnline){
        finalArgs = ''
    }
    return new Promise((resolve, reject)=> {
        Fetch.Fetch(api, finalArgs, method).then(
            res=> {
                if(res){
                    if (Number.parseInt(res.state) === 1) {
                        callBack(res.data, resolve, reject)
                    }else{
                        if(res.message){
                            reject(res.message)
                        }
                    }
                }else{
                    reject('来自API返回值的错误！请联系管理员')
                }
            }
        ).catch(
            rej=> {
                reject(rej)
            }
        )
    })
}
const api = {
    getData(){
        return axios.get('/data',{dataType:'json'});
    }

}

export const testForGetContent = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(['I am Async Content','First Line','Second Line','John'])
        },3000)
    })
}


export default api;