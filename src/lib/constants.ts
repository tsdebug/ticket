export const POPULAR_CITIES = [
  {
    name: "Jamshedpur",
    image: "/Jamshedpur.jpg",
  },
  {
    name: "Ahmedabad",
    image: "/Ahmedabad.png",
  },
  {
    name: "Delhi-NCR",
    image: "/Delhi-NCR.jpg",
  },
  {
    name: "Mumbai",
    image: "/Mumbai.jpg",
  },
  {
    name: "Bengaluru",
    image: "/Bengaluru.jpg",
  },
  {
    name: "Chandigarh",
    image: "/Chandigarh.webp",
  },
  {
    name: "Chennai",
    image: "/Chennai.webp",
  },
  {
    name: "Hyderabad",
    image: "/Hyderabad.jpg",
  },
  {
    name: "Kolkata",
    image: "/Kolkata.avif",
  },
  {
    name: "Raipur",
    image: "/Raipur.jpg",
  },
];

export const OTHER_CITIES = [
  "Agra", "Ajmer", "Amritsar", "Anand", "Aurangabad", 
  "Bhopal", "Bhubaneswar", "Coimbatore", "Dehradun", "Goa", 
  "Guwahati", "Indore", "Jaipur", "Kanpur", "Kochi", 
  "Lucknow", "Ludhiana", "Madurai", "Mangalore", "Mysuru", 
  "Nagpur", "Nashik", "Patna", "Pune", "Raipur", 
  "Rajkot", "Ranchi", "Surat", "Thiruvananthapuram", "Vadodara", 
  "Varanasi", "Vijayawada", "Visakhapatnam"
];

// 1. The "Database" for the Booking Page
export const MOVIE_DETAILS: Record<string, any> = {
  "1": {
    title: "Avatar: Fire and Ash",
    bg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    poster: "/Avatar.jpg",
    genre: "Sci-Fi, Action",
    duration: "3h 17m",
    rating: "UA 16+",
    language: "English, Hindi",
    formats: ["IMAX 3D", "4DX", "3D"],
  },
  "2": {
    title: "Pushpa 2: The Rule",
    bg: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200",
    poster: "/Pushpa.jpg",
    genre: "Action, Drama",
    duration: "2h 45m",
    rating: "UA",
    language: "Telugu, Hindi, Tamil",
    formats: ["2D", "IMAX"],
  },
  "3": {
    title: "Sonic the Hedgehog 3",
    bg: "https://images.unsplash.com/photo-1612404730960-5c71578fcaef?auto=format&fit=crop&q=80&w=1200",
    poster: "/Sonic.jpg",
    genre: "Animation, Adventure",
    duration: "1h 50m",
    rating: "U",
    language: "English",
    formats: ["2D", "3D"],
  },
  "4": {
    title: "Mufasa: The Lion King",
    bg: "https://images.unsplash.com/photo-1547406822-19253c306d64?auto=format&fit=crop&q=80&w=1200",
    poster: "/Mufasa.jpg",
    genre: "Adventure, Drama",
    duration: "2h 10m",
    rating: "U",
    language: "English, Hindi",
    formats: ["2D", "3D", "IMAX"],
  },
};

// 2. Lists for the Home Page (using IDs that match the DB above)
export const MOVIES_NOW_SHOWING = [
  { id: 1, title: "Avatar: Fire and Ash", genre: ["Sci-Fi"], img: MOVIE_DETAILS["1"].poster, rating: "UA" },
  { id: 2, title: "Pushpa 2", genre: ["Action"], img: MOVIE_DETAILS["2"].poster, rating: "UA" },
  { id: 3, title: "Sonic 3", genre: ["Animation"], img: MOVIE_DETAILS["3"].poster, rating: "U" },
  { id: 4, title: "Mufasa", genre: ["Adventure"], img: MOVIE_DETAILS["4"].poster, rating: "U" },
];


export const MOVIES_COMING_SOON = [
  {
    id: 5,
    title: "Captain America: Brave New World",
    genre: ["Action"],
    date: "Feb 14, 2025",
    img: "/CaptainA.jpg",
  },
  {
    id: 6,
    title: "Superman: Legacy",
    genre: ["Sci-Fi"],
    date: "July 11, 2025",
    img: "/Superman.webp",
  },
  {
    id: 7,
    title: "The Batman II",
    genre: ["Thriller"],
    date: "Oct 2025",
    img: "/Batman.jpg",
  },
  {
    id: 8,
    title: "Zootopia 2",
    genre: ["Adventure"],
    date: "Coming Soon",
    img: "/Zootopia.jpg",
  },
];