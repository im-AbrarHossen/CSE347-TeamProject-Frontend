import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const ProfileUpdate = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("User not found!");
    setLoading(true);

    try {
      let photoURL = user?.photoURL || "";

      // Upload to ImageBB if a new image is selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        if (!data.success) throw new Error("Image upload failed");
        photoURL = data.data.display_url;
      }

      // Update Firebase Auth user
      const auth = getAuth();
      await updateProfile(auth.currentUser, { displayName: name, photoURL });

      // Update local context so UI updates instantly
      setUser({ ...user, displayName: name, photoURL });

      toast.success("Profile updated successfully!");
      setImageFile(null);
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 sm:p-8 bg-gray-700 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-green-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-green-700 hover:file:bg-green-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition-colors duration-300"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      {user?.photoURL && (
        <div className="mt-6 text-center">
          <p className="text-sm font-medium">Current Profile Picture:</p>
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mt-2 mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
