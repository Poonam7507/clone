import React from 'react';
import '../css/Stylecreatenote.css';

export default function Createnote() {
    return (
        <div className="maincontent">
            <form>
            <div>

                <input type="text" placeholder="Take a note" autoComplete='off' />
            </div>
            {/* <div>

                <textarea rows="" column="" placeholder="Write a note" autoComplete='off'/>
            </div> */}
            </form>
        </div>
    )
}
