import { useCallback, useMemo, useState, type FC } from "react";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { Box } from "@chakra-ui/react";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { styles } from "./styles";
import type { IEvent, Participation } from "../../types";
import { useNavigate } from "react-router-dom";

interface EventsCalendarProps {
  participations: Participation[];
}

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: IEvent; // Зберігаємо тут повний об'єкт
}

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const EventsCalendar: FC<EventsCalendarProps> = ({ participations }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<View>("month");

  const navigate = useNavigate();

  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      navigate(`/events/${event.id}`);
    },
    [navigate],
  );

  const handleNavigate = useCallback((newDate: Date) => {
    setCurrentDate(newDate);
  }, []);

  const handleViewChange = useCallback((newView: View) => {
    setCurrentView(newView);
  }, []);

  const events: CalendarEvent[] = useMemo(() => {
    if (!participations || participations.length === 0) return [];

    return participations.map((p) => {
      const eventData = p.event;
      const startDate = new Date(eventData.dateTime);

      const timeString = format(startDate, "HH:mm");

      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

      return {
        id: eventData.id,
        title: `${timeString} - ${eventData.title}`,
        start: startDate,
        end: endDate,
        resource: eventData,
      };
    });
  }, [participations]);

  return (
    <Box css={styles}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week"]}
        date={currentDate}
        onNavigate={handleNavigate}
        view={currentView}
        onView={handleViewChange}
        onSelectEvent={handleSelectEvent}
        formats={{
          eventTimeRangeFormat: () => "",
        }}
      />
    </Box>
  );
};

export default EventsCalendar;
