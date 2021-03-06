export type categories = "" | "none" | "tutorial" | "course" | "article";

export interface ICourse {
  id: number;
  image?: string;
  title: string;
  category: categories;
  description: string;
  teacher: string;
  duration: number;
  taken: boolean;
  progress: number;
  completed: boolean;
  bookmarked: boolean;
}

export const Courses: ICourse[] = [
  {
    id: 0,
    title: "Being a Cadet in modern times",
    category: "article",
    description:
      "Tincidunt et,   Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 1",
    duration: 60,
    taken: false,
    bookmarked: false,
    completed: false,
    progress: 90,
  },
  {
    id: 1,
    title: "Go lang Basics",
    category: "course",
    description:
      "  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 2",
    duration: 15,
    taken: true,
    bookmarked: true,
    completed: true,
    progress: 100,
  },
  {
    id: 2,
    title: "Creating a website tutorial",
    category: "tutorial",
    description:
      "  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 2",
    duration: 120,
    taken: false,
    bookmarked: true,
    completed: false,
    progress: 90,
  },
  {
    id: 3,
    title: "How to make a fire using only wood",
    category: "tutorial",
    description:
      "  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 1",
    duration: 90,
    taken: false,
    bookmarked: false,
    completed: false,
    progress: 90,
  },
  {
    id: 4,
    title: "Creating a website using Reactjs",
    category: "tutorial",
    description:
      "Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.Donec posuere augue in quam.  Fusce commodo.  Sed bibendum.  Nam a sapien.   ",
    teacher: "Teacher 5",
    duration: 90,
    taken: true,
    bookmarked: false,
    completed: true,
    progress: 50,
  },
  {
    id: 5,
    title: "Driving a manual car",
    category: "course",
    description:
      "Curabitur lacinia pulvinar nibh.  Nunc eleifend leo vitae magna. Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 4",
    duration: 90,
    taken: false,
    bookmarked: true,
    completed: false,
    progress: 90,
  },
  {
    id: 3,
    title: "Identifying mushroom species",
    category: "tutorial",
    description:
      "  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Teacher 8",
    duration: 90,
    taken: false,
    bookmarked: false,
    completed: false,
    progress: 90,
  },
];
