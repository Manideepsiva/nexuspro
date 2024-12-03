import React from "react";
import clientstyle from "../assets/css/style.module.css"
import { Link } from "react-router-dom";
import images from "./importimag";
import { useState } from "react";


function ProfileCard() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your password update API logic here
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);

    alert("Password update request sent.");
  };

  return (
    <div className={clientstyle["profile-card"]}>
      <h3>Your Profile :</h3>
      <p>
        <strong>Name:</strong> John Doe
      </p>
      <p>
        <strong>Age:</strong> 30
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}




function Clientnav(){
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const toggleProfile = () => {
    setIsProfileVisible((prev) => !prev);
  };
    return (
        <>

<header className={clientstyle['header']} data-header>
      <div className={clientstyle['container']}>

        <a href="#" className={clientstyle['logo']}>
          <img src={images["log02.svg"]} width="50" height="46" alt="wellness" />
        </a>

        <nav className={clientstyle['navbar']} data-navbar>

          <div className={clientstyle['navbar-top']}>

            <a href="#" className={clientstyle['logo']}>
              <img src={images["log02.svg"]} width="50" height="46" alt="welness" />
            </a>

            <button className={clientstyle['nav-close-btn']} aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

          </div>

          <ul className={clientstyle['navbar-list']}>

            <li className={clientstyle['navbar-item']}>
              <a href="/dashboard" className={`${clientstyle['navbar-link']} ${clientstyle['title-md']}`}><Link to = {'/authpage'}>Home</Link></a>
            </li>

            <li className={clientstyle['navbar-item']}>
              <a href="/dashboard/upcomingapplist" className={`${clientstyle['navbar-link']} ${clientstyle['title-md']}`}><Link to={"/authpage/appointmentsdashboard/upcoming"}>Appointments</Link></a>
            </li>

            <li className={clientstyle['navbar-item']}>
             <button  onClick={toggleProfile}> <a href="#" className={`${clientstyle['navbar-link']} ${clientstyle['title-md']}`}>
          Profile</a>
        </button>
            </li>

           

            <li className={clientstyle['navbar-item']}>
              <a href="#" className={`${clientstyle['navbar-link']} ${clientstyle['title-md']}`}><Link to={"/logout"}>logout</Link></a>
            </li>

            {isProfileVisible && <ProfileCard />}

           
          </ul>

          <ul className={clientstyle['social-list']}>

            <li>
              <a href="#" className={clientstyle['social-link']}>
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className={clientstyle['social-link']}>
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className={clientstyle['social-link']}>
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className={clientstyle['social-link']}>
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className={clientstyle['social-link']}>
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </nav>

        <button className={clientstyle['nav-open-btn']} aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <div className={clientstyle['overlay']} data-nav-toggler data-overlay></div>

      </div>
    </header>

        </>
    )
}


export default Clientnav;