const logo = `<svg width="217" height="46" viewBox="0 0 217 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
        <circle cx="23" cy="23" r="23" fill="#5F6FFF"/>
        <path d="M32 23H24V15C24 14.4477 23.5523 14 23 14C22.4477 14 22 14.4477 22 15V23H14C13.4477 23 13 23.4477 13 24C13 24.5523 13.4477 25 14 25H22V33C22 33.5523 22.4477 34 23 34C23.5523 34 24 33.5523 24 33V25H32C32.5523 25 33 24.5523 33 24C33 23.4477 32.5523 23 32 23Z" fill="white"/>
    </g>
    <text x="60" y="32" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600" fill="#000B6D" letter-spacing="-0.5">QuickConsult</text>
    <text x="180" y="32" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="#5F6FFF">24/7</text>
</svg>`;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'data:image/svg+xml;base64,' + btoa(logo);

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    // Use dataUrl as needed
};