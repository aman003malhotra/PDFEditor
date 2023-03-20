import React, {useEffect, useState} from 'react'
import fileServices from './services/file-services'
import authServices from './services/auth-services'
const ListPaper = () => {

    const [data, setData] = useState([]);
    const [pdfData, setPdfData] = useState();
        
    useEffect(() => {
        fileServices.getfiles(authServices.getCurrentUser().id)
        .then(res => {
            if(res.length != 0){
                setPdfData(res);
                const datArr = [];
                for(let i=0;i<res.length;i++){
                    datArr.push(res[i].filename);
                }
                setData([...datArr]);
            }
        })
    }, []);
    console.log(pdfData);
    localStorage.setItem('selected_pdf', 'compressed.tracemonkey-pldi-09');
  return (
    <div style={{textAlign:'center'}}>
        <p>{(data.length == 0) && 'There are not Pdfs uploaded'}</p>

        {pdfData &&
            pdfData.map(oneData => (
                <li key={oneData._id}>{oneData.filename.replace(/^[^_]*_/, "")}</li>
            ))
        }
    </div>
  )
}

export default ListPaper