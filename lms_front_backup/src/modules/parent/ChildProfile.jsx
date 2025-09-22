 
import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBookOpen,
  FaStar,
  FaBirthdayCake,
  FaChalkboardTeacher,
  FaVenusMars,
  FaUserCircle,
  FaIdBadge
} from "react-icons/fa";
 
const ChildProfile = () => {
  const [childData, setChildData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Get student data from localStorage
    const studentData = localStorage.getItem("studentData");
   
    if (studentData) {
      const userData = JSON.parse(studentData);
     
      setChildData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
        userName: userData.userName || "john_doe123",
        grade: userData.grade || "7th Grade",
        course: userData.course || "Science & Mathematics",
        gender: userData.gender || "Male",
        dob: userData.dob || "2011-08-12",
        address: userData.address || "123 Main Street, Cityville, State 12345",
        parentName: userData.parentName || "Jane Doe",
        parentEmail: userData.parentEmail || "jane.doe@example.com",
        parentPhone: userData.parentPhone || "+1 (555) 987-6543",
        avatar: userData.avatar || null,
       
      });
    }
   
    setLoading(false);
  }, []);
 
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }
 
  if (!childData) {
    return (
      <div className="no-profile-container">
        <div className="no-profile-card">
          <div className="no-profile-icon">👦</div>
          <h2>No Student Profile Found</h2>
          <p>Please complete the sign up process first.</p>
          <button className="action-button">Go to Sign Up</button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        {/* Header Section */}
        <div className="profile-header">
          <div className="avatar-container">
            {childData.avatar ? (
              <img
                src={childData.avatar}
                alt="Student"
                className="avatar-image"
              />
            ) : (
              <div className="avatar-placeholder">
                {childData.firstName.charAt(0)}{childData.lastName.charAt(0)}
              </div>
            )}
            <div className="progress-badge">
              <FaStar />
              <span>{childData.progress}</span>
            </div>
          </div>
         
          <div className="header-content">
            <h1>{childData.name}</h1>
            <p>{childData.grade} • {childData.course}</p>
          </div>
        </div>
 
        {/* Main Content */}
        <div className="profile-content">
          {/* Personal Information Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FaUser />
              </div>
              <h2>Personal Information</h2>
            </div>
           
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">
                  <FaVenusMars />
                  <span>Gender</span>
                </div>
                <div className="info-value">{childData.gender}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaBirthdayCake />
                  <span>Date of Birth</span>
                </div>
                <div className="info-value">{new Date(childData.dob).toLocaleDateString('en-IN')}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaIdBadge />
                  <span>User Name</span>
                </div>
                <div className="info-value">{childData.userName}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaBookOpen />
                  <span>Course</span>
                </div>
                <div className="info-value">{childData.course}</div>
              </div>
            </div>
          </div>
 
          {/* Contact Information Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FaPhoneAlt />
              </div>
              <h2>Contact Information</h2>
            </div>
           
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">
                  <FaEnvelope />
                  <span>Email</span>
                </div>
                <div className="info-value">{childData.email}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaPhoneAlt />
                  <span>Phone</span>
                </div>
                <div className="info-value">{childData.phone}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaHome />
                  <span>Address</span>
                </div>
                <div className="info-value">{childData.address}</div>
              </div>
            </div>
          </div>
 
          {/* Academic Information Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FaChalkboardTeacher />
              </div>
              <h2>Academic Information</h2>
            </div>
           
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">
                  <FaBookOpen />
                  <span>Grade</span>
                </div>
                <div className="info-value">{childData.grade}</div>
              </div>
             
              <div className="info-item">
                <div className="info-label">
                  <FaBookOpen />
                  <span>Course</span>
                </div>
                <div className="info-value">{childData.course}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <style jsx>{`
        .profile-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
       
        .profile-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }
       
        .loading-container, .no-profile-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8fafc;
        }
       
        .loading-container {
          flex-direction: column;
        }
       
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #e2e8f0;
          border-top: 5px solid #6366f1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
       
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
       
        .no-profile-card {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          max-width: 450px;
        }
       
        .no-profile-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
       
        .no-profile-card h2 {
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 600;
        }
       
        .no-profile-card p {
          color: #64748b;
          margin-bottom: 2rem;
        }
       
        .action-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
       
        .action-button:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }
       
        .profile-header {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 2rem;
        }
       
        .avatar-container {
          position: relative;
          flex-shrink: 0;
        }
       
        .avatar-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #e2e8f0;
        }
       
        .avatar-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7ba4c8ff, #d8d5ddff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          border: 4px solid #e2e8f0;
        }
       
        .progress-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
       
        .progress-badge svg {
          color: #f59e0b;
        }
       
        .header-content h1 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
       
        .header-content p {
          font-size: 1.125rem;
          color: #64748b;
          margin: 0;
        }
       
        .profile-content {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
       
        .info-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }
       
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
       
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }
       
        .icon-wrapper {
          background: #6366f1;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        }
       
        .card-header h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }
       
        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
       
        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
       
        .info-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }
       
        .info-value {
          color: #1e293b;
          font-weight: 600;
          text-align: right;
          max-width: 60%;
        }
       
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
         
          .profile-content {
            grid-template-columns: 1fr;
          }
         
          .header-content h1 {
            font-size: 1.875rem;
          }
         
          .info-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
         
          .info-value {
            text-align: left;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
 
export default ChildProfile;
 
 
 
 
 
 
 
 
 
 
 
 
 