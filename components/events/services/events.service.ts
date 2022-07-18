import { EventInterface } from "components/events/types/event.interface";

export class EventsService {
  async getAllEvents(): Promise<EventInterface[]> {
    const result = await fetch(
      "https://dvrepa-ebcfe-default-rtdb.europe-west1.firebasedatabase.app/events.json"
    );

    const parsed: { [key: string]: Omit<EventInterface, "id"> } =
      await result.json();

    return Object.keys(parsed).map((eventKey) => {
      return {
        id: eventKey,
        ...parsed[eventKey],
      };
    });
  }

  async getFeaturedEvents(): Promise<EventInterface[]> {
    const allEvents = await this.getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
  }

  async getEventById(id: string): Promise<EventInterface | undefined> {
    const allEvents = await this.getAllEvents();

    return allEvents.find((event) => event.id === id);
  }

  async getFilteredEvents(year: number, month: number) {
    const allEvents = await this.getAllEvents();

    return allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  }
}

export const eventsService = new EventsService();
