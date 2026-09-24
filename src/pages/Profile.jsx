import { useState } from "react";

function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Alex Johnson");

  return (
    <main className="container py-5">
      <h1>Profile</h1>

      <div className="card mt-3">
        <div className="card-body p-4">
          <h3>{name}</h3>
          <p className="text-muted">Frontend Developer</p>

          <hr />

          {editing ? (
            <>
              <label className="form-label">Name</label>

              <input
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />

              <button
                className="btn btn-primary mt-3"
                onClick={() => setEditing(false)}
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <p>Email: alex.johnson@example.com</p>
              <p>Phone: +92 300 1234567</p>
              <p>Location: Karachi, Pakistan</p>

              <button
                className="btn btn-outline-primary"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Profile;