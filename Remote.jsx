function Remote({ onChannelChange }) {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className="remote-container">
            <h3>Remote Control</h3>
            <div className="remote-buttons">
                {buttons.map((num) => (
                    <button
                        key={num}
                        className="channel-button"
                        onClick={() => onChannelChange(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Remote;
