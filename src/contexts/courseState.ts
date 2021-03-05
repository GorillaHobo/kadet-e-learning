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
    title: "Mantap Djiwa",
    category: "tutorial",
    description:
      "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "John Doe",
    duration: 60,
    taken: true,
    bookmarked: false,
    completed: false,
    progress: 90,
  },
  {
    id: 1,
    title: "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
    category: "tutorial",
    description:
      "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Jane Doe",
    duration: 90,
    taken: true,
    bookmarked: true,
    completed: true,
    progress: 90,
  },
  {
    id: 2,
    title: "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
    category: "tutorial",
    description:
      "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
    teacher: "Jane Doe",
    duration: 90,
    taken: false,
    bookmarked: true,
    completed: true,
    progress: 90,
  },
];
