
import { Bell, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

const UploadEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !location || !imageFile) {
      setMessage("All fields are required!");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ Token not found. Please login again.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", imageFile);

    try {

      const res = await fetch("http://192.168.1.86:8000/event/event", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // ⚠️ Note: Do NOT set 'Content-Type' here when using FormData
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(`❌ ${data.message || "Upload failed"}`);
        return;
      }

      setMessage("✅ Event created successfully!");

      setTitle("");
      setDescription("");
      setLocation("");
      setImageFile(null);

      navigate("/admindashboard");
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <a className="rounded-lg" href="/admindashboard">🔙</a>

          <h2 className="text-2xl font-bold text-center mb-6 text-yellow-800">
            Create Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              className="bg-green-500 w-50 rounded-lg"
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-lg"
            >
              Upload Event
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm font-medium">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadEvent;

