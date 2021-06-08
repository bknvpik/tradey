import { useEffect, useState } from 'react';
import '../styles/pages/ViewProfile.scss';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import ProfileNav from '../components/ProfileNav';
import http from '../http-common';

export default function ViewProfile() {
    const [userData, setUserData] = useState(Object);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        http.get('/view-profile/about-me', {withCredentials: true})
        .then(res => {
            setUserData(res.data);
            console.log(res.data);
            setStatus(true);
        }).catch(err => {
        console.log(err);
    });
    }, []);

    return (
        <div className="view-profile">
            <HeaderTitle text={ "My profile" } style={{ height: "15vh" }} />
            <div className="content">
                <ProfileNav />
                {status &&
                <div className="info">
                    <div className="profile-img">
                        <img src={process.env.PUBLIC_URL + `/assets/users-images/${ userData.image }`} alt="profile_img"></img>
                    </div>
                    <div className="user-details">
                            <div>
                                <div className="label">First Name:</div>
                                <div className="detail">{userData.firstName}</div>
                            </div>
                            <div>
                                <div className="label">Last Name:</div>
                                <div className="detail">{userData.lastName}</div>
                            </div>
                            <div>
                                <div className="label">E - Mail:</div>
                                <div className="detail">{userData.user.email}</div>
                            </div>
                            <div>
                                <div className="label">Country:</div>
                                <div className="detail">{userData.country}</div>
                            </div>
                            <div>
                                <div className="label">City:</div>
                                <div className="detail">{userData.city}</div>
                            </div>
                            <div>
                                <div className="label">ZIP Code:</div>
                                <div className="detail">{userData.zipCode}</div>
                            </div>
                            <div>
                                <div className="label">Address:</div>
                                <div className="detail">{`${userData.address1}  ${userData.address2}`}</div>
                            </div>
                    </div>
                </div>
                }
            </div>
           <Footer />
        </div>
    )
}
