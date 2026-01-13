// Analytics utility for Task Roulette
// Ready for Google Analytics integration

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  timestamp?: number;
}

class Analytics {
  private isEnabled: boolean = false;
  private events: AnalyticsEvent[] = [];

  constructor() {
    // Check if running in browser and analytics should be enabled
    if (typeof window !== 'undefined') {
      this.isEnabled = !window.location.hostname.includes('localhost');
    }
  }

  // Main event tracking function
  track(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log('📊 Analytics (dev):', event);
      return;
    }

    // Store event for now, will integrate with GA when you have tracking ID
    this.events.push({
      ...event,
      timestamp: Date.now()
    });

    // TODO: Replace with actual Google Analytics call
    // gtag('event', event.action, {
    //   event_category: event.category,
    //   event_label: event.label,
    //   value: event.value
    // });
  }

  // Convenience methods for common Task Roulette events
  trackTaskCreate(difficulty: string, duration: string, frequency: string) {
    this.track({
      action: 'task_created',
      category: 'task_management',
      label: `${difficulty}_${duration}_${frequency}`
    });
  }

  trackTaskComplete(difficulty: string, frequency: string) {
    this.track({
      action: 'task_completed',
      category: 'task_management',
      label: `${difficulty}_${frequency}`
    });
  }

  trackSpinRoulette(mode: string, tasksCount: number) {
    this.track({
      action: 'roulette_spin',
      category: 'roulette',
      label: mode,
      value: tasksCount
    });
  }

  trackTaskSkip(difficulty: string) {
    this.track({
      action: 'task_skipped',
      category: 'task_management',
      label: difficulty
    });
  }

  trackSupportAction(action: 'ads_enabled' | 'donate_clicked') {
    this.track({
      action: action,
      category: 'support',
      label: 'support_modal'
    });
  }

  trackSettingsChange(setting: string, value: string) {
    this.track({
      action: 'setting_changed',
      category: 'preferences',
      label: `${setting}_${value}`
    });
  }

  // Get stored events (useful for debugging or manual GA setup)
  getStoredEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear stored events
  clearEvents() {
    this.events = [];
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Export types for use in components
export type { AnalyticsEvent };