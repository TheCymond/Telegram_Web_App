import { useState, useEffect } from "react";
import { Modal, TextInput, Label, Checkbox, Button } from 'flowbite-react';

export function EditItem({ eItem, onSave, onDelete }) {
  const [item, setItem] = useState(
    {
      "id": "",
      "itemName": "",
      "unitPrice": 0,
      "quantity": 0,
      "amount": 0
    }
  )

  const [rememberUnitPrice, setRememberUnitPrice] = useState(true)


  useEffect(() => {
    setItem(eItem)
  }, []);

  const [isShown, setShow] = useState(false)
  const onClick = () => {
    setShow(true)
  }
  const onClose = () => {
    setShow(false)
  }

  const onValueChange = (e) => {
    console.info("Value change" + e.target.value + " fieldid" + e.target.id)

    const nexItem = {
      ...item,
      [e.target.id]: e.target.value,
    }
    const nexxItem = {
      ...nexItem,
      amount: nexItem.quantity * nexItem.unitPrice
    }
    setItem(nexxItem)
  }

  const onRemberForLaterUseChange = (e) => {
    console.info("Remember changed to %s", e.target.checked)
    setRememberUnitPrice(e.target.checked)
  }

  const saveItem = (e) => {
    setShow(false)
    setItem({
      ...item,
      amount: item.quantity * item.unitPrice
    })
    onSave(item)
  }

  const deleteItem = (e) => {
    setShow(false)
    setItem({
      ...item,
      amount: item.quantity * item.unitPrice
    })
    onDelete(item)
  }
  

  return (
    <div>
      <Button onClick={onClick}>
        Edit
      </Button>
      <Modal
        show={isShown}
        size="md"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="itemName"
                  value="Item Name"
                />
              </div>
              <TextInput
                id="itemName"
                placeholder="Bungalow"
                required={true}
                value={item.itemName}
                onChange={onValueChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="unitPrice"
                  value="Unit Price"
                />
              </div>

              <TextInput
                id="unitPrice"
                placeholder="100000"
                type="number"
                step={5000}
                required={true}
                value={item.unitPrice}
                onChange={onValueChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="quantity"
                  value="Quantity"
                />
              </div>
              <div className="flex">
              <TextInput
                id="quantity"
                type="number"
                placeholder="1"
                required={true}
                value={item.quantity}
                onChange={onValueChange}
              /><Button className="ml-3 bg-slate-200 text-black">+</Button>
              <Button className="ml-3 bg-slate-200 text-black">-</Button>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="amount"
                  value="Amount"
                />
              </div>
              <TextInput
                id="amount"
                placeholder="1"
                required={true}
                value={item.amount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}
                readOnly={true}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" checked={rememberUnitPrice} onChange={onRemberForLaterUseChange} />
                <Label htmlFor="remember">
                  Remember the unit price for later use
                </Label>
              </div>
            </div>
            <div className="w-full flex">
              <Button onClick={saveItem} className="mx-2">
                Save
              </Button>
              <Button onClick={deleteItem} className="mx-2">
                Delete
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
