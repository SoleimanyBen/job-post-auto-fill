import React, { Component } from 'react'
import { Grid, Box, Flex, SideNav, BorderBox, Heading, Text, TextInput, FormGroup, ButtonPrimary } from '@primer/components'
import { PersonIcon, DotIcon, ZapIcon } from '@primer/octicons-react'

class ResumeSettings extends React.Component {
    constructor() {
        super()

        this.state = {
            currentNavRoute: "personalDetails"
        }
    }

    changeSideNavState(location) {
        this.setState({ currentNavRoute: location })
    }

    render() {
        return (
            <Flex alignItems='row' m={3} pr={3}>
                <BorderBox p={3} backgroundColor='gray.0' minWidth={150} mr={3}>
                    <BorderBox borderWidth={0} borderBottomWidth={1} borderRadius={0} mb={2} pb={1}>
                        <Heading as="h5" fontSize={1} color="gray.7">Options</Heading>
                    </BorderBox>
                    <SideNav backgroundColor='gray.0' variant="lightweight">
                        <SideNav.Link id="personalDetails" href="#" onClick={ this.changeSideNavState.bind(this, "personalDetails") } selected={ (this.state.currentNavRoute == "personalDetails") ? true : false }>
                            <Text>Personal Details</Text>
                        </SideNav.Link>
                        <SideNav.Link id="resumeDetails" href="#url" onClick={ this.changeSideNavState.bind(this, "resumeDetails") } selected={ (this.state.currentNavRoute == "resumeDetails") ? true : false }>
                            <Text>Resume Upload</Text>
                        </SideNav.Link>
                        <SideNav.Link id="socialLinks" href="#url" onClick={ this.changeSideNavState.bind(this, "socialLinks") } selected={ this.state.currentNavRoute == "socialLinks" ? true : false }>
                            <Text>Social Links</Text>
                        </SideNav.Link>
                    </SideNav>
                </BorderBox>

                <BorderBox pl={3} pt={2} pb={2} pr={3} minWidth={535} hidden={ (this.state.currentNavRoute == "personalDetails") ? false : true }>
                    <Heading as="h2" fontSize={2}>Personal Details</Heading>
                    <hr />
                    <FormGroup>
                        <FormGroup.Label htmlFor="first_name">First Name</FormGroup.Label>
                        <TextInput variant="small" id="first_name" minWidth="97%" />
                    </FormGroup>
                    <FormGroup>
                        <FormGroup.Label htmlFor="last_name">Last Name</FormGroup.Label>
                        <TextInput variant="small" id="last_name" minWidth="97%" />
                    </FormGroup>
                    <FormGroup>
                        <FormGroup.Label htmlFor="email">First Name</FormGroup.Label>
                        <TextInput variant="small" id="email" minWidth="97%" />
                    </FormGroup>
                    <FormGroup>
                        <FormGroup.Label htmlFor="location">Location</FormGroup.Label>
                        <TextInput variant="small" id="location" minWidth="97%" />
                    </FormGroup>
                    <ButtonPrimary style={{float: 'right'}} width={100}>Save</ButtonPrimary>
                </BorderBox>

                <BorderBox pl={3} pt={2} pb={2} pr={3} minWidth={535} hidden={ (this.state.currentNavRoute == "resumeDetails") ? false : true }>
                    <Heading as="h2" fontSize={2}>Resume Details</Heading>
                    <hr />
                    <FormGroup>
                        <FormGroup.Label htmlFor="first_name">Upload Resume</FormGroup.Label>
                        <TextInput variant="small" id="first_name" minWidth="97%" />
                    </FormGroup>
                    <ButtonPrimary style={{float: 'right'}} width={100}>Save</ButtonPrimary>
                </BorderBox>
            </Flex>
            
        )
    }
}

export default ResumeSettings
