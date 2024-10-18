import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, SetIsMobile] = useState(false);
  const [isSearch, SetIsSearch] = useState(false);
  const [isNewGroup, SetIsNewGroup] = useState(false);
  const [isNotification, SetIsNotification] = useState(false);

  const handleMobile = () => {
    // console.log("handleMobile");
    SetIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    console.log("Search");
    SetIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    console.log("openNewGroup");
    SetIsNewGroup((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const openNotification = () => {
    SetIsNotification((prev) => !prev);
  };

  const LogoutHandler = () => {
    console.log("Logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                icon={<SearchIcon />}
                title={"Search"}
                onClick={openSearch}
              />
              <IconBtn
                icon={<AddIcon />}
                title={"New Group"}
                onClick={openNewGroup}
              />
              <IconBtn
                icon={<GroupIcon />}
                title={"Manage Groups"}
                onClick={navigateToGroup}
              />
              <IconBtn
                icon={<NotificationsIcon />}
                title={"Notifications"}
                onClick={openNotification}
              />
              <IconBtn
                icon={<LogoutIcon />}
                title={"Logout"}
                onClick={LogoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
