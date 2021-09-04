import React, { useState } from 'react';
import './Menu.scss';
import { GetAppRounded, GitHub, LinkedIn } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import { Alert } from '@material-ui/lab';


const OpenBrowser = (url) => {
    window.open(url, '_blank');
}

const Menu = () => {
    const [showMessage, setShowMessage] = useState(false)


    const DownloadCV = (e) => {
        e.preventDefault();
        let path = './assets/CV-MarcosWendy.pdf';

        fetch(path)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'CV-Wendy';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                setShowMessage(true);
                let time = 1;
                let i = setInterval(() => {
                    if (--time < 0) {
                        setShowMessage(false);
                        clearInterval(i);
                    };
                    
                }, 1000);
                
            })
    }


    return (
        <aside className="aside ">

            <Alert className={showMessage ? "alerta" : "hideAlert"} icon={<CheckIcon fontSize="inherit" />} severity="success" >
                Descarga completada!
            </Alert>
            <div className="aside-wrap">
                <div className="profile">
                    <div className="photo "></div>
                    <h1 className="name mt-1 mb-1"> Marcos Elian Wendy</h1>
                </div>
                <hr className="dropdown-divider"></hr>

            </div>
            <div className="contentMenu "></div>

            <div className="icons-contacto">
                <LinkedIn className="myicon" onClick={() => { OpenBrowser('https://www.linkedin.com/in/marcoswendy/') }} />
                <GitHub className="myicon" onClick={() => { OpenBrowser('https://github.com/MacroxW') }} />
                <GetAppRounded className={showMessage ? "myicon disabled" : "myicon"} onClick={(e) => { DownloadCV(e) }} />

            </div>
        </aside>
    );
}

export default Menu;