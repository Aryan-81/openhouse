'use client';

import { useState } from 'react';
import './SchoolForm.css'; // Import the global CSS file

const SchoolForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactEmail: '',
    contactPhone: '',
    district: '',
    state: '',
    affiliationNo: '',
    email: '',
    phone: '',
    landline: '',
    type: 'public',
    atlLab: false,
    tinkerLab: false,
    pmShriSchool: false,
    previousInteraction: false,
    verified: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='main-body'>
    <div className="school-form-container">
      <h2>School Information Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="School Name" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} placeholder="Contact Email" type="email" required />
        <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="Contact Phone" required />
        <input name="district" value={formData.district} onChange={handleChange} placeholder="District" required />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
        <input name="affiliationNo" value={formData.affiliationNo} onChange={handleChange} placeholder="Affiliation No." required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="School Email" type="email" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="School Phone" required />
        <input name="landline" value={formData.landline} onChange={handleChange} placeholder="Landline (Optional)" />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="public">Public</option>
          <option value="gov">Government</option>
          <option value="private">Private</option>
          <option value="founded">Founded</option>
          <option value="other">Other</option>
        </select>

        <div className="checkbox-group">
          {[{ label: 'ATL Lab', name: 'atlLab' },
            { label: 'Tinker Lab', name: 'tinkerLab' },
            { label: 'PM Shri School', name: 'pmShriSchool' },
            { label: 'Previous Interaction', name: 'previousInteraction' },
            { label: 'Verified', name: 'verified' }
          ].map((field) => (
            <label key={field.name}>
              <input type="checkbox" name={field.name} checked={!!formData[field.name as keyof typeof formData]} onChange={handleChange} />
              {field.label}
            </label>
          ))}
        </div>

        <button type="submit" disabled={!formData.name || !formData.contactEmail || !formData.contactPhone}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default SchoolForm;