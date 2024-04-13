import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/firebase";
import Modal from './modal';

export default function ProfileHeader() {

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const current = JSON.parse(localStorage.getItem("user")) || null;
  const docRef = doc(db, "users", current.uid);

  const getProfile = async () => {
    try{
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUserData(userData);
        console.log("Document data:", userData);
      } else {
        console.log("Document doesn't exist");
      }
    }
    catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-2">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
           
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            {userData && (
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome {userData.firstName}
              </h1>
            )}
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-10">
              Feeling Adventurous ?.
              <br />
              Where To.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              New offers and new places to see everyday.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

              <Modal showModal={showModal} setShowModal={setShowModal}/>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Previous Trips <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            {userData && (
              <img
                className="absolute left-0 top-0 w-[27rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={userData.img}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            )}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold leading-7 mx-20 mb-10 text-gray-900  sm:truncate sm:text-3xl sm:tracking-tight">
          Ongoing Trips
        </h2>
    </div>
  );
}
