import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '../components/Confirm'


const style = {
    wrapper: `h-screen w-screen flex flex-col`,
    main: `h-full w-screen flex-1 z-10`,
    mapContainer: `flex-1 w-full h-full`,
    rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-7 left-5 flex flex-col justify-end z-10`,
    rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll no-scrollbar scale-95 `,
  }

const Ride = () => {
  return (
     
    <div className={style.wrapper}>
      {/* {Comp()} */}

      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
     
    </div>
  )
}

export default Ride