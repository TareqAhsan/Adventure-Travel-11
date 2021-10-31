import axios from "axios";
import React, { useEffect, useState } from "react";

const usePackages = () => {
  const [packages, setPackages] = useState();
  useEffect(() => {
    axios("https://macabre-goosebumps-11185.herokuapp.com/packages").then((result) => {
      // console.log(result.data);
      setPackages(result.data);
    });
  }, [packages]);
  return {packages,setPackages};
};

export default usePackages;


//  