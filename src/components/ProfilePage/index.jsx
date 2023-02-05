import React from 'react';
import './styles.css';

import { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [sellerProfile, setSellerProfile] = useState([]);

    const getSellerProfile = async () => {
        const res = await fetch("http://localhost:5000/api/seller/sellerProfile", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                jwtToken: `${localStorage.getItem("jwtToken")}`,
            }
        })
        const results = await res.json();
        setSellerProfile(results);
        
        }
        useEffect(()=>{
            getSellerProfile();
        },[])
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="profile-img">
              <img src={sellerProfile.image} width={100} height={100} alt="" className='img-fluid' />
            </div>
          </div>
          <div className="col-12 border-bottom">
            <div className="SellerId-main">
              <div className="row">
                <div className="col-6 mt-4 mb-4">
              <div className="SellerId">
                <h5>SellerId</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.sellerId}</p>
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
                <h5>Name</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.name}</p>
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
                <h5>email</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.email}</p>
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
                <h5>Password</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.password}</p>
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
                <h5>Cinc number</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.CNIC}</p>
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
                <h5>profile pic</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4">
              <div className="SellerId-id profile-img">
                <img src={sellerProfile.image} alt="" width={100} height={100} className='img-fluid' />
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
                <h5>cnic picture</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4">
              <div className="SellerId-id">
                <img src={sellerProfile.cnicPicture} width={200} alt="" />
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
                <h5>shopname</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.shopName}</p>
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
                <h5>mobilenumber</h5>
              </div>
                </div>
                <div className="col-6 mt-4 mb-4 shadow">
              <div className="SellerId-id">
                <p className='m-0 pt-2 pb-2'>{sellerProfile.mobileNumber}</p>
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
