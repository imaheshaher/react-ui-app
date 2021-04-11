import React from 'react';
const NavBar = () => {
    return (
        <html>
            <body>
                <section>
                    <div className="navbar">
                        <div className="brand-name">
                            <i class="fab fa-twitter-square"></i>
                            <span><strong>Drop</strong></span>
                        </div>
                        <div className="nav-menu">
                            <ul>
                                <li>About</li>
                                <li>Product</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div className="nav-button">
                            <button><i class="fas fa-cloud-upload-alt b-icon"></i>&nbsp;&nbsp;<span>Upload</span></button>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default NavBar;