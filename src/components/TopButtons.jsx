import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Nagpur",
    },
    {
      id: 2,
      title: "Pune",
    },
    {
      id: 3,
      title: "Hyderabad",
    },
    {
      id: 4,
      title: "Delhi",
    },
    {
      id: 5,
      title: "Mumbai",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
