import axios from "axios";
import React, { useEffect } from "react";
export function Login() {
    const fetchAuthUser = async () => {
        const response = await axios
            .get("http://localhost:8080/api/auth/login/success")
            .catch((err) => {
                console.log("Not properly authenticated");

            });

        if (response && response.data) {
            console.log("User: ", response.data);

        }
    };
    const redirectToGoogleSSO = async () => {
        let timer = null;
        const googleLoginURL = "http://localhost:8080/api/auth/google";
        const newWindow = window.open(
            googleLoginURL,
            "_blank",
            "width=500,height=600"
        );

        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    console.log("Yay we're authenticated");
                    fetchAuthUser();
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };
    return <button onClick={redirectToGoogleSSO}>login</button>
}