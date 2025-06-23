"use client";

import { useState } from "react";
import { DatabaseProvider } from "./contexts/DatabaseContext";
import ResponsiveDiscover, { BountyDisplayData } from "./components/ResponsiveDiscover";
import BountyDetails from "./components/BountyDetails";
import CreateBountyForm from "./components/CreateBountyForm";

type View = "discover" | "details";

function AppContent() {
  const [currentView, setCurrentView] = useState<View>("discover");
  const [selectedBounty, setSelectedBounty] = useState<BountyDisplayData | null>(null);
  const [showCreateBounty, setShowCreateBounty] = useState(false);

  const handleBountyClick = (bounty: BountyDisplayData) => {
    setSelectedBounty(bounty);
    setCurrentView("details");
  };

  const handleBackToDiscover = () => {
    setCurrentView("discover");
    setSelectedBounty(null);
  };

  const handleCreateBountyOpen = () => {
    setShowCreateBounty(true);
  };

  const handleCreateBountyClose = () => {
    setShowCreateBounty(false);
  };

  if (currentView === "details" && selectedBounty) {
    return (
      <>
        <BountyDetails
          bounty={selectedBounty}
          onBack={handleBackToDiscover}
        />
        {showCreateBounty && (
          <CreateBountyForm onClose={handleCreateBountyClose} />
        )}
      </>
    );
  }

  return (
    <>
      <ResponsiveDiscover 
        onBountyClick={handleBountyClick}
        onCreateBountyClick={handleCreateBountyOpen}
      />
      {showCreateBounty && (
        <CreateBountyForm onClose={handleCreateBountyClose} />
      )}
    </>
  );
}

export default function App() {
  return (
    <DatabaseProvider>
      <AppContent />
    </DatabaseProvider>
  );
}