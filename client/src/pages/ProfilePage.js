import { useEffect, useState } from "react"

const ProfilePage = ({user}) => {
  const [ formData, setFormData ] = useState({ email: "", password: "", name: "", location: "" })
  const [ updateResult, setUpdateResult ] = useState("")

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const update = async (e) => {
    e?.preventDefault()
    const resp = await fetch(`/api/user/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if( !resp.ok ){
      return setUpdateResult("fail")
    }
    setUpdateResult("success")
  }

  useEffect(() => {
    if( user ) setFormData({ ...formData, email: user.email, 
      name: user.name, location: user.location 
    })
    // if( user?.name ) setFormData({ ...formData, name: user.name})

  }, [user])

  return (
    <>
      <h1>Your Profile</h1>

      <div style={{ width: "50%"}}>
        <form onSubmit={update} className="mb-2">
          <div className="form-group mb-2">
            <label>Email Address</label>
            <input 
              type="text" 
              className="form-control" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Location</label>
            <input 
              type="text" 
              className="form-control" 
              name="location" 
              value={formData.location} 
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-2">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </form>

        { updateResult === "success" && (
          <div className="alert alert-success" role="alert">
            Update successful!
          </div>
        )}

        { updateResult === "fail" && (
          <div className="alert alert-danger" role="alert">
            Update failed!
          </div>
        )}
      </div>
    </>
  )
}

export default ProfilePage