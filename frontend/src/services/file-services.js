import axios from "axios";

const API_URL = "https://pdf-editor-b9xt.onrender.com/";

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

  deleteFile(filename){
    return axios
      .post(API_URL + "file-delete", {filename})
      .then(res => {
        return res;
      })
      }

  
}

export default new FileService();