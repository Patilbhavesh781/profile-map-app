import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

const ProfileList = ({ onProfileSelect }) => {
  const { profiles } = useContext(ProfileContext);

  return (
    <div className="grid grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <div key={profile._id} className="border p-4 rounded-lg">
          <img src={profile.image} alt={profile.name} className="w-full h-32 object-cover rounded-lg" />
          <h3 className="font-bold mt-2">{profile.name}</h3>
          <p>{profile.description}</p>
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded"
            onClick={() => onProfileSelect(profile)}
          >
            Show on Map
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
