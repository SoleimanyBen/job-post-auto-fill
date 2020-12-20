import React, { Component } from 'react'
import { Header, Flex } from '@primer/components'


class Navbar extends React.Component {
    render() {
        return(
            <Header style={{ width: '100%' }}>
                <Header.Item>
                        <span>Job Auto Fill</span>
                </Header.Item>
                <Header.Item >
                    <Header.Link href="#">Resume Details</Header.Link>
                </Header.Item>
                <Header.Item >
                    <Header.Link href="#">Site Settings</Header.Link>
                </Header.Item>
            </Header>
        )
    }
}

export default Navbar