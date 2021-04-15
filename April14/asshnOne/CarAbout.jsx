import React from 'react'
import GoogleMapReact from "google-map-react";

function CarAbout() {
    return (
        <>
            <p class="align-middle mt-10">orem Ipsum is simply dummy text of the
                 printing and typesetting industry. 
                 Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of
                   type and scrambled it to make a type specimen 
                   book. It has survived not only five centuries, 
                   but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was 
                    popularised in the 1960s with the release
                     of Letraset sheets containing Lorem 
                     Ipsum passages, and more recently with
                      desktop publishing software like 
                      Aldus PageMaker including versions
                       of Lorem Ipsum.</p>
            <div style={{ height:"50vh", width: "50%"}}>
             <GoogleMapReact 
              bootstrapURLKeys= {{ key: "AIzaSyBjTJTtjCXRwaavR24lXd3rB9NbJNzb9us" }}
              defaultCenter={{lat: 12.913792017301523, lng: 77.60707011534454}}
              defaultZoom={1.00}
             ></GoogleMapReact>
            </div>
        </>
    )
}

export default CarAbout
