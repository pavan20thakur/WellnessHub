import React, { useEffect } from "react";

import {
  Grid,
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@material-tailwind/react";

import { relaxingActivitiesList } from "../../constants/constants";

const ActivityCard = ({ obj }) => {
  console.log(obj);
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Card Media */}
        <img
          className="h-48 w-full object-cover"
          alt="green iguana"
          src={obj.image}
        />

        {/* Card Content */}
        <div className="p-6">
          <h5 className="text-xl font-semibold mb-2">{obj.title}</h5>
          <p className="text-sm text-gray-600">{obj.content}</p>
        </div>

        {/* Card Actions */}
        <div className="px-6 pb-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <a
              href={obj.link}
              className="underline"
              target={(obj.key === "exercise" || obj.key === "meditation") ? "_self" : "_blank"}
              rel="noopener"
            >
              Discover
            </a>
          </button>
        </div>
      </div>

    </>
  );
}

const RelaxActivities = () => {

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {relaxingActivitiesList.map((obj, index) => (
          <div key={index} className="flex items-center justify-center">
            <ActivityCard obj={obj} />

          </div>
        ))}
      </div>

    </>
  );
}

export default RelaxActivities;