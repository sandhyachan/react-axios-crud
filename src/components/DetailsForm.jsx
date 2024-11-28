import PropTypes from 'prop-types';

export default function DetailsForm({ editInfo, handleSubmit, formData, handleChange }) {
  const onSubmit = (e) => {
    e.preventDefault()
    if (!formData.name) {
      alert("Please fill out the required name.")
      return
    }
    handleSubmit(formData)
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Alumni Information Form</h2>

      <div className="card p-4 d-flex flex-column">
        <form onSubmit={onSubmit} className="flex-grow-1">
          <div className="mb-4">
            <h4 className="mb-3">Personal Information</h4>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name || ''}
                placeholder="Enter alumni's name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username || ''}
                placeholder="Enter alumni's username"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email || ''}
                placeholder="Enter alumni's email"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                placeholder="Enter alumni's phone number"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={formData.website || ''}
                placeholder="Enter alumni's website"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-3">Address Information</h4>

            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                name="street"
                value={formData.street || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="suite" className="form-label">Suite</label>
              <input
                type="text"
                className="form-control"
                id="suite"
                name="suite"
                value={formData.suite || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zipcode</label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">Latitude</label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                name="latitude"
                value={formData.latitude || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">Longitude</label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                name="longitude"
                value={formData.longitude || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-3">Company Information</h4>

            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="catchphrase" className="form-label">Catchphrase</label>
              <input
                type="text"
                className="form-control"
                id="catchphrase"
                name="catchphrase"
                value={formData.catchphrase || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="businessStrategy" className="form-label">Business Strategy</label>
              <input
                type="text"
                className="form-control"
                id="businessStrategy"
                name="businessStrategy"
                value={formData.businessStrategy || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {editInfo ? 'Update Alumni' : 'Add Alumni'}
          </button>
        </form>
      </div>
    </div>
  )
}

DetailsForm.propTypes = {
  editInfo: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
