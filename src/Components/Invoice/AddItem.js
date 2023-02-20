import { useState, useEffect } from "react";
import { Modal, ListGroup, Button } from 'flowbite-react';
import { getItemList } from "../../db/invoice";

export function AddItem({fncAddItem}) {

  const [isShown, setShow] = useState(false)
  const onClick = () => {
    setShow(true)
  }
  const onClose = () => {
    setShow(false)
  }

  const items = getItemList()

  useEffect(() => {
  }, []);

  const handleItemSelection = (e) => {
    console.log(e)
    console.info("Selected Item: %s ", e.target.value)
    let selectedItem = items.find((i)=>i.id==e.target.value)
    console.log(selectedItem)
    fncAddItem(selectedItem)
    onClose()
  }

  return (
    <div>
      <Button onClick={onClick}>
        Add Item
      </Button>
      <Modal
        show={isShown}
        size="md"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="w-11/12">
          <ListGroup>
              {
                items.map((room) => {
                  return (
                    <ListGroup.Item key={room.id} onClick={handleItemSelection} value={room.id}>
                      {room.name + " - " + room.price}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
            {/* <div>
              {
                Object.entries(itemByGroup).map((key, value) => {
                  return (
                    <div>
                      <div class="uppercase text-xs font-bold pb-1">{key}</div>
                    </div>
                  )
                })
              }
            </div> */}
            {/* <div class="uppercase text-xs font-bold pb-1">Room List</div>
            <ListGroup>
              {
                rooms.map((room) => {
                  return (
                    <ListGroup.Item key={room.id} onClick={handleItemSelection} value={room.id}>
                      {room.name + " - " + room.price}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>

            <div class="uppercase text-xs font-bold pt-4 pb-1">Food</div>
            <ListGroup>
              {
                foods.map((food) => {
                  return (
                    <ListGroup.Item key={food.id} onClick={handleItemSelection}>
                      {food.name + " - " + food.price}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>

            <div class="uppercase text-xs font-bold pt-4 pb-1">Tour</div>
            <ListGroup>
              {
                tours.map((tour) => {
                  return (
                    <ListGroup.Item key={tour.id} onClick={handleItemSelection}>
                      {tour.name + " - " + tour.price}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
