import React from "react";

const Project = ({ item }) => {
  return (
    <a href={item.site} target="_blank">
      <div
        key={item.id}
        className="flex flex-col items-center text-center cursor-pointer"
      >
        <div className="mb-8">
          <img className="rounded-2xl" src={item.image} alt="" />
        </div>
        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <a
          href={item.gitHub}
          className="capitalize text-accent text-sm mb-3 cursor-pointer"
        >
          Github Repository
        </a>
      </div>
    </a>
  );
};

export default Project;
