import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Landing from "../../pages/home/Landing";
import UserDashBoard from "../../pages/user/UserDashBoard";



export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const data = localStorage.getItem("auth");
            if (data) {
                const parseData = JSON.parse(data);
                // console.log(parseData.token)
                setAuth({
                    ...auth,
                    user: parseData.user,
                    token: parseData.token
                });
            };
            console.log(auth.token)
            //     // const res = await axios.get("http://localhost:8000/api/v1/user");
            //     const res = localStorage.getItem(toString("auth"))
            //     const parseData = JSON.parse(res)
            //     console.log(parseData)
            //     // console.log(res.data)
                if (auth.token) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            };
            if (auth?.token) authCheck();
        }, [auth?.token]);

    return ok ? <UserDashBoard /> : <Landing />;
}
