import MainNavigation from "../components/MainNavigation";
import React from "react";
function ErrorPage(){
    return <>
      <MainNavigation/>
      <main>
        <h1>An Error Occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
}

export default ErrorPage;