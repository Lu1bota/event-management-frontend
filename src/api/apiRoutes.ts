export const API_ROUTES = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
  USERS: {
    ME: "/users/me",
  },
  EVENTS: {
    ALL_EVENTS: "/events",
    EVENT_BY_ID: (id: string) => `/events/${id}`,
    CREATE_EVENT: "/events",
    UPDATE_EVENT: (id: string) => `/events/${id}`,
    DELETE_EVENT: (id: string) => `/events/${id}`,
    JOIN_EVENT: (id: string) => `/events/${id}/join`,
    LEAVE_EVENT: (id: string) => `/events/${id}/leave`,
  },
};
