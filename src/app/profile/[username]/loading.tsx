// app/loading.tsx
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Loader2 className={cn('h-10 w-10 animate-spin text-blue-500')} />
      <p className="text-sm text-muted-foreground">Loading your profile page...</p>
    </div>
  );
}
