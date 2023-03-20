import React, { useState } from 'react'
import axios from "axios";
import authServices from './services/auth-services';
const AddPdf = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [loaded, setLoaded] = useState(0);

    const handleUpload = (event) => {
        event.preventDefault();
        const data = new FormData()
        data.append('pdfFile', selectedFile, selectedFile.name);
        data.append('user_id', authServices.getCurrentUser().id);
        axios
        .post("http://localhost:5000/file-upload", data, {
            onUploadProgress: ProgressEvent => {
                setLoaded(ProgressEvent.loaded / ProgressEvent.total*100);
            },
        })
        .then(res => {
            console.log(res.statusText)
        })    
    }

    const handleSelectedFile = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    return (
    <div className="wrap">
        <div className="box">
            <form onSubmit={handleUpload} encType="multipart/form-data">
                <h2>Add Your new Pdf</h2>
                <div className="inputBox">
                    <input type="file" required="required" id='pdffile' name="pdfFile" accept="application/pdf" onChange={handleSelectedFile}/>
                    <i></i>
                    </div>
                <input type="submit" value="Upload Pdf"/>
                {(loaded != 0) && <div> {Math.round(loaded,2) } %</div>}
            </form>
        </div>
    </div>
    )
}

export default AddPdf