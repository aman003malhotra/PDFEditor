import React, {useEffect, useState} from 'react'
import fileServices from './services/file-services'
import authServices from './services/auth-services'
import './ListPaper.css'
import { AiTwotoneDelete } from 'react-icons/Ai';
import { GiExitDoor } from 'react-icons/gi';

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
    
    const handleOpen = (filename) => {
        localStorage.setItem('selected_pdf', filename);
        window.location.href = '/addPdf';
        return false;
    }

    const handleDelete = (filename) => {
        fileServices.deleteFile(filename)
        .then(res => {
            localStorage.removeItem('selected_pdf')
            window.location.reload();
            return false;
        })
    }
  return (
    <>
    
    <div className="box1">
    <p>{(data.length == 0) && 'There are not Pdfs uploaded'}</p>
        {pdfData &&
            pdfData.map(oneData => (
                <div key={oneData._id}>
                <div className="boxes" >
                    <img src="./file-svg.png" alt="" />
                    <h5>{oneData.filename.replace(/^[^_]*_/, "")}</h5>
                    <div className="btn">
                    <button onClick={() => handleOpen(oneData.filename)}><GiExitDoor/><span className='svg-open'> Open</span></button>
                    <button onClick={() => handleDelete(oneData.filename)}><AiTwotoneDelete/><span className='svg-open'>Delete</span></button>
                    </div>
                </div>
                {/* <li key={oneData._id}>{oneData.filename.replace(/^[^_]*_/, "")}</li> */}
                </div>
            ))
        }
      </div>
      </>
  )
}

export default ListPaper