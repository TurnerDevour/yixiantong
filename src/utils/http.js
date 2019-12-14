import axios from 'axios';
import qs from 'qs';

class HTTP {
  axiosPost(options) {
    axios({
      url: options.url,
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded'
      },
      data: qs.stringify(options.data),
    }).then((res) => {
      options.success(res);
    }).catch((err) => {
      options.error(err);
    });
  }
}

export default {
  HTTP
};
