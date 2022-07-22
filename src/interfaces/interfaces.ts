export interface Table {
    create_date: string
    modify_date: string,
    schema_name: string,
    table_name: string
}


export interface db {
    dbName: string,
    tables: Table[]
}

export type dbs = db[]

export interface CurrentConfigContextInterface {
    currentConfig: CurrentConfig | null,
    setCurrentConfig: React.Dispatch<React.SetStateAction<CurrentConfig | null>>
}

export interface CurrentTableContextInterface {
    currentTable: {}[] | null,
    setCurrentTable: React.Dispatch<React.SetStateAction<{}[] | null>>
}

export interface CurrentConfig {
    user: string,
    password: string,
    server: string,
    database: string
}

export interface WorkSpaceProps {
    changeModalState: any
    currentTable: {}[] | null
}

export interface ModalProps {
    children: React.ReactElement | React.ReactElement[]
}
export interface FormProps {
    className?: string,
    setModal: any,
    setDataBases: React.Dispatch<React.SetStateAction<dbs | null>>
    setCurrentConfig: React.Dispatch<React.SetStateAction<CurrentConfig | null>>
}

export interface ConnectionForm {
    user: string,
    server: string,
    password: string,
    database: string
}



