//EVENT ID
/*
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { socket, connectSocket } from "../socket";
import BASE_URL from "../api";
import { useNavigate } from "react-router-dom"; // agar pehle se use kar rahe ho to uncomment

export default function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ added

  const currentDate = new Date().toLocaleDateString();
  // const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (token) connectSocket(token)

    socket.on("newEvent", (data) => {
      alert(`🔔 New Event: ${data.title}`);
    });

    return () => {
      socket.off("newEvent");
    };
  }, []);

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (token) connectSocket(token);

    socket.on("newEvent", (data) => {
      console.log("New Event Received:", data);
      setEvents((prev) => [data, ...prev]);
    });

    return () => socket.off("newEvent");
  }, []);

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (token) connectSocket(token);

    const fetchEvents = async () => {
      try {
        setLoading(true); // ✅ start loading


        if (!token) {
          setMessage("❌ Token not found. Please login again.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${BASE_URL}/event/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });


        const data = await res.json();

        if (!res.ok) {
          setMessage(`❌ ${data.message || "Failed to fetch events"}`);
          setLoading(false);
          return;
        }

        setEvents(data.events);
        setLoading(false); // ✅ stop loading
      } catch (error) {
        console.error(error);
        setMessage("❌ Server error. Try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (token) connectSocket(token);

    socket.on("deleteEvent", (id) => {
      alert("Event Deleted");
      setEvents((prev) => prev.filter((event) => event._id !== id));
    });

    return () => socket.off("deleteEvent");
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${BASE_URL}/event/event/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Delete error:", text);
        alert("Delete failed! Check server.");
        return;
      }

      const data = await res.json();
      console.log("Delete success:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500">Browse upcoming events.</p>
          </div>

          <button className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700">
            <a href="/upload">Upload Event</a>
          </button>
        </div>

        {message && (
          <p className="mb-4 text-red-600 text-sm font-medium">{message}</p>
        )}

        
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>

                <div className="p-4 space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>

                  <div className="flex gap-3 mt-4">
                    <div className="h-8 w-20 bg-gray-300 rounded"></div>
                    <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm shadow">
                    {currentDate}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-500 text-sm">{event.location}</p>

                  <p className="mt-2 text-gray-700">
                    {expandedId === event._id
                      ? event.description
                      : event.description.slice(0, 120) + "..."}
                  </p>

                  {event.description.length > 120 && (
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === event._id ? null : event._id
                        )
                      }
                      className="text-blue-600 text-sm font-medium mt-1"
                    >
                      {expandedId === event._id ? "See Less" : "See More"}
                    </button>
                  )}

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => navigate(`/edit/${event._id}`)}
                      className="px-4 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                       onClick={() => navigate(`/edit/${event._id}`)}
                      className="px-4 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
*/

/*
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { socket, connectSocket } from "../socket";
import BASE_URL from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentDate = new Date().toLocaleDateString();

  // ✅ SINGLE SOCKET CONNECTION (FIXED)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) connectSocket(token);

    socket.on("newEvent", (data) => {
      alert(`🔔 New Event: ${data.title}`);
      setEvents((prev) => [data, ...prev]); // 🔥 realtime add
    });

    socket.on("deleteEvent", (id) => {
      alert("Event Deleted");
      setEvents((prev) => prev.filter((event) => event._id !== id));
    });

    return () => {
      socket.off("newEvent");
      socket.off("deleteEvent");
    };
  }, []);

  // ✅ FETCH EVENTS
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        if (!token) {
          setMessage("❌ Token not found. Please login again.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${BASE_URL}/event/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          setMessage(`❌ ${data.message || "Failed to fetch events"}`);
          setLoading(false);
          return;
        }

        setEvents(data.events || []); // ✅ safe
        setLoading(false);
      } catch (error) {
        console.error(error);
        setMessage("❌ Server error. Try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ DELETE FUNCTION (FIXED BUTTON USE)
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/event/event/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Delete error:", text);
        alert("Delete failed! Check server.");
        return;
      }

      const data = await res.json();
      console.log("Delete success:", data);

      // 🔥 UI update instantly
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500">Browse upcoming events.</p>
          </div>

          <button className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700">
            <a href="/upload">Upload Event</a>
          </button>
        </div>

        {message && (
          <p className="mb-4 text-red-600 text-sm font-medium">{message}</p>
        )}

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>

                <div className="p-4 space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>

                  <div className="flex gap-3 mt-4">
                    <div className="h-8 w-20 bg-gray-300 rounded"></div>
                    <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {events.length === 0 ? (
              <p className="text-gray-500">No Events Available</p>
            ) : (
              events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white rounded-2xl shadow overflow-hidden"
                >
                  <div className="relative">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    {event.video && (
                      <video controls className="w-full max-h-80 bg-black">
                        <source src={event.video} />
                      </video>
                    )}

                    {!event.image && !event.video && (
                      <img
                        src="https://via.placeholder.com/400x200"
                        alt="No media"
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm shadow">
                      {currentDate}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold">
                      {event.title || "Untitled Event"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {event.location || "No location"}
                    </p>

                    <p className="mt-2 text-gray-700">
                      {expandedId === event._id
                        ? event.description
                        : (event.description || "").slice(0, 120) + "..."}
                    </p>

                    {event.description?.length > 120 && (
                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === event._id ? null : event._id,
                          )
                        }
                        className="text-blue-600 text-sm font-medium mt-1"
                      >
                        {expandedId === event._id ? "See Less" : "See More"}
                      </button>
                    )}

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => navigate(`/edit/${event._id}`)}
                        className="px-4 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(event._id)} // ✅ FIXED
                        className="px-4 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

*/


import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { socket, connectSocket } from "../socket";
import BASE_URL from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Preview State
  const [previewMedia, setPreviewMedia] = useState(null); 

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) connectSocket(token);

    socket.on("newEvent", (data) => {
      setEvents((prev) => [data, ...prev]);
    });

    socket.on("deleteEvent", (id) => {
      setEvents((prev) => prev.filter((event) => event._id !== id));
    });

    return () => {
      socket.off("newEvent");
      socket.off("deleteEvent");
    };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          setMessage("❌ Token not found. Please login.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${BASE_URL}/event/events`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) setEvents(data.events || []);
        setLoading(false);
      } catch (error) {
        setMessage("❌ Server error.");
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${BASE_URL}/event/event/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      alert("Delete failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Header />

      {/* Preview Modal */}
      {previewMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setPreviewMedia(null)}
        >
          <button className="absolute top-5 right-5 text-white text-3xl font-bold">✕</button>
          {previewMedia.type === 'image' ? (
            <img src={previewMedia.url} className="max-w-full max-h-[80vh] object-contain" />
          ) : (
            <video src={previewMedia.url} controls autoPlay className="max-w-full max-h-[80vh]" />
          )}
        </div>
      )}

      <main className="p-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6 bg-white p-5 rounded-3xl shadow-sm border border-gray-200">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">Feed</h2>
            <p className="text-xs text-gray-400 uppercase tracking-widest">{currentDate}</p>
          </div>
          <button 
            onClick={() => navigate("/upload")}
            className="px-6 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-gray-800 transition shadow-lg"
          >
            + Create
          </button>
        </div>

        {message && <p className="mb-4 text-red-500 text-center text-sm">{message}</p>}

        {loading ? (
          <div className="space-y-6">
            {[1, 2].map((i) => <div key={i} className="h-80 bg-gray-200 rounded-3xl animate-pulse" />)}
          </div>
        ) : (
          <div className="space-y-8">
            {events.map((event) => (
              <article key={event._id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Clickable Media */}
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (event.image) setPreviewMedia({ url: event.image, type: 'image' });
                    if (event.video) setPreviewMedia({ url: event.video, type: 'video' });
                  }}
                >
                  {event.image && <img src={event.image} alt={event.title} className="w-full h-80 object-cover" />}
                  {event.video && (
                    <div className="w-full h-80 bg-black flex items-center justify-center text-white">▶ Play Video</div>
                  )}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white font-bold bg-black/50 px-4 py-1 rounded-full text-xs">Full Screen</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-xs text-blue-600 font-medium uppercase">{event.location}</p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {expandedId === event._id ? event.description : (event.description || "").slice(0, 100) + "..."}
                    {event.description?.length > 100 && (
                      <button onClick={() => setExpandedId(expandedId === event._id ? null : event._id)} className="ml-1 text-gray-400 font-semibold hover:text-black">
                        {expandedId === event._id ? "less" : "more"}
                      </button>
                    )}
                  </p>

                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
                    <button onClick={() => navigate(`/edit/${event._id}`)} className="flex-1 py-2 text-sm font-semibold rounded-xl bg-gray-100 hover:bg-gray-200">Edit</button>
                    <button onClick={() => handleDelete(event._id)} className="flex-1 py-2 text-sm font-semibold rounded-xl bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
