import React, { useState, useContext } from "react";
import { ContextLang } from "../../App";
import { useTranslation } from "react-i18next";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavBar from "../../Component/Common Component/NavBar/NavBar";
import Footer from "../../Component/Common Component/Footer/Footer";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import { REACT_App_GOOGLE_MAPS_KEY} from "../"
const LocationComponent = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const [query,setQuery]=useState("")
  return (
    <>
    <NavBar />
    <div className="main_address py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={6} md={9} sm={12} className="">
            <Card className="address_card">
              <div className="row d-flex">
                <Col xs={1} lg={1} md={1} sm={1}>
                  <Link to="/home">
                    {selectedLanguage === "ar" ? (
                      <FaArrowRight className=" arrow_icon arrow_icon_ar" />
                    ) : (
                      <FaArrowLeft className="arrow_icon arrow_icon_en" />
                    )}
                  </Link>
                </Col>
                <Col xs={10} lg={10} md={10} sm={10} className="">
                  <h4 className="text-center">{t("address_title")}</h4>
                </Col>
              </div>

              <div className="row justify-content-center">
                <div class="col-10 mb-2 p-r">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    name="address"
                    onChange={(e)=>{setQuery(e.target.value)}}
                    placeholder={t("address_title")}
                    value={query}
                  />
                </div>
                <div class="col-10 mb-2 p-r">

                </div>
                <div class="col-8 submit_btn mt-4">
                  <button type="submit" class="btn mb-4 mx-4 sing_in">
                    {t("address_btn")}
                  </button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default LocationComponent;


// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, PlacesAutocomplete } from '@react-google-maps/api';

// const MapContainer = () => {
//   const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.006 });

//   const handlePlaceSelect = (place) => {
//     setMapCenter({
//       lat: place.geometry.location.lat(),
//       lng: place.geometry.location.lng(),
//     });
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap
//         center={mapCenter}
//         zoom={12}
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//       >
//         <PlacesAutocomplete onSelect={handlePlaceSelect}>
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input {...getInputProps({ placeholder: 'Search for a place...' })} />
//               <div>
//                 {loading ? <div>Loading...</div> : null}
//                 {suggestions.map((suggestion) => {
//                   const style = {
//                     backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
//                   };
//                   return (
//                     <div {...getSuggestionItemProps(suggestion, { style })}>
//                       {suggestion.description}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;
