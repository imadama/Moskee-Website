export interface GoogleCalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  isRecurring?: boolean;
}

export class GoogleCalendarService {
  private apiKey: string;
  private calendarId: string;

  constructor(apiKey: string, calendarId: string) {
    this.apiKey = apiKey;
    this.calendarId = calendarId;
  }

  async getEvents(maxResults: number = 50): Promise<GoogleCalendarEvent[]> {
    try {
      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(this.calendarId)}/events?key=${this.apiKey}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Google Calendar API error: ${response.status}`);
      }

      const data = await response.json();
      
      return data.items?.map((event: any) => ({
        id: event.id,
        title: event.summary || 'Untitled Event',
        description: event.description,
        start: event.start?.dateTime || event.start?.date,
        end: event.end?.dateTime || event.end?.date,
        location: event.location,
        isRecurring: !!event.recurringEventId
      })) || [];
    } catch (error) {
      console.error('Error fetching Google Calendar events:', error);
      throw error;
    }
  }

  async getUpcomingEvents(limit: number = 10): Promise<GoogleCalendarEvent[]> {
    const events = await this.getEvents();
    return events.slice(0, limit);
  }
}

// Factory function to create service instance
export function createGoogleCalendarService(): GoogleCalendarService | null {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  if (!apiKey || !calendarId) {
    console.warn('Google Calendar API credentials not configured');
    return null;
  }

  return new GoogleCalendarService(apiKey, calendarId);
}