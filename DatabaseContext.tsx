"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { db, Bounty, User, Submission, BountyWithAuthor, SubmissionWithAuthor, getBountyWithAuthor, getSubmissionsWithAuthors } from '../lib/database';

interface DatabaseContextType {
  // Data state
  bounties: Bounty[];
  users: User[];
  submissions: Submission[];
  isLoading: boolean;
  
  // Operations that modify data
  createBounty: (bounty: Omit<Bounty, 'id' | 'createdAt' | 'updatedAt'>) => Bounty;
  updateBounty: (id: string, updates: Partial<Bounty>) => Bounty | undefined;
  deleteBounty: (id: string) => boolean;
  createUser: (user: Omit<User, 'id' | 'createdAt'>) => User;
  updateUser: (id: string, updates: Partial<User>) => User | undefined;
  createSubmission: (submission: Omit<Submission, 'id' | 'submittedAt'>) => Submission;
  updateSubmission: (id: string, updates: Partial<Submission>) => Submission | undefined;
  
  // Direct database access (for read operations)
  getBountyById: (id: string) => Bounty | undefined;
  getUserById: (id: string) => User | undefined;
  getUserByUsername: (username: string) => User | undefined;
  getSubmissionsByBountyId: (bountyId: string) => Submission[];
  getBountyWithAuthor: (id: string) => BountyWithAuthor | undefined;
  getSubmissionsWithAuthors: (bountyId: string) => SubmissionWithAuthor[];
  
  // Utility functions
  formatGoal: (goal: number) => string;
  formatDeadline: (deadline: Date) => string;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data once
  useEffect(() => {
    try {
      setBounties(db.getBounties());
      setUsers(db.getUsers());
      setSubmissions(db.getSubmissions());
    } catch (error) {
      console.error('Failed to load database:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to refresh all data
  const refreshAllData = () => {
    setBounties(db.getBounties());
    setUsers(db.getUsers());
    setSubmissions(db.getSubmissions());
  };

  // Create operations that update state
  const createBounty = (bountyData: Omit<Bounty, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newBounty = db.createBounty(bountyData);
    setBounties(db.getBounties());
    return newBounty;
  };

  const updateBounty = (id: string, updates: Partial<Bounty>) => {
    const updated = db.updateBounty(id, updates);
    if (updated) {
      setBounties(db.getBounties());
    }
    return updated;
  };

  const deleteBounty = (id: string) => {
    const deleted = db.deleteBounty(id);
    if (deleted) {
      setBounties(db.getBounties());
    }
    return deleted;
  };

  const createUser = (userData: Omit<User, 'id' | 'createdAt'>) => {
    const newUser = db.createUser(userData);
    setUsers(db.getUsers());
    return newUser;
  };

  const updateUser = (id: string, updates: Partial<User>) => {
    const updated = db.updateUser(id, updates);
    if (updated) {
      setUsers(db.getUsers());
    }
    return updated;
  };

  const createSubmission = (submissionData: Omit<Submission, 'id' | 'submittedAt'>) => {
    const newSubmission = db.createSubmission(submissionData);
    setSubmissions(db.getSubmissions());
    return newSubmission;
  };

  const updateSubmission = (id: string, updates: Partial<Submission>) => {
    const updated = db.updateSubmission(id, updates);
    if (updated) {
      setSubmissions(db.getSubmissions());
    }
    return updated;
  };

  const contextValue: DatabaseContextType = {
    // Data state
    bounties,
    users,
    submissions,
    isLoading,
    
    // Operations that modify data
    createBounty,
    updateBounty,
    deleteBounty,
    createUser,
    updateUser,
    createSubmission,
    updateSubmission,
    
    // Direct database access (read-only operations)
    getBountyById: db.getBountyById.bind(db),
    getUserById: db.getUserById.bind(db),
    getUserByUsername: db.getUserByUsername.bind(db),
    getSubmissionsByBountyId: db.getSubmissionsByBountyId.bind(db),
    getBountyWithAuthor,
    getSubmissionsWithAuthors,
    
    // Utility functions
    formatGoal: db.formatGoal.bind(db),
    formatDeadline: db.formatDeadline.bind(db)
  };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}