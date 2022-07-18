import React, { useState } from "react";
import { Form } from "./components/Form";
import { LeftBar } from "./components/LeftBar";
import { Modal } from "./components/Modal";
import { WorkSpace } from "./components/WorkSpace";

export default () => {
  const [modal, setModal] = useState<boolean>(false);
  function changeModalState(e:React.FormEvent){
    e.preventDefault();
    setModal(!modal);
  }
  return (
    <>
      <LeftBar />
      <WorkSpace changeModalState={changeModalState}/>
      {
        modal && 
        <Modal>
            <Form changeModalState={changeModalState}/>
        </Modal>
      }
    </>
  );
}