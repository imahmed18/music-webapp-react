import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/91c22a97034233.5ebbf8e0e48f6.png" alt="logo" />

            <SidebarOption title="Home" Icons={HomeIcon} />
            <SidebarOption title="Search" Icons={SearchIcon} />
            <SidebarOption title="Your Library" Icons={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist =>(
                <SidebarOption title={playlist.name} />
            ))}
            
        </div>
    )
}

export default Sidebar
