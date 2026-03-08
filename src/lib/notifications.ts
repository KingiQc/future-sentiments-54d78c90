// Push notification utilities for letter delivery
const NOTIFICATION_PERMISSION_KEY = "push_notifications_enabled";

export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) return false;
  
  const permission = await Notification.requestPermission();
  const granted = permission === "granted";
  localStorage.setItem(NOTIFICATION_PERMISSION_KEY, String(granted));
  return granted;
}

export function isNotificationEnabled(): boolean {
  if (!("Notification" in window)) return false;
  return Notification.permission === "granted";
}

export function sendLetterDeliveryNotification(title: string, recipientName?: string) {
  if (!isNotificationEnabled()) return;
  
  const body = recipientName
    ? `Your letter "${title}" has been delivered to ${recipientName}!`
    : `Your letter "${title}" has been delivered!`;

  new Notification("📬 Letter Delivered!", {
    body,
    icon: "/favicon.ico",
    badge: "/favicon.ico",
    tag: `letter-${title}`,
  });
}

export function scheduleLetterNotification(title: string, deliveryDate: string, recipientName?: string) {
  if (!isNotificationEnabled()) return;
  
  const delay = new Date(deliveryDate).getTime() - Date.now();
  if (delay <= 0) {
    sendLetterDeliveryNotification(title, recipientName);
    return;
  }
  
  // Schedule for future (works while tab is open)
  setTimeout(() => {
    sendLetterDeliveryNotification(title, recipientName);
  }, delay);
}
