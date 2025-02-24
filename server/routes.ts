import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import { insertUserSchema, insertAnnouncementSchema, insertDonationSchema } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = express.Router();

  // User Profile Route
  apiRouter.get("/user/profile", async (req, res) => {
    try {
      // TODO: Get user ID from session
      const userId = 1; // Temporary for testing
      const user = await storage.getUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  });

  // Announcements Routes
  apiRouter.get("/announcements", async (req, res) => {
    try {
      const announcements = await storage.getAnnouncements();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch announcements" });
    }
  });

  // Donations Routes
  apiRouter.get("/donations", async (req, res) => {
    try {
      // TODO: Get user ID from session
      const userId = 1; // Temporary for testing
      const donations = await storage.getDonationsByUserId(userId);
      res.json(donations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch donations" });
    }
  });

  // Mount API routes
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}