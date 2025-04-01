import { useState } from "react";
import ProfileList from "./components/ProfileList";
import Map from "./components/map";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <ProfileProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Profile Map Explorer</h1>
        <ProfileList onProfileSelect={setSelectedProfile} />
        {selectedProfile && <Map selectedProfile={selectedProfile} />}
      </div>
    </ProfileProvider>
  );
}

export default App;
