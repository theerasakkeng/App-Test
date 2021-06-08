import React, { useContext, useEffect, useCallback,useState} from 'react'
import Layout from '../Layout/Layout.js'
import { AuthContext } from '../Auth/AuthContext.js'
import { useHistory, Redirect } from "react-router-dom";

import { Map, Marker, Popup, } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import station from '../../Data/Stations.json'


export default function Dashboard() {

    //Map//
    const Mapview = () => {
        const [mount, setMount] = useState(undefined)
        const initMap = useCallback(() => {
            const mapRender = new Map({
                container: "map1",
                style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
                center: [100.523186, 13.736717],
                scrollZoom : true,
                zoom: 10
            });
            mapRender.on('load', function () {
                mapRender.addSource('station', {
                    'type': "geojson",
                    'data': station.features.map(stations => {
                        const popup = new Popup({ offset: 25 }).setText(
                            stations.properties.NAMET
                        );

                        const marker = new Marker()
                            .setLngLat([stations.geometry.coordinates[0], stations.geometry.coordinates[1]])
                            .setPopup(popup)
                            .addTo(mapRender);
                    })
                });
            })

            setMount(mapRender);
        }); 
        useEffect(() => {
            if (!mount) {
                initMap();
            }
        }, [mount, initMap])
        return (
            <div id="map1" style={{ width: "60vw", height: "70vh"}} >

            </div>
        )
    }

    const history = useHistory();
    const { currentUser, setCurrentuser } = useContext(AuthContext);
    const handleLogout = async () => {
        await setCurrentuser(null);
        localStorage.clear();
    };
    if (!currentUser) {
        return <Redirect to="/login" />
    }
    return (
        <Layout>
            
        <div style={{display:"flex",justifyContent:"center"}}>
        <Mapview/>
           
        </div>
        <div style={{textAlign:"center"}}>
        <button onClick={handleLogout}>LogOut</button>  
        </div>
        </Layout>


    )
}
