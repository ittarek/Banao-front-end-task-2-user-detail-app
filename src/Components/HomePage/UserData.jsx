import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {  Button, List, Skeleton } from "@mui/material";
import "./UserData.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import ReactImageFallback from "react-image-fallback";

const UserData = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUserData] = useState();
  const [showDetails, setShowDetails] = useState();

  useEffect(() => {
    const api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        console.log(response.data);

        setUserData(response.data);
      } catch (error) {
        alert("Error fetching data:", error);
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
        <div className=" user-container">
          <List sx={{ width: "100%", maxWidth: 460 }} className="list-items">
            <h2 className="user-list">User </h2>
            {usersData?.map(data => (
              <ListItem
                key={data.createdAt}
                alignItems="flex-start"
                className="user-common-style user-items "
                data-aos="fade-right"
              >
                {data ? (
                  <Button
                    onClick={() => handleDetails(data)}
                    className="   btn-active-style"
                    data-os="fade-right"
                    style={{ width: "100%" }}
                  >
                    {data?.avatar ? (
                      <ReactImageFallback
                        className="avatar"
                        src={data.avatar}
                        fallbackImage={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${data.id}.jpg`}
                        initialImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1656px-User_icon-cp.svg.png"
                        alt="avatar"
                      />
                    ) : (
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        className=""
                      />
                    )}{" "}
                    <ListItemText>
                      {/* man is here */}

                      {data?.profile?.firstName ? (
                        <div className="user-name">
                          <p className="  " style={{ fontWeight: "bolder" }}>
                            {data.profile.firstName
                              ? data?.profile?.firstName
                              : "No data "}{" "}
                            {data.profile.lastName
                              ? data?.profile?.lastName
                              : "No data to show"}
                          </p>
                          <p className="job-title">{data.jobTitle}</p>
                        </div>
                      ) : (
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                      )}
                    </ListItemText>
                  </Button>
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "3rem" }}
                    className=""
                  />
                )}
              </ListItem>
            ))}
          </List>
          {/* user details card */}
          <div className="details-card" >
            <h2 className="user-details-heading ">USER DETAILS</h2>
            <div className="data-details">
              {showDetails?.avatar ? (
                <ReactImageFallback
                  className="details-image"
                  src={showDetails.avatar}
                  fallbackImage={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${showDetails.id}.jpg`}
                  initialImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1656px-User_icon-cp.svg.png"
                  alt="avatar"
                />
              ) : (
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  className="avatar-skeleton"
                />
              )}
              <section>
                {showDetails?.profile?.username ? (
                  <p className="">
                    {showDetails?.profile?.username
                      ? showDetails?.profile?.username
                      : "No data to show"}
                  </p>
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "100px" }}
                    className=""
                  />
                )}
                <div className="">
                  {showDetails?.Bio ? (
                    <p className="bio">
                      {showDetails?.Bio ? showDetails?.Bio : "No data to show"}
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "3rem" }}
                      className=""
                    />
                  )}
                  {showDetails?.profile.firstName ? (
                    <p className="">
                      <span className=""> Full Name</span> <br />
                      <p className="fullName common-style ">
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
                      className=""
                    />
                  )}
                  {showDetails?.jobTitle ? (
                    <p className="">
                      Job Title <br />{" "}
                      <p className="job common-style">
                        {showDetails?.jobTitle
                          ? showDetails?.jobTitle
                          : "No data to show"}
                      </p>
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      className=""
                    />
                  )}
                  {showDetails?.profile.email ? (
                    <p className="">
                      Email{" "}
                      <p className="common-style ">
                        {showDetails?.profile?.email
                          ? showDetails?.profile?.email
                          : "No data to show"}
                      </p>
                    </p>
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      className=""
                    />
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserData;
