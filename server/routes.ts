import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Calendar events endpoint - will integrate with Google Calendar when credentials are provided
  app.get("/api/events", async (req, res) => {
    try {
      // Check if Google Calendar credentials are available
      const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.GOOGLE_CALENDAR_ID;

      if (apiKey && calendarId) {
        // Fetch from Google Calendar API
        const now = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&maxResults=20&singleEvents=true&orderBy=startTime`;

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Google Calendar API error: ${response.status}`);
        }

        const data = await response.json();
        
        const events = data.items?.map((event: any) => ({
          id: event.id,
          title: event.summary || 'Untitled Event',
          description: event.description,
          start: event.start?.dateTime || event.start?.date,
          end: event.end?.dateTime || event.end?.date,
          location: event.location,
          isRecurring: !!event.recurringEventId
        })) || [];

        res.json(events);
      } else {
        // Return empty array when credentials not configured
        res.json([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
