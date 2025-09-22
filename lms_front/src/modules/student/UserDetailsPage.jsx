// // UserDetailsPage.js
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaCamera, FaEdit, FaSave } from "react-icons/fa";
// import "./UserDetailsPage.css";

// const UserDetailsPage = () => {
//   const navigate = useNavigate();

//   // Get user data from localStorage or API (simulate with useState)
//   const [userData, setUserData] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     grade: "10th Grade",
//     school: "City High School",
//     course: "Science & Mathematics",
//     joinDate: "January 15, 2023",
//     address: "123 Main Street, Cityville, State 12345",
//     parentName: "Jane Doe",
//     parentEmail: "jane.doe@example.com",
//     parentPhone: "+1 (555) 987-6543",
//     avatar: null, // Profile photo
//   });

//   const [editMode, setEditMode] = useState(false);
//   const [tempAvatar, setTempAvatar] = useState(null);

//   const handleLogout = () => {
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userRole");
//     navigate("/");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     // Save userData to backend or localStorage here
//     if (tempAvatar) {
//       setUserData((prev) => ({ ...prev, avatar: tempAvatar }));
//     }
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setTempAvatar(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="user-details-container">
//       <motion.div
//         className="user-details-card"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="user-details-header">
//           <h1>User Details</h1>
//           <div className="header-buttons">
//             <button className="back-button" onClick={() => navigate(-1)}>
//               &larr; Back
//             </button>
//             <button className="logout-button-page" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>

//         <div className="user-details-content">
//           <div className="avatar-section">
//             <div className="user-avatar">
//               {userData.avatar || tempAvatar ? (
//                 <img
//                   src={tempAvatar || userData.avatar}
//                   alt="User Avatar"
//                   className="avatar-img"
//                 />
//               ) : (
//                 <span>{userData.name.charAt(0)}</span>
//               )}
//               {editMode && (
//                 <label className="avatar-upload">
//                   <FaCamera />
//                   <input
//                     type="file"
//                     accept="image/*"
//                     capture="user"
//                     onChange={handleAvatarChange}
//                     style={{ display: "none" }}
//                   />
//                 </label>
//               )}
//             </div>
//             {editMode ? (
//               <input
//                 type="text"
//                 name="name"
//                 value={userData.name}
//                 onChange={handleInputChange}
//                 className="name-input"
//               />
//             ) : (
//               <h2>{userData.name}</h2>
//             )}
//             <p className="user-role">Student</p>
//           </div>

//           <div className="details-section">
//             <h3>Personal Information</h3>
//             {[
//               { label: "Email", name: "email" },
//               { label: "Phone", name: "phone" },
//               { label: "Grade", name: "grade" },
//               { label: "School", name: "school" },
//               { label: "Course", name: "course" },
//               { label: "Address", name: "address" },
//               { label: "Member Since", name: "joinDate", disabled: true },
//             ].map((field) => (
//               <div className="detail-row" key={field.name}>
//                 <span className="detail-label">{field.label}:</span>
//                 {editMode && !field.disabled ? (
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={userData[field.name]}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData[field.name]}</span>
//                 )}
//               </div>
//             ))}

//             <h3>Parent/Guardian Information</h3>
//             {[
//               { label: "Parent Name", name: "parentName" },
//               { label: "Parent Email", name: "parentEmail" },
//               { label: "Parent Phone", name: "parentPhone" },
//             ].map((field) => (
//               <div className="detail-row" key={field.name}>
//                 <span className="detail-label">{field.label}:</span>
//                 {editMode ? (
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={userData[field.name]}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData[field.name]}</span>
//                 )}
//               </div>
//             ))}

//             <div className="edit-save-buttons">
//               {editMode ? (
//                 <button className="save-button" onClick={handleSave}>
//                   <FaSave /> Save
//                 </button>
//               ) : (
//                 <button
//                   className="edit-button"
//                   onClick={() => setEditMode(true)}
//                 >
//                   <FaEdit /> Edit
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default UserDetailsPage;









// UserDetailsPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCamera, FaEdit, FaSave } from "react-icons/fa";
import "./UserDetailsPage.css";
import { apiRequest, getApiUrl } from "../../config/api";
import { USER_ROLES } from "../../config/schema";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [tempAvatar, setTempAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('access_token') || localStorage.getItem('userToken');
    const userRole = localStorage.getItem('userRole');

    if (!token || userRole !== 'student') {
      console.log('No valid authentication found, redirecting to login');
      navigate('/login');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    // Load user data from API
    const loadUserData = async () => {
      try {
        setLoading(true);

        // First try to get user data from localStorage (set during login)
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }

        // Then fetch fresh data from API
        const data = await apiRequest('/api/auth/profile/');

        // Transform API data to match component structure
        const combinedData = {
          firstName: data.firstname || '',
          lastName: data.lastname || '',
          email: data.email || '',
          phone: data.phonenumber || data.phone || '',
          userName: data.username || '',
          grade: data.grade || '',
          school: data.school || '',
          address: data.address || '',
          parentEmail: data.parent_email || '',
          parentName: data.parent_name || '',
          parentPhone: data.parent_phone || '',
          role: data.role || 'student',
          userid: data.userid || data.id || ''
        };

        setUserData(combinedData);
        // Update localStorage with fresh data
        localStorage.setItem("userData", JSON.stringify(combinedData));

      } catch (error) {
        console.error('Error loading user data:', error);
        // If API fails, use stored data or show default
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          const defaultData = {
            firstName: 'bhaskar',
            lastName: 'pirre',
            email: 'bhaskarpirre@gmail.com',
            phone: '9959855622',
            userName: 'bhaskar23',
            grade: 'Grade',
            school: 'School',
            address: 'Address',
            parentEmail: 'mmm@gmail.com',
            parentName: 'Parent Name',
            parentPhone: 'Parent Phone',
            role: 'student'
          };
          setUserData(defaultData);
        }
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Call logout API to invalidate token
      await apiRequest('/api/auth/logout/', {
        method: 'POST',
        body: JSON.stringify({
          refresh: localStorage.getItem('refresh_token')
        })
      });
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Clear all stored data
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userRole");
      localStorage.removeItem("userData");
      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Prepare data for API call
      const profileData = {
        firstname: userData.firstName,
        lastname: userData.lastName,
        email: userData.email,
        phonenumber: userData.phone,
        username: userData.userName,
        grade: userData.grade,
        school: userData.school,
        address: userData.address,
        parent_name: userData.parentName,
        parent_email: userData.parentEmail,
        parent_phone: userData.parentPhone
      };

      const response = await apiRequest('/api/auth/profile/update/', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });

      console.log('Profile updated successfully:', response);

      // Update localStorage with new data
      localStorage.setItem("userData", JSON.stringify(userData));

      if (tempAvatar) {
        setUserData((prev) => ({ ...prev, avatar: tempAvatar }));
        localStorage.setItem("userData", JSON.stringify({ ...userData, avatar: tempAvatar }));
      }

      // Show success message
      alert('Profile updated successfully!');

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please check your connection and try again.');
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading || !userData) {
    return (
      <div className="user-details-container">
        <div className="loading">Loading user data...</div>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      <motion.div
        className="user-details-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="user-details-header">
          <h1>User Details</h1>
          <div className="header-buttons">
            <button className="back-button" onClick={() => navigate('/student/dashboard')}>
              &larr; Back
            </button>
            <button className="logout-button-page" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="user-details-content">
          <div className="avatar-section">
            <div className="user-avatar">
              {userData.avatar || tempAvatar ? (
                <img
                  src={tempAvatar || userData.avatar}
                  alt="User Avatar"
                  className="avatar-img"
                />
              ) : (
                <span>{userData.firstName?.charAt(0)?.toLowerCase() || 'b'}</span>
              )}
              <label className="avatar-upload">
                <FaCamera />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                value={userData.firstName || ''}
                onChange={handleInputChange}
                placeholder="First Name"
                className="name-input"
              />
              <input
                type="text"
                name="lastName"
                value={userData.lastName || ''}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="name-input"
              />
              <div className="parent-field">Student</div>
            </div>
          </div>

          <div className="details-section">
            <h3>Personal Information</h3>
            {[
              { label: "Email", name: "email" },
              { label: "Phone", name: "phone" },
              { label: "User Name", name: "userName" },
              { label: "Grade", name: "grade" },
              { label: "School", name: "school" },
              { label: "Course", name: "course" },
              { label: "Address", name: "address" },
            ].map((field) => (
              <div className="detail-row" key={field.name}>
                <span className="detail-label">{field.label}:</span>
                <input
                  type="text"
                  name={field.name}
                  value={userData[field.name] || ""}
                  onChange={handleInputChange}
                  placeholder={field.label}
                  className="detail-input"
                />
              </div>
            ))}

            <h3>Parent/Guardian Information</h3>
            {[
              { label: "Parent Name", name: "parentName" },
              { label: "Parent Email", name: "parentEmail" },
              { label: "Parent Phone", name: "parentPhone" },
            ].map((field) => (
              <div className="detail-row" key={field.name}>
                <span className="detail-label">{field.label}:</span>
                <input
                  type="text"
                  name={field.name}
                  value={userData[field.name] || ""}
                  onChange={handleInputChange}
                  placeholder={field.label}
                  className="detail-input"
                />
              </div>
            ))}

            <div className="edit-save-buttons">
              <button className="save-button" onClick={handleSave}>
                <FaSave /> Save
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDetailsPage;