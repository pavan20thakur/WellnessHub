
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  GameControllerIcon,
  UsersIcon,
  TrophyIcon,

} from "@heroicons/react/24/solid";

import { HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Sidenav() {
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="shadow-xl shadow-blue-gray-900/5 h-[100%] py-1">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" >
          Syrus 2024
        </Typography>
      </div>
      <List className="w-auto">
        <ListItem
          selected={selected === 1}
          onClick={() => {
            setSelected(1);
            navigate("home");
          }}
        >
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem
          selected={selected === 1}
          onClick={() => {
            setSelected(1);
            navigate("games");
          }}
        >
          <ListItemPrefix>
            <TrophyIcon className="h-5 w-5" />
          </ListItemPrefix>
          Games
        </ListItem>
        <ListItem
          selected={selected === 1}
          onClick={() => {
            setSelected(1);
            navigate("relax");
          }}
        >
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Relax
        </ListItem>
        <ListItem
          selected={selected === 1}
          onClick={() => {
            setSelected(1);
            navigate("fitness");
          }}
        >
          <ListItemPrefix>
            <TrophyIcon className="h-5 w-5" />
          </ListItemPrefix>
          Fitness Challenge
        </ListItem>

        {/* Here there is a Chip that can be used to mark the unread chats */}
        <ListItem selected={selected === 3} onClick={() => {
          setSelected(3);
          navigate("community")
        }}>
          <ListItemPrefix>
            <UsersIcon className="h-5 w-5" />
          </ListItemPrefix>
          Community
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>

        <hr class="my-4 border-t border-gray-400" />

        <ListItem selected={selected === 4} onClick={() => {
          setSelected(4)
          navigate('profile')
        }}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem selected={selected === 5} onClick={() => {
          setSelected(5)
          navigate('settings')
        }}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={() => {
          navigate("/");
        }}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  )
}

export default Sidenav;


