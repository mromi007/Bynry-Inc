import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const PeopleList = ({
  filteredData,
  editingId,
  editPerson,
  handleEditClick,
  handleDelete,
  handleSaveEdit,
  setEditPerson,
  handleShowSummary,
}) => {
  return (
    <div className="profile-list">
      <div className="list-p">
        <ul>
          {filteredData.map((person) => (
            <li key={person.id}>
              <img
                src={person.profilePicture || "https://via.placeholder.com/50"}
                alt={person.name}
              />
              <span>{person.name}</span>
              {editingId === person.id ? (
                <div className="names-people">
                  <input
                    type="text"
                    value={editPerson.name}
                    onChange={(e) =>
                      setEditPerson({ ...editPerson, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    value={editPerson.email}
                    onChange={(e) =>
                      setEditPerson({ ...editPerson, email: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editPerson.contact}
                    onChange={(e) =>
                      setEditPerson({ ...editPerson, contact: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editPerson.interests}
                    onChange={(e) =>
                      setEditPerson({
                        ...editPerson,
                        interests: e.target.value,
                      })
                    }
                  />
                  <textarea
                    value={editPerson.bio}
                    onChange={(e) =>
                      setEditPerson({ ...editPerson, bio: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editPerson.profilePicture}
                    placeholder="Profile Picture URL"
                    onChange={(e) =>
                      setEditPerson({
                        ...editPerson,
                        profilePicture: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={editPerson.map}
                    placeholder="Map URL"
                    onChange={(e) =>
                      setEditPerson({ ...editPerson, map: e.target.value })
                    }
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </div>
              ) : (
                <div className="person-info">
                  <div className="button-group">
                    <button
                      onClick={() => handleEditClick(person)}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(person.id)}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => handleShowSummary(person)}
                      style={{ marginLeft: "10px" }}
                      type="button"
                      className="btn btn-success"
                    >
                      Summary
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeopleList;
