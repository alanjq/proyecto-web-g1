import React from 'react';
import Container from '../../components/container/Container'
import Heading from '../../components/heading/Heading';
import ContactForm from './ContactForm'

function ContactSection() {
    return (
        <Container>
            <Heading sub="Get in touch">Let's talk</Heading>
            
            <ContactForm />
        </Container>
    )
}
export default ContactSection
