import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DetailsForm from './components/DetailsForm';
import DataTable from './components/DataTable';
import Header from './components/Header';

//Default empty form data
const emptyFormData = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  street: '',
  suite: '',
  city: '',
  zipcode: '',
  latitude: '',
  longitude: '',
  companyName: '',
  catchphrase: '',
  businessStrategy: ''
}

function App() {
  //Use state hooks to show info to edit on table, to update alumni, and form data
  const [editInfo, setEditInfo] = useState(null)
  const [alumni, setAlumni] = useState([])
  const [formData, setFormData] = useState(emptyFormData)
  const detailsFormRef = useRef(null)  //Use ref to scroll to form on click

  //fetch alumni data from json page
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setAlumni(response.data))
      .catch(error => console.error('Error fetching alumni:', error))
  }, [])

  //function to edit alumni's info
  function handleEdit(alumniId) {
    const userToEdit = alumni.find((user) => user.id === alumniId)
    if (userToEdit) {
      setEditInfo(userToEdit) 

      //populate form wiht current alumni info
      setFormData({
        name: userToEdit.name,
        username: userToEdit.username,
        email: userToEdit.email,
        phone: userToEdit.phone,
        website: userToEdit.website,
        street: userToEdit.address.street,
        suite: userToEdit.address.suite,
        city: userToEdit.address.city,
        zipcode: userToEdit.address.zipcode,
        latitude: userToEdit.address.geo.lat,
        longitude: userToEdit.address.geo.lng,
        companyName: userToEdit.company.name,
        catchphrase: userToEdit.company.catchPhrase,
        businessStrategy: userToEdit.company.bs,
      })

      //scroll to the form section
      handleAddAlumni() 
    }
  }

  //handle deleting an alumni from the list
  function handleDelete(alumniId, alumniIndex) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${alumniIndex}`)
    .then(response => {
      console.log(`Deleted ${response.data}`)
      setAlumni(prevAlumni => prevAlumni.filter(user => user.id !== alumniId))
    })
    .catch(err => console.log(err))
  }

  //handle submitting alumni info on submission of form
  const handleSubmit = (updatedData) => {
    const updatedAlumni = {
      ...updatedData,
      address: {
        street: updatedData.street,
        suite: updatedData.suite,
        city: updatedData.city,
        zipcode: updatedData.zipcode,
        geo: { lat: updatedData.latitude, lng: updatedData.longitude },
      },
      company: {
        name: updatedData.companyName,
        catchPhrase: updatedData.catchphrase,
        bs: updatedData.businessStrategy,
      },
    }
  
    //update existing alumni record
    if (editInfo) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${editInfo.id}`, updatedAlumni)
        .then(response => {
          setAlumni(prevAlumni =>
            prevAlumni.map(user =>
              user.id === editInfo.id ? response.data : user
            )
          )
          setEditInfo(null)
          setFormData(emptyFormData)
        })
        .catch(error => console.error('Error updating user:', error))
    } else {
      //add new alumni record
      const newId = alumni.length > 0 ? Math.max(...alumni.map(user => user.id)) + 1 : 1
  
      const newAlumni = { ...updatedAlumni, id: newId }
  
      axios.post('https://jsonplaceholder.typicode.com/users', newAlumni)
        .then(response => { console.log(response.data)
          setAlumni(prevAlumni => [...prevAlumni, newAlumni])
          setFormData(emptyFormData) //clear form
        })
        .catch(error => console.error('Error adding user:', error))
    }
  }
  
  //function to scroll to form
  function handleAddAlumni() {
    if (detailsFormRef.current) {
      detailsFormRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div>
      {/* Header Component */}
      <Header handleAddAlumni={handleAddAlumni} />

      {/* Table displaying alumni */}
      <DataTable details={alumni} handleEdit={handleEdit} handleDelete={handleDelete} />

      {/* Form section */}
      <div ref={detailsFormRef}>
        <DetailsForm
          editInfo={editInfo}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default App
