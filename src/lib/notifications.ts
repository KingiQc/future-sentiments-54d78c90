// Push notification utilities for letter delivery

export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications.");
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  } catch (err) {
    console.error("Failed to request notification permission:", err);
    return false;
  }
}

export function isNotificationEnabled(): boolean {
  if (!("Notification" in window)) return false;
  return Notification.permission === "granted";
}

export function sendLetterDeliveryNotification(title: string, recipientName?: string) {
  if (!isNotificationEnabled()) {
    console.log("Notifications not enabled, skipping delivery notification for:", title);
    return;
  }

  const body = recipientName
    ? `Your letter "${title}" has been delivered to ${recipientName}!`
    : `Your letter "${title}" has been delivered!`;

  try {
    new Notification("📬 Letter Delivered!", {
      body,
      icon: "/favicon.ico",
      tag: `letter-${title}`,
    });
  } catch (err) {
    console.error("Failed to send notification:", err);
  }
}

export function scheduleLetterNotification(title: string, deliveryDate: string, recipientName?: string) {
  if (!isNotificationEnabled()) {
    console.log("Notifications not enabled, skipping schedule for:", title);
    return;
  }

  const delay = new Date(deliveryDate).getTime() - Date.now();
  if (delay <= 0) {
    sendLetterDeliveryNotification(title, recipientName);
    return;
  }

  setTimeout(() => {
    sendLetterDeliveryNotification(title, recipientName);
  }, delay);
}
