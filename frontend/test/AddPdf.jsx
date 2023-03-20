import React from 'react'

const AddPdf = () => {
  return (
    <div className="wrap">
        <div className="box">
            <form>
                <h2>Add Your new Pdf</h2>
                <div className="inputBox">
                    <input type="file" required="required" id='pdffile' accept="application/pdf"/>
                    <i></i>
                    </div>
                <input type="submit" value="Upload Pdf"/>
            </form>
        </div>
    </div>
  )
}

export default AddPdf