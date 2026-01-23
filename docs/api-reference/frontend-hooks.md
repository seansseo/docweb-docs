# Frontend Hooks

Custom React hooks for building DocWeb interfaces.

## useSessions

Manages session state and operations.

**File**: `src/hooks/useSessions.ts`

```typescript
const {
    sessions,           // SavedSession[]
    currentSession,     // SavedSession | null
    loading,            // boolean
    error,              // Error | null
    createSession,      // (url: string) => Promise<void>
    deleteSession,      // (sessionId: string) => Promise<void>
    switchSession,      // (sessionId: string) => void
    refreshSessions,    // () => Promise<void>
} = useSessions();
```

### Features

- Fetches sessions from Firestore on mount
- Real-time updates via Firestore listeners
- Handles session CRUD operations
- Manages current session state

---

## useCredits

Tracks user credits and tier information.

**File**: `src/hooks/useCredits.ts`

```typescript
const {
    credits,            // UserCreditsProfile | null
    loading,            // boolean
    error,              // Error | null
    hasCredits,         // boolean
    deductCredit,       // () => Promise<boolean>
    refreshCredits,     // () => Promise<void>
    timeUntilReset,     // string (e.g., "5h 23m")
} = useCredits();
```

### Credit Profile Structure

```typescript
interface UserCreditsProfile {
    tier: "free" | "pro" | "max";
    creditsUsedToday: number;
    creditsRemaining: number;
    creditsPerDay: number;
    maxSessions: number;
    nextResetTime: string;
}
```

### Features

- Real-time credit tracking
- Automatic tier detection
- Reset countdown calculation
- Pre-action credit validation

---

## Context Providers

### AuthContext

Provides Firebase authentication state.

**File**: `src/contexts/AuthContext.tsx`

```typescript
const {
    user,               // User | null
    loading,            // boolean
    signIn,             // (email, password) => Promise<void>
    signInWithGoogle,   // () => Promise<void>
    signOut,            // () => Promise<void>
    signUp,             // (email, password) => Promise<void>
} = useAuth();
```

### ThemeContext

Provides light/dark theme state.

**File**: `src/contexts/ThemeContext.tsx`

```typescript
const {
    theme,              // "light" | "dark"
    toggleTheme,        // () => void
    setTheme,           // (theme: "light" | "dark") => void
} = useTheme();
```

---

## Components

### ProtectedRoute

Wraps protected pages, redirects to `/login` if not authenticated.

**File**: `src/components/ProtectedRoute.tsx`

```tsx
<ProtectedRoute>
    <DashboardPage />
</ProtectedRoute>
```

### SigmaMap

Main graph visualization component (1650 lines).

**File**: `src/components/SigmaMap.tsx`

**Props**:
```typescript
interface SigmaMapProps {
    searchId: string;
    onNodeClick?: (nodeId: string) => void;
    highlightedNodes?: string[];
}
```

### Chatbot

AI chat interface component.

**File**: `src/components/Chatbot.tsx`

**Props**:
```typescript
interface ChatbotProps {
    searchId: string;
    siteName?: string;
    onSourceClick?: (nodeId: string) => void;
}
```

### SessionSidebar

Left sidebar for session management.

**File**: `src/components/SessionSidebar.tsx`

### ClusterSidebar

Right sidebar showing cluster details and node list.

**File**: `src/components/ClusterSidebar.tsx`

**Props**:
```typescript
interface ClusterSidebarProps {
    selectedCluster?: string;
    nodes: DiscoveredUrlDoc[];
    onNodeClick?: (nodeId: string) => void;
}
```

### PlanModal

Subscription plans modal with Stripe integration.

**File**: `src/components/PlanModal.tsx`

### UsageModal

Credits usage and tier information modal.

**File**: `src/components/UsageModal.tsx`
