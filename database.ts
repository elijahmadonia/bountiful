// Database types
export interface User {
  id: string;
  username: string;
  email: string;
  xp: number;
  avatar?: string;
  createdAt: Date;
}

export interface Bounty {
  id: string;
  title: string;
  description: string;
  goal: number; // Amount in USD
  payout: string;
  deadline: Date;
  authorId: string;
  participants: number;
  network: string;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Submission {
  id: string;
  bountyId: string;
  authorId: string;
  content: string;
  submittedAt: Date;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface DatabaseSchema {
  users: User[];
  bounties: Bounty[];
  submissions: Submission[];
}

// Database service class
class DatabaseService {
  private static instance: DatabaseService;
  private data: DatabaseSchema;
  private readonly STORAGE_KEY = 'bounty_app_db';

  constructor() {
    this.data = this.loadFromStorage();
    this.initializeData();
  }

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  private loadFromStorage(): DatabaseSchema {
    if (typeof window === 'undefined') {
      return { users: [], bounties: [], submissions: [] };
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        parsed.bounties = parsed.bounties?.map((b: any) => ({
          ...b,
          deadline: new Date(b.deadline),
          createdAt: new Date(b.createdAt),
          updatedAt: new Date(b.updatedAt)
        })) || [];
        parsed.users = parsed.users?.map((u: any) => ({
          ...u,
          createdAt: new Date(u.createdAt)
        })) || [];
        parsed.submissions = parsed.submissions?.map((s: any) => ({
          ...s,
          submittedAt: new Date(s.submittedAt)
        })) || [];
        return parsed;
      }
    } catch (error) {
      console.error('Failed to load from storage:', error);
    }
    
    return { users: [], bounties: [], submissions: [] };
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (error) {
      console.error('Failed to save to storage:', error);
    }
  }

  private initializeData(): void {
    if (this.data.users.length === 0) {
      // Seed users
      this.data.users = [
        {
          id: '1',
          username: 'daveasy12',
          email: 'dave@example.com',
          xp: 1000,
          createdAt: new Date('2024-01-15')
        },
        {
          id: '2',
          username: 'cryptodev',
          email: 'crypto@example.com',
          xp: 850,
          createdAt: new Date('2024-02-01')
        },
        {
          id: '3',
          username: 'nftbuilder',
          email: 'nft@example.com',
          xp: 1200,
          createdAt: new Date('2024-01-20')
        },
        {
          id: '4',
          username: 'aitrader',
          email: 'ai@example.com',
          xp: 950,
          createdAt: new Date('2024-02-10')
        },
        {
          id: '5',
          username: 'bridgemaster',
          email: 'bridge@example.com',
          xp: 1350,
          createdAt: new Date('2024-01-05')
        }
      ];
    }

    if (this.data.bounties.length === 0) {
      // Seed bounties
      this.data.bounties = [
        {
          id: '1',
          title: 'ElizaOS Agent App',
          description: 'Building the app layer for the AI Agent world',
          goal: 25000,
          payout: 'Payout',
          deadline: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000), // 6 months
          authorId: '1',
          participants: 425,
          network: 'Polygon',
          status: 'active',
          createdAt: new Date('2024-06-01'),
          updatedAt: new Date('2024-06-01')
        },
        {
          id: '2',
          title: 'DeFi Protocol Integration',
          description: 'Integrate multiple DeFi protocols for yield optimization',
          goal: 50000,
          payout: 'Payout',
          deadline: new Date(Date.now() + 4 * 30 * 24 * 60 * 60 * 1000), // 4 months
          authorId: '2',
          participants: 320,
          network: 'Polygon',
          status: 'active',
          createdAt: new Date('2024-05-15'),
          updatedAt: new Date('2024-05-15')
        },
        {
          id: '3',
          title: 'NFT Marketplace',
          description: 'Build a decentralized NFT marketplace with advanced features',
          goal: 75000,
          payout: 'Payout',
          deadline: new Date(Date.now() + 8 * 30 * 24 * 60 * 60 * 1000), // 8 months
          authorId: '3',
          participants: 156,
          network: 'Polygon',
          status: 'active',
          createdAt: new Date('2024-04-20'),
          updatedAt: new Date('2024-04-20')
        },
        {
          id: '4',
          title: 'AI Trading Bot',
          description: 'Create an AI-powered trading bot for cryptocurrency markets',
          goal: 40000,
          payout: 'Payout',
          deadline: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months
          authorId: '4',
          participants: 289,
          network: 'Polygon',
          status: 'active',
          createdAt: new Date('2024-05-01'),
          updatedAt: new Date('2024-05-01')
        },
        {
          id: '5',
          title: 'Cross-chain Bridge',
          description: 'Develop a secure bridge for cross-chain asset transfers',
          goal: 100000,
          payout: 'Payout',
          deadline: new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000), // 12 months
          authorId: '5',
          participants: 543,
          network: 'Polygon',
          status: 'active',
          createdAt: new Date('2024-03-10'),
          updatedAt: new Date('2024-03-10')
        }
      ];
    }

    if (this.data.submissions.length === 0) {
      // Seed submissions
      this.data.submissions = [
        {
          id: '1',
          bountyId: '1',
          authorId: '1',
          content: 'Initial MVP prototype with core features',
          submittedAt: new Date('2024-06-15'),
          status: 'pending'
        },
        {
          id: '2',
          bountyId: '1',
          authorId: '2',
          content: 'Alternative implementation approach',
          submittedAt: new Date('2024-06-16'),
          status: 'pending'
        },
        {
          id: '3',
          bountyId: '1',
          authorId: '3',
          content: 'UI/UX improvements and suggestions',
          submittedAt: new Date('2024-06-17'),
          status: 'pending'
        },
        {
          id: '4',
          bountyId: '1',
          authorId: '4',
          content: 'Performance optimization proposal',
          submittedAt: new Date('2024-06-18'),
          status: 'pending'
        },
        {
          id: '5',
          bountyId: '1',
          authorId: '5',
          content: 'Security audit and recommendations',
          submittedAt: new Date('2024-06-19'),
          status: 'pending'
        }
      ];
    }

    this.saveToStorage();
  }

  // Bounty operations
  getBounties(): Bounty[] {
    return [...this.data.bounties];
  }

  getBountyById(id: string): Bounty | undefined {
    return this.data.bounties.find(b => b.id === id);
  }

  createBounty(bounty: Omit<Bounty, 'id' | 'createdAt' | 'updatedAt'>): Bounty {
    const newBounty: Bounty = {
      ...bounty,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.data.bounties.push(newBounty);
    this.saveToStorage();
    return newBounty;
  }

  updateBounty(id: string, updates: Partial<Bounty>): Bounty | undefined {
    const bounty = this.data.bounties.find(b => b.id === id);
    if (bounty) {
      Object.assign(bounty, updates, { updatedAt: new Date() });
      this.saveToStorage();
    }
    return bounty;
  }

  deleteBounty(id: string): boolean {
    const index = this.data.bounties.findIndex(b => b.id === id);
    if (index !== -1) {
      this.data.bounties.splice(index, 1);
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // User operations
  getUsers(): User[] {
    return [...this.data.users];
  }

  getUserById(id: string): User | undefined {
    return this.data.users.find(u => u.id === id);
  }

  getUserByUsername(username: string): User | undefined {
    return this.data.users.find(u => u.username === username);
  }

  createUser(user: Omit<User, 'id' | 'createdAt'>): User {
    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.data.users.push(newUser);
    this.saveToStorage();
    return newUser;
  }

  updateUser(id: string, updates: Partial<User>): User | undefined {
    const user = this.data.users.find(u => u.id === id);
    if (user) {
      Object.assign(user, updates);
      this.saveToStorage();
    }
    return user;
  }

  // Submission operations
  getSubmissions(): Submission[] {
    return [...this.data.submissions];
  }

  getSubmissionsByBountyId(bountyId: string): Submission[] {
    return this.data.submissions.filter(s => s.bountyId === bountyId);
  }

  getSubmissionsByUserId(authorId: string): Submission[] {
    return this.data.submissions.filter(s => s.authorId === authorId);
  }

  createSubmission(submission: Omit<Submission, 'id' | 'submittedAt'>): Submission {
    const newSubmission: Submission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date()
    };
    this.data.submissions.push(newSubmission);
    this.saveToStorage();
    return newSubmission;
  }

  updateSubmission(id: string, updates: Partial<Submission>): Submission | undefined {
    const submission = this.data.submissions.find(s => s.id === id);
    if (submission) {
      Object.assign(submission, updates);
      this.saveToStorage();
    }
    return submission;
  }

  // Utility methods
  formatGoal(goal: number): string {
    if (goal >= 1000) {
      return `${goal / 1000}k`;
    }
    return goal.toString();
  }

  formatDeadline(deadline: Date): string {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const months = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
    
    if (months <= 1) {
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      return `${days}d`;
    }
    return `${months}mo`;
  }

  clearDatabase(): void {
    this.data = { users: [], bounties: [], submissions: [] };
    this.saveToStorage();
  }
}

export const db = DatabaseService.getInstance();

// Helper function to get bounty with author info
export interface BountyWithAuthor extends Bounty {
  author: User;
}

export function getBountyWithAuthor(bountyId: string): BountyWithAuthor | undefined {
  const bounty = db.getBountyById(bountyId);
  if (!bounty) return undefined;
  
  const author = db.getUserById(bounty.authorId);
  if (!author) return undefined;
  
  return { ...bounty, author };
}

// Helper function to get submission with author info
export interface SubmissionWithAuthor extends Submission {
  author: User;
}

export function getSubmissionsWithAuthors(bountyId: string): SubmissionWithAuthor[] {
  const submissions = db.getSubmissionsByBountyId(bountyId);
  return submissions.map(submission => {
    const author = db.getUserById(submission.authorId);
    return { ...submission, author: author! };
  }).filter(s => s.author);
}