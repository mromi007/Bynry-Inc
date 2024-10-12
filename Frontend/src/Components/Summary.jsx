import React from 'react';

const Summary = ({ selectedProfile, loadingSummary }) => {
  if (loadingSummary) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div></div><div></div><div></div>
        </div>
      </div>
    );
  }

  if (!selectedProfile) {
    return <p>Select a profile to see the details</p>;
  }

  return (
    <>
      <h2>{selectedProfile.name}</h2>
      <img
        src={selectedProfile.profilePicture || 'https://via.placeholder.com/100'}
        alt={selectedProfile.name}
      />
      <p>Location: {selectedProfile.location}</p>
      <p>Email: {selectedProfile.email}</p>
      <p>Interests: {selectedProfile.interests.join(', ')}</p>
      <p>Bio: {selectedProfile.bio}</p>
      <iframe src={selectedProfile.map} title="Google Maps" style={{ width: '100%', height: '300px' }}></iframe>
    </>
  );
};

export default Summary;
