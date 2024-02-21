import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import CommunityCard from './CommunityCard';
import {
  Input,
  Typography,
  Button
} from "@material-tailwind/react";
<<<<<<< HEAD
import { useDynamicTitle } from '../../hooks/useDynamicTitle';

=======

import { useDynamicTitle } from '../../hooks/useDynamicTitle';
>>>>>>> 2c168dbd3c0b87c8a609245b2fd47da064c40dc0

function CommunityComponent() {
  useDynamicTitle("Dashboard | Community");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(false);
  const [auth, setAuth] = useAuth();
  const [community, setCommunity] = useState(null);
  const [communityName, setCommunityName] = useState("");
  const [desc, setDesc] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = auth.token;

        const response = await fetch("http://localhost:8080/user/community", {
          method: "GET",
          headers: {
            "Authorization": token,
          }
        });
        const data = await response.json();
        setCommunity(data.community);
        console.log(data);

      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, [])

  const handleCommunityClick = (id) => {
      navigate(`${id}`);
  }

  const handleSearch = async () => {
    try {
      const token = auth.token;
      const searchTerm = search // Define your search term here

      const response = await fetch("http://localhost:8080/user/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify({ search: searchTerm })
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error.message);
    }
  }

  const handleCreate = async () => {
    try {
      const token = auth.token; // Assuming you have the auth token

      const response = await fetch("http://localhost:8080/create-community", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify({
          "community_name": communityName,
          "desc": desc
        })
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>
      <div className="h-[10%] p-3 flex items-center justify-between">
        <div class="relative flex w-full max-w-[24rem] ">
          <div class="relative h-10 w-full min-w-[200px] ">
            <input type="text"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
          <button
            class="!absolute right-1 top-1 select-none rounded bg-blue-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

        {/* create community details page */}
        <div
          className={`${!selected ? "hidden" : "block"} w-[400px] h-[400px] bg-gray-100  absolute right-6 top-16 rounded-lg hover:shadow-lg hover:shadow-blue-gray-500/40`}
        >
          <div className='flex p-6 flex-col gap-4'>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="lg"
              placeholder="Name"

              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 hover:shadow-lg hover:shadow-blue-gray-500/40"
              onChange={(e) => setCommunityName(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
              size="lg"
              placeholder="Description"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 hover:shadow-lg hover:shadow-blue-gray-500/40"
              onChange={(e) => setDesc(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button className="mt-6 hover:shadow-lg hover:shadow-blue-gray-500/40" fullWidth
              onClick={handleCreate}
            >
              Create
            </Button>
          </div>
        </div>



        <button
          class="select-none rounded bg-blue-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button"
          onClick={() => setSelected(!selected)}
        >
          Create Community
        </button>

      </div>
      <div className="h-9/10 bg-gray-300 mt-2">
        {
          community && (
            community.map((item, index) => (
              <CommunityCard key={index} community={item} handleCommunityClick={handleCommunityClick} />
            ))
          )
        }
      </div>


    </>
  )
}

export default CommunityComponent;