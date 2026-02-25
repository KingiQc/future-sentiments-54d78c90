export interface Letter {
  id: string;
  title: string;
  body: string;
  sentDate: Date;
  deliveryDate: Date;
  isLocked: boolean;
  recipientPhone?: string;
  recipientName?: string;
  status: "sent" | "delivered";
}

export function calculateProgress(sentDate: Date, deliveryDate: Date): number {
  const now = new Date();
  const total = deliveryDate.getTime() - sentDate.getTime();
  const elapsed = now.getTime() - sentDate.getTime();
  if (total <= 0) return 1;
  return Math.min(Math.max(elapsed / total, 0), 1);
}

export function getCountdownText(deliveryDate: Date): string {
  const now = new Date();
  const diffMs = deliveryDate.getTime() - now.getTime();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Delivering today";
  if (days === 1) return "Delivers tomorrow";
  return `Delivers in ${days} days`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const mockLetters: Letter[] = [
  {
    id: "1",
    title: "Hello from 2024!",
    body: "Dear future me, I hope you're doing well...",
    sentDate: new Date("2024-12-31"),
    deliveryDate: new Date("2026-02-18"),
    isLocked: true,
    status: "sent",
  },
  {
    id: "2",
    title: "Weekly check in with myself",
    body: "How are you feeling this week?",
    sentDate: new Date("2026-02-10"),
    deliveryDate: new Date("2026-03-04"),
    isLocked: false,
    status: "sent",
  },
  {
    id: "3",
    title: "Goals for this year",
    body: "Let's revisit the goals...",
    sentDate: new Date("2025-06-01"),
    deliveryDate: new Date("2026-03-25"),
    isLocked: false,
    status: "sent",
  },
  {
    id: "4",
    title: "Happy new year 2026!",
    body: "Wishing myself a great year ahead!",
    sentDate: new Date("2026-01-01"),
    deliveryDate: new Date("2026-03-26"),
    isLocked: false,
    status: "sent",
  },
  {
    id: "5",
    title: "A message from today",
    body: "Just writing to say hello from the present.",
    sentDate: new Date("2026-02-17"),
    deliveryDate: new Date("2026-12-25"),
    isLocked: false,
    status: "sent",
  },
];

export const mockReceivedLetters: Letter[] = [
  {
    id: "r1",
    title: "Remember this moment",
    body: "You wrote this on a sunny afternoon in the park. Life was simple and beautiful.",
    sentDate: new Date("2025-01-15"),
    deliveryDate: new Date("2026-01-15"),
    isLocked: false,
    status: "delivered",
  },
  {
    id: "r2",
    title: "Your birthday wish",
    body: "Happy birthday, future me! I hope you celebrated well.",
    sentDate: new Date("2025-06-10"),
    deliveryDate: new Date("2026-02-10"),
    isLocked: false,
    status: "delivered",
  },
];
