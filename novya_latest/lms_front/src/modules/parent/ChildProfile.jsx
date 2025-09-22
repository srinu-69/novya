import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaHome, FaUser, FaBookOpen, FaStar } from "react-icons/fa";
import { apiRequest, getApiUrl } from '../../config/api';

const ChildProfile = () => {
  const [child, setChild] = useState({
    name: "Loading...",
    class: "Loading...",
    gender: "Loading...",
    dob: "Loading...",
    subjects: ["Loading..."],
    teacher: "Loading...",
    progress: "Loading...",
    guardian: "Loading...",
    contact: "Loading...",
    email: "Loading...",
    address: "Loading...",
    username: "Loading...",
    school: "Loading...",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchChildData();
  }, []);

  // Add a refresh function that can be called manually
  const handleRefresh = () => {
    console.log('🔄 Manual refresh triggered');
    fetchChildData();
  };

  const fetchChildData = async () => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors

      // Get parent's email from localStorage instead of childEmail
      const userData = localStorage.getItem('userData');
      const parentEmail = userData ? JSON.parse(userData).email : null;

      console.log('🔍 DEBUGGING CHILD PROFILE DATA FETCH:');
      console.log('Parent email from localStorage:', parentEmail);
      console.log('Access token exists:', !!localStorage.getItem('access_token'));
      console.log('All localStorage keys:', Object.keys(localStorage));
      console.log('All localStorage values:', Object.fromEntries(Object.entries(localStorage)));

      // Test if we can make a simple API call
      console.log('Testing API base URL:', getApiUrl('/api/auth/students/'));

      if (!parentEmail) {
        console.log('No parent email found in localStorage');
        setError('No parent email found. Please login again.');
        setLoading(false);
        return;
      }

      // Fetch child data - we need to get the child's profile, not the parent's profile
      // Since parent is logged in, /api/auth/profile/ will return parent's data, not child's
      let childData = null;

      // Try to get student data using the parent's email to find their child
      try {
        console.log('🔍 Looking for student data for parent');
        console.log('🔍 Parent email:', parentEmail);

        // Method 1: Try to get student profiles and find the one with matching parent email
        console.log('Method 1: Trying /api/auth/student-profiles/ endpoint');
        const studentProfilesResponse = await fetch(getApiUrl('/api/auth/student-profiles/'), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Cache-Control': 'no-cache',
          },
        });

        if (studentProfilesResponse.ok) {
          const studentProfilesData = await studentProfilesResponse.json();
          console.log('✅ Student profiles data:', studentProfilesData);

          // Find the student profile where parent_email matches the logged-in parent's email
          const foundStudentProfile = studentProfilesData.find(profile =>
            profile.parent_email === parentEmail
          );

          if (foundStudentProfile) {
            console.log('🎉 Found student profile for parent:', foundStudentProfile);

            // Now get the student registration data for this student
            try {
              const studentRegResponse = await fetch(getApiUrl(`/api/auth/student/${foundStudentProfile.student_id}/`), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                  'Cache-Control': 'no-cache',
                },
              });

              if (studentRegResponse.ok) {
                const studentRegData = await studentRegResponse.json();
                console.log('✅ Student registration data:', studentRegData);

                // Combine student profile and registration data
                childData = {
                  ...studentRegData,
                  ...foundStudentProfile,
                  // Map the fields correctly
                  first_name: studentRegData.first_name,
                  last_name: studentRegData.last_name,
                  student_email: studentRegData.student_email,
                  phone_number: studentRegData.phone_number,
                  grade: foundStudentProfile.grade,
                  school: foundStudentProfile.school,
                  address: foundStudentProfile.address,
                  student_username: foundStudentProfile.student_username,
                  parent_email: foundStudentProfile.parent_email,
                };
                console.log('🎉 Combined child data:', childData);
              }
            } catch (studentRegError) {
              console.log('❌ Student registration fetch failed:', studentRegError);
              // Use profile data only if registration fetch fails
              childData = foundStudentProfile;
            }
          } else {
            console.log('❌ No student profile found with parent_email:', parentEmail);
            console.log('Available parent emails in profiles:', studentProfilesData.map(p => p.parent_email));
          }
        } else {
          console.log('❌ Student profiles API failed with status:', studentProfilesResponse.status);
        }

        // Method 2: Fallback - try to get all students and find by child email
        if (!childData) {
          console.log('Method 2: Fallback - trying to get all students and find by child email');
          try {
            const studentsResponse = await fetch(getApiUrl('/api/auth/students-list/'), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Cache-Control': 'no-cache',
              },
            });

            if (studentsResponse.ok) {
              const studentsData = await studentsResponse.json();
              console.log('✅ Students list data (fallback):', studentsData);

              // Find the student with matching parent email
              const foundStudent = studentsData.find(student =>
                student.parent_email === parentEmail
              );

              if (foundStudent) {
                childData = foundStudent;
                console.log('🎉 Found child data in students list (fallback):', childData);
              } else {
                console.log('❌ No student found with parent email (fallback):', parentEmail);
                console.log('Available parent emails:', studentsData.map(s => s.parent_email));
              }
            }
          } catch (fallbackError) {
            console.log('❌ Fallback students list API failed:', fallbackError);
          }
        }

      } catch (error) {
        console.log('❌ All API calls failed:', error);
      }

      // No fallback needed - we should have found the child data from student profiles

      if (childData) {
        console.log('Processing child data from StudentRegistration model:', childData);

        // Map the API response using field names from student_profile and student_registration tables
        // Based on the database schema: student_profile and student_registration tables
        setChild({
          name: `${childData.first_name || ''} ${childData.last_name || ''}`.trim() || 'N/A',
          class: childData.grade || 'N/A',
          gender: childData.gender || 'N/A',
          dob: childData.date_of_birth || childData.dob || 'N/A',
          subjects: childData.subjects || ['N/A'],
          teacher: childData.class_teacher || childData.teacher || 'N/A',
          progress: childData.progress || 'N/A',
          guardian: childData.parent_name || 'N/A',
          contact: childData.phone_number || 'N/A',
          email: childData.student_email || 'N/A',
          address: childData.address || 'N/A',
          username: childData.student_username || 'N/A',
          school: childData.school || 'N/A',
        });

        console.log('Mapped child data (using StudentRegistration field names):', {
          name: `${childData.first_name || ''} ${childData.last_name || ''}`.trim() || 'N/A',
          class: childData.grade || 'N/A',
          email: childData.student_email || 'N/A',
          phone: childData.phone_number || 'N/A',
          parent_name: childData.parent_name || 'N/A',
        });
      } else {
        // If no child data found from API, show error
        console.log('❌ NO CHILD DATA FOUND FROM API');
        console.log('Parent email we were looking for:', parentEmail);

        setError(`No student found for parent: ${parentEmail}. Please check if the student is registered.`);
        setChild({
          name: "No Data Found",
          class: "N/A",
          gender: "N/A",
          dob: "N/A",
          subjects: ["N/A"],
          teacher: "N/A",
          progress: "N/A",
          guardian: "N/A",
          contact: "N/A",
          email: "N/A",
          address: "N/A",
          username: "N/A",
          school: "N/A",
        });
      }
    } catch (error) {
      console.error('❌ ERROR FETCHING CHILD DATA:', error);

      setError(`Error loading child data: ${error.message}`);
      setChild({
        name: "Error Loading Data",
        class: "N/A",
        gender: "N/A",
        dob: "N/A",
        subjects: ["N/A"],
        teacher: "N/A",
        progress: "N/A",
        guardian: "N/A",
        contact: "N/A",
        email: "N/A",
        address: "N/A",
        username: "N/A",
        school: "N/A",
      });
    } finally {
      setLoading(false);
      setLastUpdated(new Date().toLocaleString());
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: '#f8f9fa', padding: "2rem 1rem" }}>
      <style>
        {`
          * { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
 
          .container { max-width: 1200px; margin: 0 auto; }
 
          .page-header { text-align: left; margin-bottom: 2rem; }
          .page-title { color: #6b46c1; font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
          .page-subtitle { color: #6b7280; font-size: 1.1rem; }
 
          .student-overview-card { 
            background: white; 
            border-radius: 16px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.08); 
            padding: 2rem; 
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 2rem;
          }
 
          .student-avatar { 
            position: relative;
            width: 120px; 
            height: 120px; 
            border-radius: 50%; 
            background: linear-gradient(135deg, #a3cef1, #e0f0ff); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 2.5rem; 
            font-weight: 700; 
            color: white;
            flex-shrink: 0;
          }
 
          .star-badge { 
            position: absolute; 
            bottom: 5px; 
            right: 5px; 
            background: #fbbf24; 
            color: white; 
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 0.8rem;
            border: 2px solid white;
          }
 
          .student-info h2 { 
            font-size: 2rem; 
            font-weight: 700; 
            color: #1f2937; 
            margin-bottom: 0.5rem; 
          }
          .student-grade { 
            font-size: 1.1rem; 
            color: #6b7280; 
            font-weight: 500;
          }
 
          .info-cards-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
            gap: 1.5rem; 
          }
 
          .info-card { 
            background: white; 
            border-radius: 16px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.08); 
            padding: 1.5rem; 
            border: 1px solid #e5e7eb;
          }
 
          .card-header { 
            display: flex; 
            align-items: center; 
            margin-bottom: 1.5rem; 
            padding-bottom: 1rem; 
            border-bottom: 2px solid #f3f4f6; 
          }
 
          .card-icon { 
            background: #6b46c1; 
            color: white; 
            width: 40px; 
            height: 40px; 
            border-radius: 10px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            margin-right: 1rem; 
            font-size: 1.1rem; 
          }
 
          .card-title { 
            font-size: 1.2rem; 
            font-weight: 600; 
            color: #1f2937; 
          }
 
          .info-item { 
            display: flex; 
            align-items: center; 
            padding: 0.75rem 0; 
            border-bottom: 1px solid #f3f4f6; 
          }
          .info-item:last-child { border-bottom: none; }
 
          .info-icon { 
            color: #6b46c1; 
            margin-right: 0.75rem; 
            width: 16px; 
            font-size: 0.9rem; 
          }
 
          .info-label { 
            font-weight: 500; 
            color: #4b5563; 
            min-width: 120px; 
          }
          .info-value { 
            color: #1f2937; 
            font-weight: 500; 
          }
 
          @media (max-width: 768px) {
            .student-overview-card { flex-direction: column; text-align: center; }
            .info-cards-grid { grid-template-columns: 1fr; }
            .page-title { font-size: 2rem; }
          }
        `}
      </style>

      <div className="container">
        <div className="page-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 className="page-title">Child Profile</h1>
              <p className="page-subtitle">Good Morning! Track your child's learning journey</p>
              {lastUpdated && (
                <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>
            <button
              onClick={handleRefresh}
              style={{
                background: '#6b46c1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.background = '#553c9a'}
              onMouseOut={(e) => e.target.style.background = '#6b46c1'}
            >
              🔄 Refresh Data
            </button>
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '1.2rem', color: '#6b46c1' }}>Loading child data...</div>
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fee', border: '1px solid #fcc', borderRadius: '8px', margin: '1rem 0' }}>
            <div style={{ fontSize: '1.2rem', color: '#c33', fontWeight: 'bold' }}>❌ {error}</div>
            <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              Check browser console for more details
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Student Overview Card */}
            <div className="student-overview-card">
              <div className="student-avatar">
                {child.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                <div className="star-badge">
                  <FaStar />
                </div>
              </div>
              <div className="student-info">
                <h2>{child.name}</h2>
                <p className="student-grade">{child.class} • {child.subjects.join(' & ')}</p>
              </div>
            </div>

            {/* Information Cards */}
            <div className="info-cards-grid">
              {/* Personal Information Card */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">
                    <FaUser />
                  </div>
                  <h3 className="card-title">Personal Information</h3>
                </div>
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <span className="info-label">Gender:</span>
                  <span className="info-value">{child.gender}</span>
                </div>
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">{new Date(child.dob).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <span className="info-label">User Name:</span>
                  <span className="info-value">{child.username || 'N/A'}</span>
                </div>
                <div className="info-item">
                  <FaBookOpen className="info-icon" />
                  <span className="info-label">Course:</span>
                  <span className="info-value">{child.subjects.join(' & ')}</span>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">
                    <FaPhoneAlt />
                  </div>
                  <h3 className="card-title">Contact Information</h3>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span className="info-label">Email:</span>
                  <span className="info-value">{child.email}</span>
                </div>
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{child.contact}</span>
                </div>
                <div className="info-item">
                  <FaHome className="info-icon" />
                  <span className="info-label">Address:</span>
                  <span className="info-value">{child.address}</span>
                </div>
              </div>

              {/* Academic Information Card */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">
                    <FaBookOpen />
                  </div>
                  <h3 className="card-title">Academic Information</h3>
                </div>
                <div className="info-item">
                  <FaBookOpen className="info-icon" />
                  <span className="info-label">Grade:</span>
                  <span className="info-value">{child.class}</span>
                </div>
                <div className="info-item">
                  <FaBookOpen className="info-icon" />
                  <span className="info-label">Course:</span>
                  <span className="info-value">{child.subjects.join(' & ')}</span>
                </div>
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <span className="info-label">Class Teacher:</span>
                  <span className="info-value">{child.teacher}</span>
                </div>
                <div className="info-item">
                  <FaStar className="info-icon" />
                  <span className="info-label">Progress:</span>
                  <span className="info-value">{child.progress}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChildProfile;