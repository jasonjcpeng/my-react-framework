/**
 *
 * Created by pengjingcheng on 2017/7/6.
 */
 const HOC = (args)=>{
     return (component)=>{
         class newComponent extends component{}
         for(let i in args){
                 newComponent.prototype[i] = args[i]
         }
         return newComponent
     }
 }
export default HOC