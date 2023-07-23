import React, { useState } from 'react';

const BabyInventoryForm = ({ onSubmit }) => {
  const [inventoryData, setInventoryData] = useState({
    branch: '',
    size: '',
    colors: [],
    photo: null,
    fabricType: '',
    season: '',
    clothType: '',
    clothMeasures: '',
  });

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    const selectedColors = Array.from(e.target.selectedOptions, (option) => option.value);
    setInventoryData((prevData) => ({
      ...prevData,
      colors: selectedColors,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setInventoryData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const addComment = () => {
    if (commentText.trim() !== '') {
      setComments((prevComments) => [...prevComments, commentText.trim()]);
      setCommentText('');
    }
  };

  const deleteComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...inventoryData, comments });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Branch:
        <input
          type="text"
          name="branch"
          value={inventoryData.branch}
          onChange={handleChange}
        />
      </label>
      <label>
        Size:
        <input
          type="text"
          name="size"
          value={inventoryData.size}
          onChange={handleChange}
        />
      </label>
      <label>
        Colors (Select multiple):
        <select
          name="colors"
          multiple
          value={inventoryData.colors}
          onChange={handleColorChange}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          {/* Add more color options as needed */}
        </select>
      </label>
      <label>
        Photo:
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </label>
      <label>
        Fabric Type:
        <input
          type="text"
          name="fabricType"
          value={inventoryData.fabricType}
          onChange={handleChange}
        />
      </label>
      <label>
        Season:
        <input
          type="text"
          name="season"
          value={inventoryData.season}
          onChange={handleChange}
        />
      </label>
      <label>
        Cloth Type:
        <input
          type="text"
          name="clothType"
          value={inventoryData.clothType}
          onChange={handleChange}
        />
      </label>
      <label>
        Cloth Measures:
        <input
          type="text"
          name="clothMeasures"
          value={inventoryData.clothMeasures}
          onChange={handleChange}
        />
      </label>
      <div>
        <h3>Comments:</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment}</p>
            <button type="button" onClick={() => deleteComment(index)}>
              Delete
            </button>
          </div>
        ))}
        <input
          type="text"
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button type="button" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <button type="submit">Add to Inventory</button>
    </form>
  );
};

export default BabyInventoryForm;
