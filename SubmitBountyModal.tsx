"use client";

import { useState } from "react";
import { X, Send, FileText, Link, User } from "lucide-react";
import { useDatabase } from "../contexts/DatabaseContext";
import { BountyDisplayData } from "./ResponsiveDiscover";

interface SubmitBountyModalProps {
  bounty: BountyDisplayData;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function SubmitBountyModal({ bounty, onClose, onSuccess }: SubmitBountyModalProps) {
  const { createSubmission } = useDatabase();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    repositoryUrl: '',
    demoUrl: '',
    additionalNotes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in the title and description fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Create submission content from form data
      const submissionContent = {
        title: formData.title,
        description: formData.description,
        repositoryUrl: formData.repositoryUrl,
        demoUrl: formData.demoUrl,
        additionalNotes: formData.additionalNotes,
        submittedAt: new Date().toISOString()
      };

      createSubmission({
        bountyId: bounty.id,
        authorId: '1', // Current user ID - this would be dynamic in a real app
        content: JSON.stringify(submissionContent),
        status: 'pending'
      });

      onSuccess?.();
      onClose();
      alert('Submission created successfully!');
    } catch (error) {
      console.error('Failed to create submission:', error);
      alert('Failed to create submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300 md:animate-in md:slide-in-from-bottom-0 md:zoom-in-95">
        <div className="complication-card">
          {/* Header */}
          <div className="flex flex-row items-center justify-between p-6 border-b border-border">
            <div className="flex flex-col gap-1">
              <div className="complication-label">Submit Entry</div>
              <div className="complication-title text-xl">{bounty.title}</div>
            </div>
            <button
              onClick={onClose}
              className="size-10 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-foreground" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Submission Title */}
            <div className="space-y-2">
              <label htmlFor="title" className="complication-label block">
                Submission Title *
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Give your submission a descriptive title"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="complication-label block">
                Description *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full p-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Describe your solution, approach, and key features..."
                required
              />
            </div>

            {/* Repository URL */}
            <div className="space-y-2">
              <label htmlFor="repositoryUrl" className="complication-label block">
                Repository URL
              </label>
              <div className="relative">
                <Link size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  id="repositoryUrl"
                  type="url"
                  value={formData.repositoryUrl}
                  onChange={(e) => handleInputChange('repositoryUrl', e.target.value)}
                  className="w-full p-4 pl-12 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            {/* Demo URL */}
            <div className="space-y-2">
              <label htmlFor="demoUrl" className="complication-label block">
                Demo URL
              </label>
              <div className="relative">
                <Link size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  id="demoUrl"
                  type="url"
                  value={formData.demoUrl}
                  onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                  className="w-full p-4 pl-12 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://your-demo.com"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="complication-label block">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={3}
                className="w-full p-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Any additional information, challenges faced, or future improvements..."
              />
            </div>

            {/* Bounty Info Card */}
            <div className="complication-card p-4 bg-secondary/20">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs text-muted-foreground mb-1">BOUNTY GOAL</div>
                  <div className="font-bold text-chart-2">{bounty.goal}</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-xs text-muted-foreground mb-1">DEADLINE</div>
                  <div className="font-bold text-chart-1">{bounty.deadline}</div>
                </div>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="flex flex-row gap-3 p-6 border-t border-border bg-background">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.title.trim() || !formData.description.trim()}
              className="flex-1 p-4 rounded-lg bg-chart-2 hover:bg-chart-2/90 text-black font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {isSubmitting ? 'Submitting...' : 'Submit Entry'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}