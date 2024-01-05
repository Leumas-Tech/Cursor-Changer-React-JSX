import React, { useState, useEffect } from 'react';

const CURSOR_WIDTH = 32;
const CURSOR_HEIGHT = 32;

const CursorChanger = () => {
    const [cursor, setCursor] = useState(localStorage.getItem('customCursor') || 'default');

    useEffect(() => {
        if (cursor === 'default') {
            document.documentElement.style.cursor = 'default';
        } else {
            // Directly use relative paths from the public directory
            const cursorUrl = cursor.startsWith('Cursors/') ? `/${cursor}` : cursor;
            const hotspotX = CURSOR_WIDTH / 2;
            const hotspotY = CURSOR_HEIGHT / 2;
            document.documentElement.style.cursor = `url('${cursorUrl}') ${hotspotX} ${hotspotY}, auto`;
        }
    }, [cursor]);

    const handleCursorChange = (event) => {
        const newCursor = event.target.value;
        setCursor(newCursor);
        localStorage.setItem('customCursor', newCursor);
    };



    return (
        <div className="flex flex-col items-center justify-center p-4">
            <select
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                onChange={handleCursorChange}
                value={cursor}
            >
                <option value="default">Default Cursor</option>
                <option value="Cursors/1.svg">Pokeball</option>
                <option value="Cursors/2.svg">Wii Remote</option>
                <option value="Cursors/3.svg">Sword</option>
                <option value="Cursors/4.svg">Zombie</option>
                {/* ... other cursor options ... */}
            </select>
        </div>
    );
};

export default CursorChanger;
