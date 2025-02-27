// ==UserScript==
// @name         Twitter and X Link Banner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Show a banner to open twitter.com and x.com links in xcancel.com, excluding blog links
// @author       Your Name
// @match        *://twitter.com/*
// @match        *://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create and show the banner
    function showBanner() {
        // Create the banner element
        const banner = document.createElement('div');
        banner.style.position = 'fixed';
        banner.style.top = '0';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.backgroundColor = '#007AFF'; // Apple blue color
        banner.style.color = '#FFFFFF';
        banner.style.padding = '10px';
        banner.style.textAlign = 'center';
        banner.style.zIndex = '1000';
        banner.style.fontSize = '16px';
        banner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        
        // Create the button
        const button = document.createElement('button');
        button.innerText = 'Open in xcancel.com';
        button.style.marginLeft = '10px';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#FFFFFF';
        button.style.color = '#007AFF';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        
        // Set the button click event
        button.onclick = function() {
            window.location.href = window.location.href.replace(/twitter\.com|x\.com/, 'xcancel.com');
        };

        // Append the button to the banner
        banner.appendChild(document.createTextNode('You are viewing a Twitter/X link.'));
        banner.appendChild(button);
        
        // Append the banner to the body
        document.body.appendChild(banner);
    }

    // Show the banner when the script runs
    showBanner();
})();
