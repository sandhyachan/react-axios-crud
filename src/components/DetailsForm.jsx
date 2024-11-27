import 'bootstrap/dist/css/bootstrap.min.css';

export default function DetailsForm() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Alumni Information Form</h2>

      <div className="card p-4 d-flex flex-column">
        <form className="flex-grow-1">
          <div className="mb-4">
            <h4 className="mb-3">Personal Information</h4>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter alumni's name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter alumni's username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter alumni's email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter alumni's phone number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                id="website"
                placeholder="Enter alumni's website URL"
              />
              <small id="websiteHelp" className="form-text text-muted">
                Example: https://website.com
              </small>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-3">Address</h4>

            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                placeholder="Enter alumni's street"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="suite" className="form-label">Suite</label>
              <input
                type="text"
                className="form-control"
                id="suite"
                placeholder="Enter alumni's suite"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter alumni's city"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zipcode</label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                placeholder="Enter alumni's zipcode"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="latitude" className="form-label">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  placeholder="Enter latitude"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="longitude" className="form-label">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  placeholder="Enter longitude"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-3">Company</h4>

            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Enter alumni's company name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="catchphrase" className="form-label">Catchphrase</label>
              <input
                type="text"
                className="form-control"
                id="catchphrase"
                placeholder="Enter alumni's company catchphrase"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="businessStrategy" className="form-label">Business Strategy</label>
              <input
                type="text"
                className="form-control"
                id="businessStrategy"
                placeholder="Enter alumni's business strategy"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
