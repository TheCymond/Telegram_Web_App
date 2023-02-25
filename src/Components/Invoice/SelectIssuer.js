import { useState, useEffect } from "react";
import { Modal, ListGroup, TextInput } from 'flowbite-react';
import { getIssuers } from "../../db/invoice";

export const SelectIssuer = ({ is, fncChangeIssuer }) => {

  const [isShown, setShow] = useState(false)
  const onClick = () => {
    setShow(true)
  }
  const onClose = () => {
    setShow(false)
  }

  const members = getIssuers()

  const [iss, setIss] = useState({ issuerId: "", issuer: "" })

  useEffect(() => {
    setIss(is)
  }, [is]);

  const handleItemSelection = (e) => {
    console.log(e)
    console.info("Selected Issuer: %s ", e.target.value)
    let selectedItem = members.find((i) => i.issuerId === e.target.value)
    console.log(selectedItem)
    fncChangeIssuer(selectedItem)
    setIss(selectedItem)
    onClose()
  }

  return (
    <div>
      <TextInput
        id="issuer"
        placeholder="Liễu Lê"
        required={true}
        value={iss.issuer}
        readOnly={true}
        onClick={onClick}
      />
      <Modal
        show={isShown}
        size="md"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header ><span>Select the issuer</span></Modal.Header>
        <Modal.Body>
          <div className="w-11/12">

            <ListGroup>
              {
                members.map((mem) => {
                  return (
                    <ListGroup.Item key={mem.issuerId} onClick={handleItemSelection} value={mem.issuerId}>
                      {mem.issuer}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
