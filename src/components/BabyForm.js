import React, { useState } from 'react';
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cryptoJS from "crypto-js";

const BabyForm = ({ onSubmit }) => {
  const [babyData, setBabyData] = useState({
    babyName: '',
    babyAge: '',
    babyEmail: '',
    babyHeight: '',
    babyWeight: '',
    LatestPhoto: null,
    babyBirthDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBabyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setBabyData((prevData) => ({
      ...prevData,
      LatestPhoto: file,
    }));
  };

  const handleBirthDateChange = (date) => {
    setBabyData((prevData) => ({
      ...prevData,
      babyBirthDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(babyData);
  };
  
    const handleSubmit = (e) => {
    e.preventDefault();
    let encryptedData = cryptoJS.AES.encrypt(JSON.stringify(baby), 'your-secret-key').toString();
    axios
      .post("/api/babies/", { data: encryptedData })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Baby Name:
        <input
          type="text"
          name="babyName"
          value={babyData.babyName}
          onChange={handleChange}
        />
      </label>
      <label>
        Baby Age:
        <input
          type="number"
          name="babyAge"
          value={babyData.babyAge}
          onChange={handleChange}
        />
      </label>
      <label>
        Baby Email:
        <input
          type="email"
          name="babyEmail"
          value={babyData.babyEmail}
          onChange={handleChange}
        />
      </label>
      <label>
        Baby Height (cm):
        <input
          type="number"
          name="babyHeight"
          value={babyData.babyHeight}
          onChange={handleChange}
        />
      </label>
      <label>
        Baby Weight (kg):
        <input
          type="number"
          name="babyWeight"
          value={babyData.babyWeight}
          onChange={handleChange}
        />
      </label>
      <label>
        Baby Birth Date:
        <DatePicker
          selected={babyData.babyBirthDate}
          onChange={handleBirthDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </label>
      <label>
        Latest Photo:
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BabyForm;
