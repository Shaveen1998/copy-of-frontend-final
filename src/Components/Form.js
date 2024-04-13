import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState, useMemo, useEffect } from 'react';
import Select from 'react-select'
import { useNavigate, Link } from "react-router-dom";
import { auth, db, storage } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';
import countryList from 'react-select-country-list'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Form() {


  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const current = JSON.parse(localStorage.getItem("user")) || null;
  // const docRef = doc(db, "users", current.uid);

  const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const navigate = useNavigate()

  useEffect(() => {
    if (current) {
      const fetchData = async () => {
        try {
          const docSnapshot = await getDoc(doc(db, "users", current.uid));
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setData(userData);
            setCountry({ label: userData.country, value: userData.country });
            console.log("User data:", userData);
          } else {
            console.log("Document doesn't exist");
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  },[file])

  const handleCountrySelect = (selectedOption) => {
    setCountry(selectedOption);
    setData({ ...data, country: selectedOption ? selectedOption.value : null });
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
  };
  
  console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try{
      await setDoc(doc(db, "users", current.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      const docSnapshot = await getDoc(doc(db, "users", current.uid));
      if (docSnapshot.exists()) {
        const addedData = docSnapshot.data();
        console.log("Document data:", addedData);
      } else {
        console.log("Document doesn't exist");
      }
      navigate("/profile")
    }
    catch(error){
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleAdd}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    onChange={handleInput}
                    value={data.username || ''}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="User Name"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                <img
                  src={data && data.img ? data.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                  alt=""
                  className="h-12 w-12 text-gray-300"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Change Profile photo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  onChange={handleInput}
                  value={data.firstName || ''}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={data.lastName || ''}
                  onChange={handleInput}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  disabled="disabled"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={current.email}
                  onChange={handleInput}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                {/* <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>India</option>
                </select> */}
                <Select
                  id="country"
                  name="country"
                  options={options}
                  value={country}
                  onChange={handleCountrySelect}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="passport-no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Passport ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="passportNo"
                  id="passportNo"
                  autoComplete="passport-no"
                  onChange={handleInput}
                  value={data.passportNo || ''}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </a>

        {/* <a
          href="/profile"
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        > */}
        <button
          type="submit"
          disabled={per !== null && per < 100}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
          
        {/* </a> */}
      </div>
    </form>
  );
}
