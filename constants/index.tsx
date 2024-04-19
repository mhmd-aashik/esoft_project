interface Review {
  id: number;
  name: string;
  image: string;
  review: string;
}

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Events",
    route: "/events",
  },
  // {
  //   label: "Create Event",
  //   route: "/events/create",
  // },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    role: "fullstack developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "backend developer",
    image:
      "https://images.unsplash.com/photo-1512428559087-2a4eeac0b4f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  // Add more dummy objects here...
  {
    id: 3,
    name: "Alice Johnson",
    role: "frontend developer",
    image:
      "https://images.unsplash.com/photo-1521119989659-04d32cf4c0da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 4,
    name: "Bob Brown",
    role: "UI/UX designer",
    image:
      "https://images.unsplash.com/photo-1528145260179-52ab9eae49d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "data scientist",
    image:
      "https://images.unsplash.com/photo-1526880791944-941a7eef9964?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "software engineer",
    image:
      "https://images.unsplash.com/photo-1530595466252-86fd1c4e7de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 7,
    name: "Fiona Clark",
    role: "backend developer",
    image:
      "https://images.unsplash.com/photo-1544011785-f93b3f87a1f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 8,
    name: "George Martin",
    role: "fullstack developer",
    image:
      "https://images.unsplash.com/photo-1529250171732-49901e1c37a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 9,
    name: "Hannah Lee",
    role: "frontend developer",
    image:
      "https://images.unsplash.com/photo-1544228867-3817f3e0c1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 10,
    name: "Ian Turner",
    role: "backend developer",
    image:
      "https://images.unsplash.com/photo-1559310581-1159a925498b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 11,
    name: "Jackie Robinson",
    role: "software engineer",
    image:
      "https://images.unsplash.com/photo-1566075651282-60f8b8bce67d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
  {
    id: 12,
    name: "Katherine White",
    role: "UI/UX designer",
    image:
      "https://images.unsplash.com/photo-1543097480-cff7c7e2bb1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod.",
  },
];

export const questAnsw = [
  {
    id: 1,
    question: "",
    answer:
      "",
  },
  {
    id: 2,
    question: "",
    answer:
      "",
  },
  {
    id: 3,
    question: "",
    answer:
      "",
  },
  {
    id: 4,
    question: "How much time do I need to commit as a volunteer ?",
    answer:
      "",
  },
  {
    id: 5,
    question: "",
    answer:
      "",
  },
  {
    id: 6,
    question: "",
    answer:
      "",
  },
  {
    id: 7,
    question: "",
    answer:
      "",
  },
  {
    id: 8,
    question: "",
    answer:
      "",
  },
];
