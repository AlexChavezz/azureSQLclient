import React, { useState } from "react";
import { Form } from "./components/Form";
import { LeftBar } from "./components/LeftBar";
import { Modal } from "./components/Modal";
import { WorkSpace } from "./components/WorkSpace";

export interface db {
  dbName: string,
  tables: {
    create_date: string
    modify_date: string,
    schema_name: string,
    table_name: string
  
  }[]
}

export type dbs = db[]

export interface currentConfig {
  user: string,
  password: string,
  server: string,
  database: string
}

export default () => {
  const [modal, setModal] = useState<boolean>(false);
  const [dataBases, setDataBases] = useState<dbs | null>(null);
  const [currentConfig, setCurrentConfig] = useState<currentConfig | null>(null);
  function changeModalState(e: React.FormEvent) {
    e.preventDefault();
    setModal(!modal);
  }
  return (
    <>
      <LeftBar dataBases={dataBases} currentConfig={currentConfig}/>
      <WorkSpace changeModalState={changeModalState} />
      {
        modal &&
        <Modal>
          <Form
            setModal={setModal}
            setDataBases={setDataBases}
            setCurrentConfig={setCurrentConfig}
          />
        </Modal>
      }
    </>
  );
}