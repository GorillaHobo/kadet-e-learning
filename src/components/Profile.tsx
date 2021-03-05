import { FaUserEdit } from "react-icons/fa";

interface IBiodata {
  title: string;
  desc: string;
}

const biodata: IBiodata[] = [
  {
    title: "Date Joined",
    desc: "20th of October, 2020",
  },
  {
    title: "Completed Courses",
    desc: "100",
  },
  {
    title: "Ongoing Courses",
    desc: "9",
  },
];

const ProfileImage = () => {
  return <div className="h-48 w-48 mb-2 rounded-full bg-blue-200" />;
};

const PersonName = ({ children }: { children: string }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <h1 className="text-5xl flex justify-center items-start">
        {children}
        <span className="text-base">
          <FaUserEdit className="mt-1 ml-1 " />
        </span>
      </h1>
      <h2 className="text-gray-500 text-lg ">Person Rank</h2>
    </div>
  );
};

const Biodata = () => {
  return (
    <ul>
      {biodata.map((data, index) => (
        <li className="flex flex-col justify-center items-center" key={index}>
          <h3 className="text-gray-500">{data.title}</h3>
          <h4 className="font-bold text-xl">{data.desc}</h4>
        </li>
      ))}
    </ul>
  );
};

const Profile = () => {
  return (
    <div className="flex w-2/6 flex-none flex-col justify-center items-center w-1/5">
      <ProfileImage />
      <PersonName>Alan Smith</PersonName>
      <Biodata />
    </div>
  );
};

export default Profile;
