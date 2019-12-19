import { HTTP } from 'utils/http.js';
import config from 'utils/config.js';

class IndexModel extends HTTP {
  getHomeDatas(cityId) {
       return new Promise((resolve, reject) => {
         this.axiosPost({
           url:config.API.GET_HOME_DATAS,
           data: {
             cityId
           },
           success(data){
               resolve({
                 data,
                 status: 0
               });
           },
           error(err){
             resolve({
               error,
               status: -1
             });
           }
         });
       });
  }
}

export {
  IndexModel
};
