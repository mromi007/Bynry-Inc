const Navbar = ({ searchInput, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><h1>People-Info</h1></div>
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchInput}
        onChange={onSearchChange}
        className="search-bar"
      />
    </nav>
  );
};

export default Navbar;