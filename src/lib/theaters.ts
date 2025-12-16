// lib/theaters.ts

export const THEATER_DATA = [
  {
    id: "pvr-acropolis",
    name: "PVR: Acropolis, Ahmedabad",
    address: "Acropolis Mall, Thaltej Cross Road, Near Gurdwara",
    distance: "4.5 km away",
    amenities: ["M-Ticket", "F&B"],
    shows: [
      {
        language: "HINDI",
        format: "3D",
        timings: [
          { time: "10:30 AM", type: "AVAILABLE" },
          { time: "01:15 PM", type: "FILLING_FAST" },
          { time: "04:45 PM", type: "AVAILABLE" },
          { time: "09:30 PM", type: "SOLD_OUT" },
        ],
      },
      {
        language: "ENGLISH",
        format: "IMAX 3D",
        timings: [
          { time: "11:00 AM", type: "AVAILABLE" },
          { time: "06:00 PM", type: "FILLING_FAST" },
        ],
      },
    ],
  },
  {
    id: "inox-himalaya",
    name: "INOX: Himalaya Mall, Ahmedabad",
    address: "Himalaya Mall, Drive-In Road, Memnagar",
    distance: "6.2 km away",
    amenities: ["M-Ticket"],
    shows: [
      {
        language: "HINDI",
        format: "2D",
        timings: [
          { time: "09:00 AM", type: "AVAILABLE" },
          { time: "12:30 PM", type: "AVAILABLE" },
          { time: "03:45 PM", type: "AVAILABLE" },
        ],
      },
    ],
  },
  {
    id: "pvr-palladium",
    name: "PVR: Palladium, Ahmedabad",
    address: "Palladium Mall, SG Highway",
    distance: "8.1 km away",
    amenities: ["M-Ticket", "Recliner", "F&B"],
    shows: [
      {
        language: "HINDI",
        format: "4DX",
        timings: [
          { time: "02:00 PM", type: "AVAILABLE" },
          { time: "08:00 PM", type: "FILLING_FAST" },
        ],
      },
    ],
  },
];

export const DATES = [
  { day: "Fri", date: "19", month: "Dec" },
  { day: "Sat", date: "20", month: "Dec" },
  { day: "Sun", date: "21", month: "Dec" },
  { day: "Mon", date: "22", month: "Dec" },
  { day: "Tue", date: "23", month: "Dec" },
];