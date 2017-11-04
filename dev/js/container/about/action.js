/**
 * Created by pengjingcheng on 2017/7/10.
 */
import api from 'api';

api.getData().then(res=>{
  console.log(res.data.data)
})