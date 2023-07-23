import React, { useState } from 'react';
import BabyForm from './BabyForm';
import BabyInventoryForm from './BabyInventoryForm';

const BabyDetailsPage = () => {
  // State to manage baby data and inventory data
  const [babyData, setBabyData] = useState(null);
  const [inventoryData, setInventoryData] = useState([]);

  // Event handler to add a new baby
  const handleAddBaby = (babyData) => {
    setBabyData(babyData);
  };

  // Event handler to edit a baby's information
  const handleEditBaby = (updatedData) => {
    setBabyData({ ...babyData, ...updatedData });
  };

  // Event handler to add/edit inventory for a baby
  const handleInventorySubmit = (inventoryData) => {
    // Check if the inventoryData already exists for the baby
    const existingInventory = babyData?.inventory || [];

    // If the inventoryData has an id, it means it's an edit operation
    if (inventoryData.id) {
      const updatedInventory = existingInventory.map((item) =>
        item.id === inventoryData.id ? { ...item, ...inventoryData } : item
      );
      setBabyData({ ...babyData, inventory: updatedInventory });
    } else {
      // If inventoryData doesn't have an id, it's a new item to be added
      setBabyData({ ...babyData, inventory: [...existingInventory, inventoryData] });
    }
  };

  // Event handler to delete an inventory item for a baby
  const handleDeleteInventory = (itemId) => {
    const updatedInventory = babyData?.inventory?.filter((item) => item.id !== itemId) || [];
    setBabyData({ ...babyData, inventory: updatedInventory });
  };

  return (
    <div>
      <h1>Baby Details Page</h1>
      <h2>Baby Information</h2>
      <BabyForm babyData={babyData} onAddBaby={handleAddBaby} onEditBaby={handleEditBaby} />

      {babyData && (
        <React.Fragment>
          <hr />
          <h2>Baby Inventory</h2>
          <BabyInventoryForm
            babyInventory={babyData.inventory || []}
            onSubmit={handleInventorySubmit}
            onDelete={handleDeleteInventory}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default BabyDetailsPage;
