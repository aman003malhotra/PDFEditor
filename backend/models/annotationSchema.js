const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
    annotation: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },  
    ann_id:{
        type:String,
        required:true
    }
});


const Annotation = mongoose.model('Annotation', annotationSchema);

module.exports = Annotation;