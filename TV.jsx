function TV({ currentChannel }) {
    return (
        <div className="tv-container">
            <div className="tv-screen">
                {currentChannel ? (
                    <div className={`channel-display ${currentChannel === "No Signal" ? "no-signal" : "active-channel"}`}>
                        {currentChannel === "No Signal" ? (
                            <>
                                <div className="static-effect"></div>
                                <h2>No Signal</h2>
                            </>
                        ) : (
                            <div className="channel-content">
                                <h2>{currentChannel}</h2>
                                <div className="video-placeholder">📺</div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="standby">
                        <p>Press a button on the remote</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TV;
