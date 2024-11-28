import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DetailsForm from './components/DetailsForm';
import DataTable from './components/DataTable';
import Header from './components/Header';

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
  const [editInfo, setEditInfo] = useState(null)
  const [alumni, setAlumni] = useState([])
  const [formData, setFormData] = useState(emptyFormData)
  const detailsFormRef = useRef(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setAlumni(response.data))
      .catch(error => console.error('Error fetching alumni:', error))
  }, [])

  function handleEdit(alumniId) {
    const userToEdit = alumni.find((user) => user.id === alumniId)
    if (userToEdit) {
      setEditInfo(userToEdit) 
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
      handleAddAlumni() 
    }
  }

  function handleDelete(alumniId, alumniIndex) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${alumniIndex}`)
    .then(response => {
      console.log(`Deleted ${response.data}`)
      setAlumni(prevAlumni => prevAlumni.filter(user => user.id !== alumniId))
    })
    
    .catch(err => console.log(err))
  }

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
      const newId = alumni.length > 0 ? Math.max(...alumni.map(user => user.id)) + 1 : 1
  
      const newAlumni = { ...updatedAlumni, id: newId }
  
      axios.post('https://jsonplaceholder.typicode.com/users', newAlumni)
        .then(response => { console.log(response.data)
          setAlumni(prevAlumni => [...prevAlumni, newAlumni])
          setFormData(emptyFormData)
        })
        .catch(error => console.error('Error adding user:', error))
    }
  }
  

  function handleAddAlumni() {
    if (detailsFormRef.current) {
      detailsFormRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div>
      <Header handleAddAlumni={handleAddAlumni} />

      <DataTable details={alumni} handleEdit={handleEdit} handleDelete={handleDelete} />

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
