"use client"
import React, { useState } from 'react';
import './Dashboard.css';

const DashboardPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Green Valley High School',
    address: '123 Education Lane, Knowledge City',
    contact: 'contact@greenvalley.edu | +91 9876543210',
    district: 'Boya',
    state: 'UP',
    affiliation_no: '234322342',
    email: 'sometion@email.com',
    phone_no: '2321312312',
    landline: '234-23423',
    typeofschool: 'Public',
    isATL: true,
    isTinker: false,
    isPMShri: true,
    isprevious: false,
    isverified: false,
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
    setIsEditing(false);
    console.log('Form Data Updated:', formData);
  };

  return (
    <div className='main-bar'>
    <div className="dashboard-container">
      <div className="card-container">
        <div className="card-header">
          <h5>School Details</h5>
        </div>
        <div className="card-body">
          {!isEditing ? (
            <>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Contact:</strong> {formData.contact}</p>
              <p><strong>District:</strong> {formData.district}</p>
              <p><strong>State:</strong> {formData.state}</p>
              <p><strong>Affiliation No:</strong> {formData.affiliation_no}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone No:</strong> {formData.phone_no}</p>
              <p><strong>Landline:</strong> {formData.landline}</p>
              <p><strong>Type of School:</strong> {formData.typeofschool}</p>
              <p><strong>ATL Lab:</strong> {formData.isATL ? 'Yes' : 'No'}</p>
              <p><strong>Tinker Lab:</strong> {formData.isTinker ? 'Yes' : 'No'}</p>
              <p><strong>PM Shri School:</strong> {formData.isPMShri ? 'Yes' : 'No'}</p>
              <p><strong>Previous Interaction:</strong> {formData.isprevious ? 'Yes' : 'No'}</p>
              <p><strong>Verified:</strong> {formData.isverified ? 'Yes' : 'No'}</p>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="School Name" required />
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
              <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Email" required />
              <input name="district" value={formData.district} onChange={handleChange} placeholder="District" required />
              <input name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
              <input name="affiliation_no" value={formData.affiliation_no} onChange={handleChange} placeholder="Affiliation No." required />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="School Email" required />
              <input name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="School Phone" required />
              <input name="landline" value={formData.landline} onChange={handleChange} placeholder="Landline (Optional)" />
              <select name="typeofschool" value={formData.typeofschool} onChange={handleChange}>
                <option value="public">Public</option>
                <option value="gov">Government</option>
                <option value="private">Private</option>
                <option value="founded">Founded</option>
                <option value="other">Other</option>
              </select>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="isATL" checked={formData.isATL} onChange={handleChange} />
                  ATL Lab
                </label>
                <label>
                  <input type="checkbox" name="isTinker" checked={formData.isTinker} onChange={handleChange} />
                  Tinker Lab
                </label>
                <label>
                  <input type="checkbox" name="isPMShri" checked={formData.isPMShri} onChange={handleChange} />
                  PM Shri School
                </label>
                <label>
                  <input type="checkbox" name="isprevious" checked={formData.isprevious} onChange={handleChange} />
                  Previous Interaction
                </label>
                <label>
                  <input type="checkbox" name="isverified" checked={formData.isverified} onChange={handleChange} />
                  Verified
                </label>
              </div>
              <button type="submit" className="btn-primary">Save Changes</button>
            </form>
          )}
          <button className="btn-secondary" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Details'}
          </button>
        </div>
      </div>

      {/* Scheduled Slot Section */}
      <div className="card-container">
        <div className="card-header">
          <h5>Scheduled Slot</h5>
        </div>
        <div className="card-body">
          <p><strong>Date:</strong> 2023-11-10</p>
          <p><strong>From:</strong> 10:00 AM</p>
          <p><strong>To:</strong> 12:00 PM</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
