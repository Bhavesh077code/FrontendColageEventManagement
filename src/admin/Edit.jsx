
// frontend/src/admin/Edit.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import BASE_URL from "../api";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  // Fetch existing event
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/event/${id}`);

        setForm({
          title: res.data.event.title,
          description: res.data.event.description,
          location: res.data.event.location,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [id, token]);

  console.log(AxiosError)
  console.log("Fetching event ID:", id);
  console.log("GET URL:", `${BASE_URL}/event/event/edit/${id}`);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.put(
        `${BASE_URL}/event/event/edit/${id}`,
        form,
      );

      alert(res.data.message);
      navigate("/admindashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Error updating event");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/70 to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Event</h2>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
          required
        />

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full mb-6 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg font-semibold"
        >
          {loading ? "Updating..." : "Update Event"}
        </button>
      </form>
    </div>
  );
}
