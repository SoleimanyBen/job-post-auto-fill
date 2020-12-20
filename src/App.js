import { Box } from '@primer/components';
import React, { Component } from 'react'

import Navbar from './components/Navbar'
import ResumeSettings from './components/ResumeSettings'

class App extends React.Component {

    webpageName() 
    {
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
            document.getElementById('test').innerText = tabs[0].url
        });
    }

    render() {
        return (
            <Box>
                <Navbar />
                <ResumeSettings />
            </Box>
            
        )
    }
}

export default App