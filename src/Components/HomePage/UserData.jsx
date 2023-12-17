import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button, Skeleton } from "@mui/material";
import Card from "react-bootstrap/Card";
import "./UserData.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const UserData = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUserData] = useState();
  const [showDetails, setShowDetails] = useState();

  useEffect(() => {
    const api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); //
  // user details showing function
  const handleDetails = data => {
    setShowDetails(data);
  };
  return (
    <main>
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex  mx-auto user-container">
          <List sx={{ width: "100%", maxWidth: 460 }} className="list-items">
            <h2 className="user-list text-center">User List</h2>
            {usersData?.map((data, index) => (
              <ListItem
                key={data?.id ? data?.id : index}
                alignItems="flex-start"
                className="my-5 user-common-style user-items"
                data-aos="fade-right"
              >
                {data ? (
                  <Button
                    onClick={() => handleDetails(data)}
                    className="w-100  "
                    data-os="fade-right"
                  >
                    {data?.avatar ? (
                      <ListItemAvatar className="avatar">
                        <Avatar
                          src={
                            data?.avatar ? data?.avatar : "../../assets/man.png"
                          }
                          alt="image"
                        ></Avatar>
                      </ListItemAvatar>
                    ) : (
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        className="mx-auto"
                      />
                    )}
                    <ListItemText>
                      {/* man is here */}

                      {data?.profile?.firstName ? (
                        <p className="text-start my-auto user-name">
                          {data.profile.firstName
                            ? data?.profile?.firstName
                            : "No data "}{" "}
                          {data.profile.lastName
                            ? data?.profile?.lastName
                            : "No data to show"}
                        </p>
                      ) : (
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                      )}
                    </ListItemText>
                  </Button>
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "3rem" }}
                    className="my-3"
                  />
                )}
              </ListItem>
            ))}
          </List>
          {/* user details card */}
          <div className="details-card position-fixed">
            <h2 className="user-details-heading text-center mx-auto">
              USER DETAILS
            </h2>
            <div style={{ width: "18rem" }} className="data-details">
              {showDetails?.avatar ? (
                <Avatar
                  className="mx-auto"
                  sx={{ width: "50px" }}
                  src={
                    showDetails.avatar
                      ? showDetails.avatar
                      : "../../assets/man.png"
                  }
                  alt="Image"
                ></Avatar>
              ) : (
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              )}
              <Card.Body>
                {showDetails?.profile?.username ? (
                  <Card.Title className="text-center mt-2">
                    {showDetails?.profile?.username
                      ? showDetails?.profile?.username
                      : "No data to show"}
                  </Card.Title>
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "100px" }}
                    className="mx-auto"
                  />
                )}
                <div className="d-flex flex-column ">
                  {showDetails?.Bio ? (
                    <p className="bio">
                      {showDetails?.Bio ? showDetails?.Bio : "No data to show"}
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "3rem" }}
                      className="my-3"
                    />
                  )}
                  {showDetails?.profile.firstName ? (
                    <p className="text-start">
                      <span className=""> Full Name</span> <br />
                      <p className="fullName common-style text-start ps-2 ">
                        {showDetails?.profile.firstName
                          ? showDetails?.profile?.firstName
                          : "No data"}
                        <span>
                          {" "}
                          {showDetails?.profile.firstName
                            ? showDetails?.profile?.lastName
                            : " to show"}
                        </span>
                      </p>
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      className="my-3"
                    />
                  )}
                  {showDetails?.jobTitle ? (
                    <p className="text-start">
                      Job Title <br />{" "}
                      <p className="job common-style ps-2">
                        {showDetails?.jobTitle
                          ? showDetails?.jobTitle
                          : "No data to show"}
                      </p>
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      className="my-4"
                    />
                  )}
                  {showDetails?.profile.email ? (
                    <p className="text-start">
                      Email{" "}
                      <p className="common-style ps-2">
                        {showDetails?.profile?.email
                          ? showDetails?.profile?.email
                          : "No data to show"}
                      </p>
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      className="my-3"
                    />
                  )}
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserData;
