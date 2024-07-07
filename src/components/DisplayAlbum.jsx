import React from 'react';
import Navbar from "./Navbar.jsx";
import {useParams} from "react-router";
import {albumsData, assets} from "../assets/assets.js";

const DisplayAlbum = () => {

    const {id} = useParams()
    const albumData = albumsData[id]

    return (
        <>
            <Navbar/>
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={albumData.image} alt=""/>
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bol mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img className="inline-block w-5" src={assets.spotify_logo} alt=""/>
                        <b>Spotify</b>
                        • 1,234,234 likes
                        • <b>50 songs,</b>
                        about 2 hours 30 minutes
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item,index) => (
                    <div></div>
                ))
            }
        </>
    );
};

export default DisplayAlbum;