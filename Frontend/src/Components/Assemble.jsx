import React, { useState, useEffect } from 'react';
import './Assemble.css';
import Navbar from './Navbar';
import initialData from './initialData';
import Form from './Form';
import Summary from './Summary';
import PeopleList from './PeopleList'; 

const Assemble = () => {
  const [data, setData] = useState(initialData);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [newPerson, setNewPerson] = useState({
    name: '',
    location: '',
    email: '',
    contact: '',
    interests: '',
    bio: '',
    profilePicture: '',
    map: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editPerson, setEditPerson] = useState({ 
    name: '', 
    location: '', 
    email: '', 
    contact: '', 
    interests: '', 
    bio: '',
    profilePicture: '',
    map: ''
  });
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.location.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchInput, data]);

  const handleAddPerson = () => {
    if (newPerson.name && newPerson.location) {
      const interestsArray = newPerson.interests.split(',').map(interest => interest.trim());
      setData([...data, { id: Date.now(), ...newPerson, interests: interestsArray }]);
      setNewPerson({
        name: '',
        location: '',
        email: '',
        contact: '',
        interests: '',
        bio: '',
        profilePicture: '',
        map: ''
      });
    }
  };

  const handleDelete = (id) => {
    setData(data.filter(person => person.id !== id));
  };

  const handleEditClick = (person) => {
    setEditingId(person.id);
    setEditPerson({ 
      name: person.name, 
      location: person.location, 
      email: person.email, 
      contact: person.contact, 
      interests: person.interests.join(', '), 
      bio: person.bio,
      profilePicture: person.profilePicture,
      map: person.map
    });
  };

  const handleSaveEdit = () => {
    setData(data.map(person =>
      person.id === editingId ? { ...person, ...editPerson } : person
    ));
    setEditingId(null);
  };

  const handleShowSummary = (profile) => {
    setLoadingSummary(true);
    setSelectedProfile(null);

    setTimeout(() => {
      setSelectedProfile(profile);
      setLoadingSummary(false);
    }, 3000); 
  };

  return (
    <div>
      <Navbar searchInput={searchInput} onSearchChange={handleSearchChange} />
      
      <div className="maiDiv">
        <PeopleList 
          filteredData={filteredData}
          editingId={editingId}
          editPerson={editPerson}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          handleSaveEdit={handleSaveEdit}
          setEditPerson={setEditPerson}
          handleShowSummary={handleShowSummary}
        />

        <div className="profile-summary">
          <Summary selectedProfile={selectedProfile} loadingSummary={loadingSummary} />
        </div>
      </div>
      
      <Form newPerson={newPerson} setNewPerson={setNewPerson} handleAddPerson={handleAddPerson} />
    </div>
  );
};

export default Assemble;
