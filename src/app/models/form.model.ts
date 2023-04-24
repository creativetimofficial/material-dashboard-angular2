export interface Form {
    id: string
    name: string
    description: string
    sections: Section[]
    configuration: Configuration
  }
  
  export interface Section {
    id: string
    name: string
    description: string
    fields: Field[]
  }
  
  export interface Field {
    id: string
    name: string
    type: string
    options: any[]
    isRequired: boolean
    value: any
  }
  
  export interface Configuration {
    stages: Stage[]
  }
  
  export interface Stage {
    configuration: Configuration2
    name: string
    complete: boolean
  }
  
  export interface Configuration2 {
    headerImageUrl: string
    active: boolean
  }