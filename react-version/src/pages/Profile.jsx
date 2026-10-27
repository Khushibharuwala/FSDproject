import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../hooks";
import "./Profile.css";

function Profile() {
  usePageTitle("My Profile - SkillConnect");
  const navigate = useNavigate();
  const fileInput = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    course: "",
    about: "",
    teachSkills: "",
    learnSkills: "",
  });
  const [display, setDisplay] = useState({
    name: "Your Name",
    college: "Your College",
    course: "Your Course",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay({
      name: form.name,
      college: form.college,
      course: form.course,
    });
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-photo">
            {photo ? <img src={photo} alt="Profile Photo" /> : "👤"}
          </div>

          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handlePhoto}
          />

          <button
            type="button"
            className="photo-btn"
            onClick={() => fileInput.current.click()}
          >
            📷 Upload Profile Photo
          </button>

          <h1>{display.name}</h1>
          <p>{display.college}</p>
          <p>{display.course}</p>
        </div>

        <div className="profile-card">
          <h2 className="section-title">Personal Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>College</label>
                <input
                  type="text"
                  name="college"
                  placeholder="Enter your college"
                  value={form.college}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Course</label>
                <input
                  type="text"
                  name="course"
                  placeholder="Example: B.Tech CSE"
                  value={form.course}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>About Me</label>
              <textarea
                name="about"
                placeholder="Tell something about yourself..."
                value={form.about}
                onChange={handleChange}
              ></textarea>
            </div>

            <h2 className="section-title">Skills</h2>

            <div className="form-group">
              <label>Skills I Can Teach</label>
              <input
                type="text"
                name="teachSkills"
                placeholder="Example: C++, Python, React"
                value={form.teachSkills}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Skills I Want to Learn</label>
              <input
                type="text"
                name="learnSkills"
                placeholder="Example: Java, Node.js, AI"
                value={form.learnSkills}
                onChange={handleChange}
              />
            </div>

            <div className="button-container">
              <button type="submit" className="save-btn">
                💾 Save Profile
              </button>

              <button
                type="button"
                className="back-btn"
                onClick={() => navigate("/")}
              >
                ← Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
