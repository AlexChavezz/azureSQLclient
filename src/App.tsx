import React, { useState } from "react";
import { Form } from "./components/Form";
import { LeftBar } from "./components/LeftBar";
import { Modal } from "./components/Modal";
import { WorkSpace } from "./components/WorkSpace";
import { CurrentConfigContext } from "./context/CurrentConfigContext";
import { CurrentTableContext } from "./context/CurrentTableContext";
import { CurrentConfig, dbs } from "./interfaces/interfaces";

export default () => {
  const [modal, setModal] = useState<boolean>(false);
  const [dataBases, setDataBases] = useState<dbs | null>(null);
  const [currentConfig, setCurrentConfig] = useState<CurrentConfig | null>(null);
  const [currentTable, setCurrentTable] = useState<{}[] | null>(null);

  function changeModalState(e: React.FormEvent) {
    e.preventDefault();
    setModal(!modal);
  }
  return (
    <CurrentTableContext.Provider value={{
      currentTable,
      setCurrentTable
    }}>
    <CurrentConfigContext.Provider value={{
      currentConfig,
      setCurrentConfig
    }}>
      <LeftBar 
        dataBases={dataBases} 
      />
      <WorkSpace 
        changeModalState={changeModalState} 
        currentTable={currentTable}
      />
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
    </CurrentConfigContext.Provider>
    </CurrentTableContext.Provider>
  );
}