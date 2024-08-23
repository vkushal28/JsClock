function updateTime() {
    let time = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let timeObject = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        period: time.getHours() >= 12 ? 'PM' : 'AM',
        day: time.getDate(),
        month: monthNames[time.getMonth()],
        year: time.getFullYear(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    const clockString = `
    <span class="keyword">let</span> clock = {
        <span class="property">hour</span>: <span class="number">${timeObject.hour}</span>,
        <span class="property">minute</span>: <span class="number">${timeObject.minute}</span>,
        <span class="property">second</span>: <span class="number">${timeObject.second}</span>,
        <span class="property">period</span>: <span class="string">"${timeObject.period}"</span>,
        <span class="property">day</span>: <span class="number">${timeObject.day}</span>,
        <span class="property">month</span>: <span class="string">"${timeObject.month}"</span>,
        <span class="property">year</span>: <span class="number">${timeObject.year}</span>,
        <span class="property">timezone</span>: <span class="string">"${timeObject.timezone}"</span>
    }<span class="punctuation">;</span>`;

    document.getElementById('clockDisplay').innerHTML = clockString;
}

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.src = 'images/sun.svg';
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.src = 'images/moon.svg';
    }
}

function initializeMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    // Set default mode to dark mode
    body.classList.add('dark-mode');
    modeIcon.src = 'images/moon.svg';
}

function changeFontSize() {
    const sizes = ['25px', '30px', '35px', '40px'];
    const currentSize = document.getElementById('clockDisplay').style.fontSize;
    const nextSize = sizes[(sizes.indexOf(currentSize) + 1) % sizes.length];
    document.getElementById('clockDisplay').style.fontSize = nextSize;
}

document.getElementById('modeToggle').addEventListener('click', toggleMode);
document.getElementById('fontSizeBtn').addEventListener('click', changeFontSize);

// Set initial mode when page loads
initializeMode();
// Update time every second
setInterval(updateTime, 1000);
updateTime();

function showConsoleMessage() {
    const message = `
    %cHey there! If you're curious about my work or need to get in touch, feel free to check out these links:

    %cGitHub: %chttps://github.com/vkushal28
    %cPortfolio: %chttps://kushalverma.vercel.app/
    %cLinkedIn: %chttps://www.linkedin.com/in/kushalverma28/
    %cStack Overflow: %chttps://stackoverflow.com/users/8290251/kushal-verma
    %cEmail: %ckushalverma.connect@gmail.com
    `;

    console.log(message,
        'font-size: 18px; color: #fff;',  // Main message style
        'font-size: 16px; color: #ff79c6;',  // Label style
        'font-size: 16px; color: #007acc;',  // GitHub link style
        'font-size: 16px; color: #ff79c6;',  // Label style
        'font-size: 16px; color: #007acc;',  // Portfolio link style
        'font-size: 16px; color: #ff79c6;',  // Label style
        'font-size: 16px; color: #007acc;',  // Stack Overflow link style
        'font-size: 16px; color: #ff79c6;',  // Label style
        'font-size: 16px; color: #007acc;',  // LinkedIn link style
        'font-size: 16px; color: #ff79c6;',  // Label style
        'font-size: 16px; color: #ff0000;'   // Email style
    );
}

showConsoleMessage();

//TODO: show sun rising up and then setting down, then moon rising up and setting down, based on hour of the day
function updateSunMoon() {
    const sunMoonImg = document.getElementById('sunMoon');
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        // Morning to Noon
        sunMoonImg.src = 'images/sunrise.svg';  // Change to different images if needed
    } else if (hour >= 12 && hour < 18) {
        // Noon to Sunset
        sunMoonImg.src = 'images/midday.svg';
    } else if (hour >= 18 && hour < 24) {
        // Sunset to Night
        sunMoonImg.src = 'images/sunset.svg';
    } else {
        // Night
        sunMoonImg.src = 'images/moon.svg';
    }
}

// updateSunMoon();
// setInterval(updateSunMoon, 3600000);