import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestPage = () => {
    const [auth] = useAuth();
    const [user, setUser] = useState([]);
    

    const profileData = async () => {
        // console.log(auth.token)
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/me", {
                headers: {
                    authorization: auth.token
                }
            });
            setUser(data.user);
            // console.log(data.user);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        profileData();
    },[auth.token]);

    return (
        <>
            <h1 className="pt-40">test file</h1>
            <p>{JSON.stringify(auth, null, 4)}</p>
            <div className="mt-10 text-center text-xl text-black">

                <h1>{user.name}</h1>
                {/* {Array.isArray(user) ? (
                    user.map((p) => (
                        <div key={p._id}>{p.name}</div>
                    ))
                ) : (
                    <p>No user data available</p>
                )} */}
            </div>
        </>
    );
};

export default TestPage;