import React, { useState } from 'react';
import BabyForm from './BabyForm';
import BabyInventoryForm from './BabyInventoryForm';
import InventoryForm from './InventoryForm';

const BabyInventoryApp = () => {
  // State to manage baby data and inventory data
  const [babyDataList, setBabyDataList] = useState([]);
  const [currentBabyId, setCurrentBabyId] = useState(null);
  const [currentInventory, setCurrentInventory] = useState(null);

  // Event handler to add a new baby
  const handleAddBaby = (babyData) => {
    setBabyDataList([...babyDataList, babyData]);
  };

  // Event handler to edit a baby's information
  const handleEditBaby = (id, updatedData) => {
    const updatedList = babyDataList.map((baby) => (baby.id === id ? { ...baby, ...updatedData } : baby));
    setBabyDataList(updatedList);
    setCurrentBabyId(null); // Reset the currentBabyId after editing
  };

  // Event handler to delete a baby
  const handleDeleteBaby = (id) => {
    const filteredList = babyDataList.filter((baby) => baby.id !== id);
    setBabyDataList(filteredList);
  };

  // Event handler to add/edit inventory for a baby
  const handleInventorySubmit = (inventoryData) => {
    if (currentBabyId) {
      // If currentBabyId is set, it means we are editing an existing baby's inventory
      const updatedBabyList = babyDataList.map((baby) => {
        if (baby.id === currentBabyId) {
          return { ...baby, inventory: [...baby.inventory, inventoryData] };
        }
        return baby;
      });
      setBabyDataList(updatedBabyList);
    } else {
      // If currentBabyId is not set, it means we are adding inventory for a new baby
      setCurrentInventory(inventoryData);
    }
  };

  return (
    <div>
      <h1>Baby Inventory App</h1>
      <BabyForm onAddBaby={handleAddBaby} />
      {/* Display the list of babies and their inventory */}
      <div>
        {babyDataList.map((baby) => (
          <div key={baby.id}>
            <h2>{baby.name}</h2>
            <button onClick={() => setCurrentBabyId(baby.id)}>Edit</button>
            <button onClick={() => handleDeleteBaby(baby.id)}>Delete</button>
            {baby.inventory.map((inventory, index) => (
              <div key={index}>
                <p>Size: {inventory.size}</p>
                <p>Type: {inventory.type}</p>
                <p>Total Amount of Cloth: {inventory.totalAmount}</p>
              </div>
            ))}
            {currentBabyId === baby.id && (
              <BabyInventoryForm
                baby={baby}
                onSubmit={handleInventorySubmit}
                onCancel={() => setCurrentBabyId(null)}
              />
            )}
          </div>
        ))}
      </div>
      {/* Display the InventoryForm for adding inventory to a new baby */}
      {currentInventory && (
        <InventoryForm
          onSubmit={(inventoryData) => handleInventorySubmit(inventoryData)}
          onCancel={() => setCurrentInventory(null)}
        />
      )}
    </div>
  );
};

export default BabyInventoryApp;