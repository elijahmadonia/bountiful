"use client";

import { useState, useMemo } from "react";
import { Plus, Target, Clock, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import { useDatabase } from "../contexts/DatabaseContext";

export interface BountyDisplayData {
  id: string;
  title: string;
  description: string;
  goal: string;
  payout: string;
  deadline: string;
  author: string;
  participants: number;
  network: string;
}

type FilterType = "all" | "active" | "ending" | "highest";

function Header({ onCreateBountyClick }: { onCreateBountyClick: () => void }) {
  return (
    <div className="w-full border-b border-border bg-background sticky top-0 z-40">
      <div className="flex flex-row items-center justify-between p-4 md:p-6">
        <div className="flex flex-col gap-1">
          <div className="complication-label">Bounty Platform</div>
          <div className="complication-title text-xl md:text-2xl">Find Bounties</div>
        </div>
        <div className="flex flex-row gap-2 md:gap-3 items-center">
          <button 
            onClick={onCreateBountyClick}
            className="complication-card size-[40px] md:size-[44px] flex items-center justify-center hover:bg-secondary/50 transition-colors"
          >
            <Plus size={18} className="text-primary" />
          </button>
          <div className="size-[40px] md:size-[44px] rounded-lg bg-gradient-to-br from-primary/20 to-chart-4/20 flex items-center justify-center">
            <Target size={18} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterTabs({ activeFilter, onFilterChange }: { activeFilter: FilterType; onFilterChange: (filter: FilterType) => void }) {
  const filters = [
    { id: "all" as FilterType, icon: Target, label: "All", color: "text-primary" },
    { id: "active" as FilterType, icon: Star, label: "Active", color: "text-chart-2" },
    { id: "ending" as FilterType, icon: Clock, label: "Ending", color: "text-chart-1" },
    { id: "highest" as FilterType, icon: TrendingUp, label: "Highest", color: "text-chart-4" }
  ];

  return (
    <div className="w-full px-4 md:px-6 py-3 md:py-4 border-b border-border bg-background sticky top-[73px] md:static z-30">
      <div className="flex flex-row gap-2 md:gap-3 overflow-x-auto">
        {filters.map((filter) => {
          const IconComponent = filter.icon;
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`
                complication-card min-w-[100px] md:min-w-[120px] h-[70px] md:h-[80px] flex flex-col items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 transition-all flex-shrink-0
                ${isActive 
                  ? 'bg-secondary border-2 border-primary' 
                  : 'hover:bg-secondary/50'
                }
              `}
            >
              <IconComponent 
                size={16} 
                className={isActive ? 'text-primary' : filter.color}
              />
              <div className={`text-xs md:text-sm font-semibold ${
                isActive ? 'text-primary' : 'text-foreground'
              }`}>
                {filter.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MobileBountyCard({ bounty, onClick }: { bounty: BountyDisplayData; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="complication-card p-4 hover:bg-secondary/30 transition-all duration-200 text-left group w-full"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <div className="complication-label text-xs">Bounty</div>
          <ArrowRight size={12} className="text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
        </div>

        {/* Title */}
        <div className="complication-subtitle text-base leading-tight">
          {bounty.title}
        </div>

        {/* Stats Row */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground mb-0.5">GOAL</div>
            <div className="text-lg font-bold text-chart-2">{bounty.goal}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs text-muted-foreground mb-0.5">DUE</div>
            <div className="text-lg font-bold text-chart-1">{bounty.deadline}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-between items-center pt-2 border-t border-border/50">
          <div className="flex flex-row gap-2 items-center">
            <div className="size-2 rounded-full bg-primary"></div>
            <div className="text-sm text-muted-foreground truncate">{bounty.author}</div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Users size={10} className="text-muted-foreground" />
            <div className="text-sm text-muted-foreground">{bounty.participants}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

function DesktopBountyCard({ bounty, onClick }: { bounty: BountyDisplayData; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="complication-card p-6 hover:bg-secondary/30 transition-all duration-200 text-left group"
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <div className="complication-label">Bounty</div>
          <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        {/* Title */}
        <div className="complication-subtitle line-clamp-2 min-h-[48px]">
          {bounty.title}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground mb-1">GOAL</div>
            <div className="text-lg font-bold text-chart-2">{bounty.goal}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground mb-1">DUE</div>
            <div className="text-lg font-bold text-chart-1">{bounty.deadline}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-between items-center mt-auto pt-2 border-t border-border/50">
          <div className="flex flex-row gap-2 items-center">
            <div className="size-3 rounded-full bg-primary"></div>
            <div className="text-sm text-muted-foreground">{bounty.author}</div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Users size={12} className="text-muted-foreground" />
            <div className="text-sm text-muted-foreground">{bounty.participants}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

interface ResponsiveDiscoverProps {
  onBountyClick: (bounty: BountyDisplayData) => void;
  onCreateBountyClick: () => void;
}

export default function ResponsiveDiscover({ onBountyClick, onCreateBountyClick }: ResponsiveDiscoverProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { bounties, users, formatGoal, formatDeadline, isLoading } = useDatabase();

  // Transform bounties data using useMemo to avoid recalculation
  const displayBounties = useMemo(() => {
    if (isLoading || bounties.length === 0 || users.length === 0) {
      return [];
    }

    return bounties
      .filter(bounty => {
        if (activeFilter === "all") return bounty.status === 'active';
        if (activeFilter === "active") return bounty.status === 'active';
        if (activeFilter === "ending") return bounty.status === 'active';
        if (activeFilter === "highest") return bounty.status === 'active';
        return true;
      })
      .map(bounty => {
        const author = users.find(user => user.id === bounty.authorId);
        return {
          id: bounty.id,
          title: bounty.title,
          description: bounty.description,
          goal: formatGoal(bounty.goal),
          payout: bounty.payout,
          deadline: formatDeadline(bounty.deadline),
          author: author?.username || 'Unknown',
          participants: bounty.participants,
          network: bounty.network
        };
      });
  }, [bounties, users, formatGoal, formatDeadline, isLoading, activeFilter]);

  const sortedBounties = useMemo(() => {
    switch (activeFilter) {
      case "ending":
        return [...displayBounties].sort((a, b) => {
          const timeA = parseInt(a.deadline) || 0;
          const timeB = parseInt(b.deadline) || 0;
          return timeA - timeB;
        });
      case "highest":
        return [...displayBounties].sort((a, b) => {
          const goalA = parseInt(a.goal.replace('k', '')) || 0;
          const goalB = parseInt(b.goal.replace('k', '')) || 0;
          return goalB - goalA;
        });
      default:
        return [...displayBounties].sort((a, b) => b.id.localeCompare(a.id));
    }
  }, [displayBounties, activeFilter]);

  if (isLoading) {
    return (
      <div className="bg-background min-h-screen w-full flex items-center justify-center">
        <div className="complication-card p-8">
          <div className="complication-label mb-2">Loading</div>
          <div className="complication-title">Bounty Platform</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen w-full">
      <Header onCreateBountyClick={onCreateBountyClick} />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden">
        <div className="px-4 py-4 space-y-3 pb-safe">
          {sortedBounties.map((bounty) => (
            <MobileBountyCard 
              key={bounty.id} 
              bounty={bounty} 
              onClick={() => onBountyClick(bounty)}
            />
          ))}
          {sortedBounties.length === 0 && (
            <div className="complication-card p-8 text-center">
              <div className="complication-label mb-2">No Results</div>
              <div className="complication-title">No bounties found</div>
              <div className="text-sm text-muted-foreground mt-2">
                Try adjusting your filters or create a new bounty
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout - Grid */}
      <div className="hidden md:block">
        <div className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {sortedBounties.map((bounty) => (
              <DesktopBountyCard 
                key={bounty.id} 
                bounty={bounty} 
                onClick={() => onBountyClick(bounty)}
              />
            ))}
            {sortedBounties.length === 0 && (
              <div className="col-span-full">
                <div className="complication-card p-12 text-center">
                  <div className="complication-label mb-2">No Results</div>
                  <div className="complication-title">No bounties found</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Try adjusting your filters or create a new bounty
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}