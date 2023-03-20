import axios from "axios";

const API_URL = "http://localhost:5000/";

class FileService {
  getfiles(user_id) {
    return axios
      .get(API_URL + `allfiles/${user_id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  addNewFile(data){
    return axios
      .post(API_URL + "file-upload", data)
      .then(res => {
          return res;
      }) 
  }



  
}

export default new FileService();