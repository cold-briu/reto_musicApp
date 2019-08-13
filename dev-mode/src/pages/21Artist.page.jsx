import React, { Component } from 'react';
import Returnbar from '../layouts/Returnbar.layout'
import cardAlbumArtistDetail from '../components/albumCardArtistDetail.component'

class Artist extends Component {
    state = {}
    render() {
        const mapas = new Array(20).fill().map(entry => "holas")
        return (
            <>
                <Returnbar />
                <div className="artist__container center-align pt10">
                    <img class="responsive-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Sodastereo.jpg/220px-Sodastereo.jpg" />
                    <cardAlbumArtistDetail />
                    <h3>Artist Name</h3>
                    <h5>Argentina</h5>
                    <p>1983 · 1997</p>




                    <div className="artist__description pl10 pr10">
                        <p>
                            simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s, when an unknown printer took a galley of type
                              and scrambled it to make a type specimen book. It has survived
                              not only five centuries,
                        </p>

                    </div>

                </div>

            </>
        );
    }
}

export default Artist;