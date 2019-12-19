import {HTTP} from 'utils/http.js';
import config from 'utils/config.js';

class ListModel extends HTTP {
  getListDatas(cityId, field) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          cityId,
          field
        },
        success(data) {
          resolve({
            data,
            status: 0
          });
        },
        error(err) {
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
  ListModel
};
