import axios from "axios";

export const API_URL = "https://pdf-editor-b3zz.onrender.com/";

class AnnotService {
  add(annotation, id, filename) {
    return axios
      .post(API_URL + "add_annotation", {
        annotation,
        id, 
        filename
      })
      .then(response => {
        return response.data;
      }).catch(err=>{
        console.log(err);
      })
  }

  getAll(filename){
    return axios
        .get(API_URL + `get_all_annotation/${filename}`)
        .then(res => {
            return res.data;
        })
  }

  deleteAnno(id){
    return axios
        .post(API_URL + "delete_annotation", {
            id
        })
        .then(res => {
            return res;
        })
  }

  updateAnno(id, updated){
    return axios
        .post(API_URL + "update_annotation", {
            id,
            updated
        })
        .then(res => {
            return res;
        })
  }

}


export default new AnnotService();