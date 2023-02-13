import React from 'react';
//import './styles.css';

import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';
import { sellerProfile } from '../../redux/slice/seller/thunk';

const ProfilePage = () => {
  //const [sellerProfile, setSellerProfile] = useState([]);
  let { seller, loading } = useSelector( (state) => state.seller)
  const dispatch = useDispatch();
  //console.log("sellerState",seller);

  //seller = seller.data;
  const profile = seller;
  console.log("sellerState",profile);


  //const getSellerProfile = data => dispatch(data)
    // const res = await fetch("http://localhost:5000/api/seller/sellerProfile", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //     jwtToken: `${localStorage.getItem("jwtToken")}`,
    //   }
    // })
    // const results = await res.json();
    // setSellerProfile(results);

  
  useEffect(() => {
    dispatch(sellerProfile());
    //getSellerProfile();
  }, [])

  if (loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="profile-img">
              <img src={profile.profilePicture} width={100} height={100} alt="" className='img-fluid' />
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>SellerId</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.sellerId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Full Name</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Email</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Password</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.password}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>CNIC Number</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.CNIC}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Mobile Number</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.mobileNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Profile Picture</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId-id profile-img">
                    <img src={profile.profilePicture} alt="" width={100} height={100} className='img-fluid' />
                    {/* "https://reqres.in/img/faces/9-image.jpg" */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>CNIC Picture</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId-id">
                    <img src={profile.cnicPicture} width={200} alt="" />
                    {/* "https://online.theunitedinsurance.com/Admin_files/Images/cnic-front-side.jpg" */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
                  <div className="SellerId">
                    <h4>Shop Name</h4>
                  </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
                  <div className="SellerId-id">
                    <p className='m-0 pt-2 pb-2'>{profile.shopName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;
