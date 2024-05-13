import { Oval } from "react-loader-spinner";

import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center my-40">
      <Oval 
      visible={true}
      height="80"
      width="80"
      color="#8547b2"
      secondaryColor=""
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
    </div>
  )
}

export default Loader
