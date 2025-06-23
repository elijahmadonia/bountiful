"use client";

import { useState, useEffect } from "react";
import { X, Target, DollarSign, Calendar, FileText, User } from "lucide-react";
import { useDatabase } from "../contexts/DatabaseContext";

interface CreateBountyFormProps {
  onClose: () => void;
}

export default function CreateBountyForm({ onClose }: CreateBountyFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createBounty } = useDatabase();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    payout: "",
    deadline: "",
    network: "Ethereum"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Trigger slide-up animation after mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.goal) {
      newErrors.goal = "Goal amount is required";
    } else if (isNaN(Number(formData.goal)) || Number(formData.goal) <= 0) {
      newErrors.goal = "Goal must be a positive number";
    }

    if (!formData.payout.trim()) {
      newErrors.payout = "Payout information is required";
    }

    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required";
    } else {
      const deadlineDate = new Date(formData.deadline);
      const today = new Date();
      if (deadlineDate <= today) {
        newErrors.deadline = "Deadline must be in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      createBounty({
        title: formData.title,
        description: formData.description,
        goal: Number(formData.goal),
        payout: formData.payout,
        deadline: new Date(formData.deadline),
        authorId: '1', // This would be the current user's ID
        participants: 0,
        network: formData.network,
        status: 'active'
      });

      handleClose();
    } catch (error) {
      console.error('Failed to create bounty:', error);
      alert('Failed to create bounty. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible && !isClosing ? 'bg-opacity-70' : 'bg-opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Form Container */}
      <div 
        className={`relative w-full max-w-2xl mx-4 mb-4 md:mb-8 transform transition-all duration-300 ease-out ${
          isVisible && !isClosing 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="complication-card overflow-hidden max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex flex-row items-center justify-between p-6 border-b border-border">
            <div className="flex flex-col gap-1">
              <div className="complication-label">New Bounty</div>
              <div className="complication-title">Create Bounty</div>
            </div>
            <button
              onClick={handleClose}
              className="complication-card size-[44px] flex items-center justify-center hover:bg-secondary/50 transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title Field */}
              <div className="space-y-3">
                <div className="complication-label">Bounty Title</div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Target size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter bounty title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className={`
                      w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                      text-foreground placeholder-muted-foreground
                      focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                      transition-colors
                      ${errors.title ? 'border-destructive' : ''}
                    `}
                  />
                </div>
                {errors.title && (
                  <div className="text-sm text-destructive">{errors.title}</div>
                )}
              </div>

              {/* Description Field */}
              <div className="space-y-3">
                <div className="complication-label">Description</div>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <FileText size={18} className="text-muted-foreground" />
                  </div>
                  <textarea
                    placeholder="Describe your bounty requirements..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className={`
                      w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                      text-foreground placeholder-muted-foreground
                      focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                      transition-colors resize-none
                      ${errors.description ? 'border-destructive' : ''}
                    `}
                  />
                </div>
                {errors.description && (
                  <div className="text-sm text-destructive">{errors.description}</div>
                )}
              </div>

              {/* Goal and Payout Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Goal Field */}
                <div className="space-y-3">
                  <div className="complication-label">Goal Amount (ETH)</div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <DollarSign size={18} className="text-muted-foreground" />
                    </div>
                    <input
                      type="number"
                      placeholder="5.0"
                      value={formData.goal}
                      onChange={(e) => handleInputChange('goal', e.target.value)}
                      step="0.1"
                      min="0"
                      className={`
                        w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                        text-foreground placeholder-muted-foreground
                        focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                        transition-colors
                        ${errors.goal ? 'border-destructive' : ''}
                      `}
                    />
                  </div>
                  {errors.goal && (
                    <div className="text-sm text-destructive">{errors.goal}</div>
                  )}
                </div>

                {/* Payout Field */}
                <div className="space-y-3">
                  <div className="complication-label">Payout Details</div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <User size={18} className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      placeholder="Winner takes all"
                      value={formData.payout}
                      onChange={(e) => handleInputChange('payout', e.target.value)}
                      className={`
                        w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                        text-foreground placeholder-muted-foreground
                        focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                        transition-colors
                        ${errors.payout ? 'border-destructive' : ''}
                      `}
                    />
                  </div>
                  {errors.payout && (
                    <div className="text-sm text-destructive">{errors.payout}</div>
                  )}
                </div>
              </div>

              {/* Deadline Field */}
              <div className="space-y-3">
                <div className="complication-label">Deadline</div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Calendar size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    type="datetime-local"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className={`
                      w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                      text-foreground placeholder-muted-foreground
                      focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                      transition-colors
                      ${errors.deadline ? 'border-destructive' : ''}
                    `}
                  />
                </div>
                {errors.deadline && (
                  <div className="text-sm text-destructive">{errors.deadline}</div>
                )}
              </div>

              {/* Network Selection */}
              <div className="space-y-3">
                <div className="complication-label">Network</div>
                <select
                  value={formData.network}
                  onChange={(e) => handleInputChange('network', e.target.value)}
                  className="w-full px-4 py-4 bg-input border border-border rounded-lg text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Polygon">Polygon</option>
                  <option value="Arbitrum">Arbitrum</option>
                  <option value="Optimism">Optimism</option>
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full complication-card p-6 hover:bg-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col text-left">
                    <div className="complication-label mb-1">Action</div>
                    <div className="complication-title">
                      {isSubmitting ? 'Creating...' : 'Create Bounty'}
                    </div>
                    <div className="text-sm text-muted-foreground">Launch your bounty challenge</div>
                  </div>
                  <div className="size-12 rounded-full bg-chart-2/20 flex items-center justify-center group-hover:bg-chart-2/30 transition-colors">
                    <Target size={20} className="text-chart-2" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}