/** A minimal local annotation store **/
import annotationService from "../services/annotation-service";
export default class AnnotationStore {

  constructor() {
    this._annotations = [];
  }

  setAnnotations(annotations) {
    this._annotations = annotations;
  }

  createAnnotation(annotation) {
    let id = annotation.id;
    let filename = localStorage.getItem('selected_pdf') + ".pdf";
    let string_annotation = JSON.stringify(annotation);
    annotationService.add(string_annotation,id,filename)
    .then(res => {
      return res;
    });
    this._annotations.push(annotation);
  }

  updateAnnotation(updated, previous) {
    let updated_annotation = JSON.stringify(updated);
    annotationService.updateAnno(previous.id, updated_annotation)
    .then(res => {
      this._annotations = this._annotations.map(a => 
        a.id === previous.id ? updated : a);
      });
  }

  deleteAnnotation(annotation) {
    annotationService.deleteAnno(annotation.id)
    .then(res => {
      this._annotations = this._annotations.filter(a => 
        a.id !== annotation.id);
    })
    
  }

  getAnnotations(pageNumber) {
    // Text annotations on this page
    const isOnPage = annotation => {
      if (annotation.target.selector) {
        const selectors = Array.isArray(annotation.target.selector) ? 
          annotation.target.selector : [ annotation.target.selector ];

        const selectorWithPage = selectors.find(s => s.page); 
        return selectorWithPage?.page == pageNumber;
      }
    };

    const annotationsOnPage = this._annotations.filter(isOnPage);

    // Relations linked to the given annotations
    const ids = new Set(annotationsOnPage.map(a => a.id));
    const linkedRelations = this._annotations
      .filter(a => !a.target.selector) // all relations
      .filter(a => {
        const from = a.target[0].id;
        const to = a.target[1].id;

        return ids.has(from) || ids.has(to);
      });

    return [...annotationsOnPage, ...linkedRelations ];
  }

}