import { compose, withProps } from "recompose"
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import './WMap.scss'

export const WMap = (props) => {
    const { SType, info, style } = props.cmp
    const isMarkerShown = true

    const MyMapComponent = compose(
        withProps({
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5ovbworirm0U6QZQTpbQ29Jg6ABQ42jU&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={ style } />,
            mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
    )((props) =>
        <GoogleMap
            defaultZoom={info.zoom}
            defaultCenter={{ lat: info.lat, lng: info.lng }}
        >
            {isMarkerShown && <Marker position={{ lat: info.lat, lng: info.lng }} />}
        </GoogleMap>
    )


    return (
        <div className={"wMap " + SType}>
            <MyMapComponent></MyMapComponent>
        </div>
    )
}

