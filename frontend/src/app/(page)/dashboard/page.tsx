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
            <img src="logo.jpg" alt="" className='cardimage' />
            <span className='schoolname'>{formData.name}</span>
          </div>
          <div className="card-body">
            {!isEditing ? (
              <>
                <div className="cardnew">
                  <div className="left">
                    <div className="detail-item">
                      <strong>Address:</strong> <span>{formData.address}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Contact:</strong> <span>{formData.contact}</span>
                    </div>
                    <div className="detail-item">
                      <strong>District:</strong> <span>{formData.district}</span>
                    </div>
                    <div className="detail-item">
                      <strong>State:</strong> <span>{formData.state}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Affiliation No:</strong> <span>{formData.affiliation_no}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Email:</strong> <span>{formData.email}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Phone No:</strong> <span>{formData.phone_no}</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="detail-item">
                      <strong>Landline:</strong> <span>{formData.landline}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Type of School:</strong> <span>{formData.typeofschool}</span>
                    </div>
                    <div className="detail-item">
                      <strong>ATL Lab:</strong> <span>{formData.isATL ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Tinker Lab:</strong> <span>{formData.isTinker ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="detail-item">
                      <strong>PM Shri School:</strong> <span>{formData.isPMShri ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Previous Interaction:</strong> <span>{formData.isprevious ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Verified:</strong> <span>{formData.isverified ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>School Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required />

                <label>Address</label>
                <input name="address" value={formData.address} onChange={handleChange} required />

                <label>Contact</label>
                <input name="contact" value={formData.contact} onChange={handleChange} required />

                <label>District</label>
                <input name="district" value={formData.district} onChange={handleChange} required />

                <label>State</label>
                <input name="state" value={formData.state} onChange={handleChange} required />

                <label>Affiliation No.</label>
                <input name="affiliation_no" value={formData.affiliation_no} onChange={handleChange} required />

                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone No.</label>
                <input name="phone_no" value={formData.phone_no} onChange={handleChange} required />

                <label>Landline (Optional)</label>
                <input name="landline" value={formData.landline} onChange={handleChange} />

                <label>Type of School</label>
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

        {/* Scheduled Slot Section (Kept as is) */}
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
