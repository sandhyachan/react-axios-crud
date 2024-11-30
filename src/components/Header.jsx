import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from 'prop-types';

// Header component
export default function Header({handleAddAlumni}) {
 
  return (
    <header className="bg-primary text-white py-4 mb-4">
      <div className="container">
        <div className="row align-items-center">

          {/* Header title and description */}
          <div className="col-md-8">
            <h1 className="display-4">College Alumni Database</h1>
            <p className="lead">Manage, edit, and delete alumni records. Update details as necessary.</p>
          </div>

          {/* Button to add new alumni */}
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <button className="btn btn-light" onClick={handleAddAlumni}>
            <i className="bi bi-person-plus-fill"></i> Add New Alumni
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Prop validation
Header.propTypes = {
  handleAddAlumni: PropTypes.func.isRequired
}
