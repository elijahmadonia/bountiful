"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, User, Target, Clock, Users, Trophy, Send } from "lucide-react";
import { useDatabase } from "../contexts/DatabaseContext";
import { SubmissionWithAuthor } from "../lib/database";
import { BountyDisplayData } from "./ResponsiveDiscover";
import SubmitBountyModal from "./SubmitBountyModal";

interface BountyDetailsProps {
  bounty: BountyDisplayData;
  onBack: () => void;
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      className="complication-card px-4 py-3 hover:bg-secondary/50 transition-colors"
    >
      <div className="flex flex-row gap-2 items-center text-foreground">
        <ArrowLeft size={16} className="text-primary" />
        <div className="font-medium">Back</div>
      </div>
    </button>
  );
}

function BountyHeaderComplication({ bounty }: { bounty: BountyDisplayData }) {
  return (
    <div className="complication-card p-6">
      <div className="flex flex-col gap-4">
        <div className="complication-label">Bounty Details</div>
        
        <div className="complication-title text-2xl leading-tight">
          {bounty.title}
        </div>
        
        <div className="complication-body leading-relaxed">
          {bounty.description}. The world will soon use AI agents in everything we do. This bounty aims to build innovative solutions for the future of human-AI interaction.
        </div>

        <div className="flex flex-row gap-2 items-center pt-2 border-t border-border/50">
          <div className="size-4 rounded-full bg-primary"></div>
          <div className="complication-subtitle text-base">by {bounty.author}</div>
        </div>
      </div>
    </div>
  );
}

function BountyStatsComplication({ bounty }: { bounty: BountyDisplayData }) {
  return (
    <div className="complication-card p-6">
      <div className="flex flex-col gap-4 h-full">
        <div className="complication-label">Bounty Stats</div>
        
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center mb-2">
              <Target size={16} className="text-chart-2" />
              <div className="text-xs text-muted-foreground">GOAL</div>
            </div>
            <div className="text-3xl font-bold text-chart-2 mb-1">{bounty.goal}</div>
            <div className="text-sm text-muted-foreground">{bounty.payout}</div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center mb-2">
              <Clock size={16} className="text-chart-1" />
              <div className="text-xs text-muted-foreground">DEADLINE</div>
            </div>
            <div className="text-3xl font-bold text-chart-1 mb-1">{bounty.deadline}</div>
            <div className="text-sm text-muted-foreground">Days left</div>
          </div>
        </div>
        
        <div className="flex flex-row justify-between items-center pt-2 border-t border-border/50">
          <div className="flex flex-row gap-2 items-center">
            <Users size={14} className="text-muted-foreground" />
            <div className="text-sm text-muted-foreground">{bounty.participants} participants</div>
          </div>
          <div className="text-xs text-primary uppercase tracking-wider font-bold">Active</div>
        </div>
      </div>
    </div>
  );
}

function SubmissionItemComplication({ submission }: { submission: SubmissionWithAuthor }) {
  return (
    <div className="complication-card p-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-chart-4/20 flex items-center justify-center">
            <User size={18} className="text-primary" />
          </div>
          <div className="flex flex-col">
            <div className="complication-subtitle text-sm">{submission.author.username}</div>
            <div className="text-xs text-muted-foreground">Submitted</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-bold text-chart-4">{submission.author.xp}</div>
          <div className="text-xs text-muted-foreground">XP</div>
        </div>
      </div>
    </div>
  );
}

function SubmissionsComplication({ bountyId, submissionCount }: { bountyId: string; submissionCount: number }) {
  const { submissions, users } = useDatabase();

  const submissionsWithAuthors = useMemo(() => {
    return submissions
      .filter(submission => submission.bountyId === bountyId)
      .map(submission => {
        const author = users.find(user => user.id === submission.authorId);
        if (!author) return null;
        return { ...submission, author };
      })
      .filter((s): s is SubmissionWithAuthor => s !== null);
  }, [submissions, users, bountyId]);

  return (
    <div className="space-y-3">
      {submissionsWithAuthors.map((submission) => (
        <SubmissionItemComplication key={submission.id} submission={submission} />
      ))}
      
      {submissionsWithAuthors.length === 0 && (
        <div className="complication-card p-6 text-center">
          <div className="size-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-3">
            <Users size={24} className="text-muted-foreground" />
          </div>
          <div className="complication-body">No submissions yet</div>
          <div className="text-xs text-muted-foreground mt-1">Be the first to participate!</div>
        </div>
      )}
    </div>
  );
}

function StickySubmitButton({ bounty, onSubmitClick }: { bounty: BountyDisplayData; onSubmitClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onSubmitClick}
          className="w-full bg-chart-2 hover:bg-chart-2/90 rounded-2xl p-6 transition-all duration-200 active:scale-[0.98] shadow-lg"
        >
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="size-8 rounded-full bg-black/10 flex items-center justify-center">
              <Send size={18} className="text-black" />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-black font-bold text-lg leading-tight">
                Submit Entry
              </div>
              <div className="text-black/70 text-sm font-medium">
                Join this bounty challenge
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function BountyDetails({ bounty, onBack }: BountyDetailsProps) {
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const handleSubmitClick = () => {
    setShowSubmitModal(true);
  };

  const handleModalClose = () => {
    setShowSubmitModal(false);
  };

  const handleSubmissionSuccess = () => {
    // Could add success toast or refresh submissions here
    console.log('Submission successful!');
  };

  return (
    <div className="bg-background min-h-screen w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="pb-32"> {/* Extra padding for sticky button */}
          {/* Header with Back Button */}
          <div className="p-4 border-b border-border bg-background sticky top-0 z-40">
            <BackButton onBack={onBack} />
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <BountyHeaderComplication bounty={bounty} />
            <BountyStatsComplication bounty={bounty} />
            <SubmissionsComplication bountyId={bounty.id} submissionCount={bounty.participants} />
          </div>
        </div>

        {/* Sticky Submit Button */}
        <StickySubmitButton bounty={bounty} onSubmitClick={handleSubmitClick} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="pb-32"> {/* Extra padding for sticky button */}
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-6">
              <BackButton onBack={onBack} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <BountyHeaderComplication bounty={bounty} />
                <BountyStatsComplication bounty={bounty} />
              </div>

              {/* Right Column - Submissions */}
              <div className="lg:col-span-1">
                <SubmissionsComplication bountyId={bounty.id} submissionCount={bounty.participants} />
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Submit Button */}
        <StickySubmitButton bounty={bounty} onSubmitClick={handleSubmitClick} />
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <SubmitBountyModal
          bounty={bounty}
          onClose={handleModalClose}
          onSuccess={handleSubmissionSuccess}
        />
      )}
    </div>
  );
}