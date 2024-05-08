import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // Mock data for three friends
  const mockFriends = [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      occupation: "Software Engineer",
      src: "https://bit.ly/dan-abramov",
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Doe",
      occupation: "Graphic Designer",
      src: "https://bit.ly/tioluwani-kolawole",
    },
    {
      _id: "3",
      firstName: "Alice",
      lastName: "Smith",
      occupation: "Data Scientist",
      src: "https://bit.ly/kent-c-dodds",
    },
  ];

  const getFriends = async () => {
    dispatch(setFriends({ friends: mockFriends }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            src={friend.src}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
