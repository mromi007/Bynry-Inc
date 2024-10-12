import React, { useState } from 'react';
const Form = ({ newPerson, setNewPerson, handleAddPerson }) => {

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newPerson.name) {
      newErrors.name = "Name is required.";
    }
    if (!newPerson.location) {
      newErrors.location = "Location is required.";
    }
    if (!newPerson.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!newPerson.Contact) {
      newErrors.Contact = "Contact is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleAddPerson();
      setErrors({}); // Clear errors on successful submission
    }
  };


  return (
    <div className="form">
      <div className="addNew">
        <div className="container">
          <h2 className="head">Add New Person</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newPerson.name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
          {errors.name && <span className="error">{errors.name}</span>}


          <input
            type="text"
            placeholder="Location"
            value={newPerson.location}
            onChange={(e) =>
              setNewPerson({ ...newPerson, location: e.target.value })
            }
          />
          {errors.location && <span className="error">{errors.location}</span>}


          <input
            type="email"
            placeholder="Email"
            value={newPerson.email}
            onChange={(e) =>
              setNewPerson({ ...newPerson, email: e.target.value })
            }
          />
          {errors.email && <span className="error">{errors.email}</span>}


          <input
            type="text"
            placeholder="Contact"
            value={newPerson.contact}
            onChange={(e) =>
              setNewPerson({ ...newPerson, contact: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Interests (comma separated)"
            value={newPerson.interests}
            onChange={(e) =>
              setNewPerson({ ...newPerson, interests: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Profile Picture URL"
            value={newPerson.profilePicture}
            onChange={(e) =>
              setNewPerson({ ...newPerson, profilePicture: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Map URL"
            value={newPerson.map}
            onChange={(e) =>
              setNewPerson({ ...newPerson, map: e.target.value })
            }
          />
          <textarea
            placeholder="Bio"
            value={newPerson.bio}
            onChange={(e) =>
              setNewPerson({ ...newPerson, bio: e.target.value })
            }
          />
          <button onClick={handleAddPerson}>Add Person</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
