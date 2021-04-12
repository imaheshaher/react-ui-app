import React, { useState } from 'react';
import Card from '../reusableComponents/Card';
const Home = (props) => {
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="slogan-section">
                            <h4>Securely share files <br /> across multiple device</h4>
                            <div className="drop-section">
                                <div className="drop-inner">
                                    <small>Drag and Drop file to upload<br />or paste or notes</small>
                                </div>
                            </div>
                        </div>

                        <div className="main-actions">
                            <div className="main-title">
                                Recent Uploads
                            </div>
                            <div className="action-buttons">
                                <div>
                                    <button><i class="fas fa-bars"></i></button>
                                    <button><i class="fas fa-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Card name="assignment-1" />
                        <Card name="assignment-2" />
                        <Card name="assignment-3" />
                        <Card name="assignment-4" />
                        <Card name="assignment-5" />
                        <Card name="assignment-6" />
                        <Card name="assignment-7" />
                        <Card name="assignment-8" />
                    </div>
                </section>
            </body>
        </html>
    )
}

export default Home;