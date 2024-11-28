import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function DataTable({ handleEdit, details, handleDelete }) {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="accordion" id="accordionExample">
          {details.map((alumni, index) => (
            <div key={alumni.id} className="accordion-item">
              <h2 className="accordion-header d-flex justify-content-between" id={`heading-${alumni.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${alumni.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${alumni.id}`}
                >
                  {index+1}. {alumni.name}
                </button>

                <button
                  className="btn btn-sm btn-outline-primary accordion-edit-btn m-2"
                  onClick={() => handleEdit(alumni.id, index)}>
                  <i className="bi bi-pen"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger accordion-delete-btn m-2"
                  onClick={() => handleDelete(alumni.id, index)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </h2>
              <div
                id={`collapse-${alumni.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${alumni.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h6 className="text-decoration-underline">User Info</h6>
                  <p><strong>Username:</strong> {alumni.username}</p>
                  <p><strong>Id:</strong> {alumni.id}</p>
                  <p><strong>Email:</strong> {alumni.email}</p>
                  <p><strong>Phone:</strong> {alumni.phone}</p>
                  <p><strong>Website:</strong> <a href={`https://${alumni.website}`} target="_blank" rel="noopener noreferrer">{alumni.website}</a></p>

                  <h6 className="mt-3 text-decoration-underline">Address</h6>
                  <ul className="list-unstyled">
                    <li><strong>Street:</strong> {alumni.address.street}</li>
                    <li><strong>Suite:</strong> {alumni.address.suite}</li>
                    <li><strong>City:</strong> {alumni.address.city}</li>
                    <li><strong>Zipcode:</strong> {alumni.address.zipcode}</li>
                    <li><strong>Coordinates:</strong> ({alumni.address.geo.lat}, {alumni.address.geo.lng})</li>
                  </ul>

                  <h6 className="mt-3 text-decoration-underline">Company</h6>
                  <p><strong>Company Name:</strong> {alumni.company.name}</p>
                  <p><strong>Catchphrase:</strong> {alumni.company.catchPhrase}</p>
                  <p><strong>Business Strategy:</strong> {alumni.company.bs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

DataTable.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  details: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
}
