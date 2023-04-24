export interface FormResponse {
    formId: string
    sections: Sections
  }
  
  export interface Sections {
    [key: string]: FieldMap
  }
  
  export interface FieldMap {
    fields: Fields
  }
  
  export interface Fields {
    [key: string]: string[]
  }