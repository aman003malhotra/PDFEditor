import React, {useEffect, useState} from 'react'
import fileServices from './services/file-services'
import authServices from './services/auth-services'
const ListPaper = () => {

    const [data, setData] = useState([]);
        
    useEffect(() => {
        fileServices.getfiles(authServices.getCurrentUser().id)
        .then(res => {
            if(res.length != 0){
                const datArr = [];
                for(let i=0;i<res.length;i++){
                    datArr.push(res[i].filename);
                }
                setData([...datArr]);
            }
        })
    }, []);
  return (
    <div style={{textAlign:'center'}}>
        <p>{(data.length == 0) && 'There are not Pdfs uploaded'}</p>

        <ul>
            {
                data.map(onData => {
                    <li>{onData}</li>
                })
            }
        </ul>
    </div>
  )
}

export default ListPaper