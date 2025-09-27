import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded shadow">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center">{user.name}</h2>
      <p className="text-center text-gray-600">{user.email}</p>
    </div>
  );
}

export default Profile;
