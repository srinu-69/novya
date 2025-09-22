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

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [tempAvatar, setTempAvatar] = useState(null);

  useEffect(() => {
    // Load user data from API
    const loadUserData = async () => {
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          console.error('No authentication token found');
          return;
        }

        const response = await fetch('http://localhost:8000/api/auth/profile/data/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          // Combine user, student registration, and student profile data
          const combinedData = {
            firstName: data.user.firstname || '',
            lastName: data.user.lastname || '',
            email: data.user.email || '',
            phone: data.user.phonenumber || '',
            userName: data.student_registration.student_username || '',
            grade: data.student_profile.grade || '',
            school: data.student_profile.school || '',
            address: data.student_profile.address || '',
            parentEmail: data.student_registration.parent_email || '',
            parentName: '', // This might need to be fetched separately
            parentPhone: '', // This might need to be fetched separately
            role: 'student'
          };

          setUserData(combinedData);
          // Also save to localStorage for offline access
          localStorage.setItem("userData", JSON.stringify(combinedData));
        } else {
          console.error('Failed to load user data');
          // Fallback to localStorage if API fails
          const userDataFromStorage = localStorage.getItem("userData");
          if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // Fallback to localStorage if API fails
        const userDataFromStorage = localStorage.getItem("userData");
        if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
        }
      }
    };

    loadUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("userToken");

      // Prepare data for API call
      const profileData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        userName: userData.userName,
        grade: userData.grade,
        school: userData.school,
        address: userData.address,
        parentName: userData.parentName,
        parentEmail: userData.parentEmail,
        parentPhone: userData.parentPhone
      };

      const response = await fetch('http://localhost:8000/api/auth/profile/update/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Profile updated successfully:', result);

        // Update localStorage with new data
        localStorage.setItem("userData", JSON.stringify(userData));

        if (tempAvatar) {
          setUserData((prev) => ({ ...prev, avatar: tempAvatar }));
          localStorage.setItem("userData", JSON.stringify({ ...userData, avatar: tempAvatar }));
        }

        // Show success message
        alert('Profile updated successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error updating profile:', errorData);
        alert('Failed to update profile. Please try again.');
      }
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

  if (!userData) {
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
            <button className="back-button" onClick={() => navigate(-1)}>
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