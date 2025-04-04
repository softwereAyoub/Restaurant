import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTranslation } from 'react-i18next';
import '../i18n'; 
const mapContainerStyle = {
  width: '80%',
  height: '400px',
  borderRadius:'8px'
};
const center = {
  lat: 30.4171769,
  lng: -9.5963911,
};
const libraries = ['places'];

function Maps() {
              const { t } = useTranslation();
    
//   setKey("AIzaSyAU-NG4YDdXX4ZURCcXvVbRtiKARpiY53E");
const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAU-NG4YDdXX4ZURCcXvVbRtiKARpiY53E',
    libraries,
  });
  if (loadError) {

    return <div>Error loading maps</div>;
  }


  if (!isLoaded) {
   
    return <div>... Loading maps</div>;
  }

  return (
  <section className='flex flex-col items-center justify-center gap-[40px] p-[25px]'>
    <h2 className='flex font-extrabold items-center  gap-[30px]'>
                       <FontAwesomeIcon icon={faLocationDot} color="#123" fontSize={40} />
        {t('Restaurant location')}
    </h2>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      options={ {mapTypeId: "hybrid",streetViewControl: false,scaleControl: true,
        fullscreenControl: false,mapTypeControl: false,}}
    >
      <Marker position={center} />
    </GoogleMap>
  </section>
  )
}

export default Maps