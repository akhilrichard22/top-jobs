import React, { useState, useEffect } from 'react';
import { Grid, Container, Card, Icon, Button, Form, Message, Image, Divider } from 'semantic-ui-react';
import AboutImg from '../images/aboutImg.jpg'
import { postContact, postContactStatus } from '../redux/contactActions'
import { connect } from 'react-redux';

function Contact(props) {
    const [applicantName, setAppName] = useState('');
    const [applicantEmail, setAppEmail] = useState('');
    const [applicantPhone, setAppPhone] = useState('');
    const [applicantMessage, setAppMessage] = useState('');
    const [applicantNameError, setAppNameError] = useState(false);
    const [applicantEmailError, setAppEmailError] = useState(false);
    const [applicantPhoneError, setAppPhoneError] = useState(false);
    const [applicantMessageError, setAppMessageError] = useState(false);

    useEffect(() => {
        // console.log("entryyyyy".props.contactApplicationStatus)
        props.postContactStatus(false);
    }, []);


    const handleSubmit = (e) => {
        let error = false;
        let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let phoneFormat = /^[6-9]\d{9}$/;
        let nameFormat = /^[A-Za-z\s]*$/;

        console.log("qqqqqq", applicantPhone.match(phoneFormat))

        if (applicantName.match(nameFormat) == null || applicantName == '') {
            setAppNameError(true)
            error = true
        }
        else {
            setAppNameError(false)
        }

        if (applicantEmail.match(mailFormat) == null) {
            setAppEmailError(true)
            error = true
        }
        else {
            setAppEmailError(false)
        }

        if (applicantPhone.match(phoneFormat) == null) {
            setAppPhoneError(true)
            error = true
        }
        else {
            setAppPhoneError(false)
        }

        if (applicantMessage == '') {
            setAppMessageError(true)
            error = true
        }
        else {
            setAppMessageError(false)
        }

        if (error == true) {
            console.log("error in the form")
        }
        else {
            let payload = {
                name: applicantName,
                email: applicantEmail,
                phone: applicantPhone,
                message: applicantMessage
            }
            props.postContact(payload)
        }
    }

    return (
        <Container style={{ paddingTop: '20px' }}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet justo donec. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Cursus sit amet dictum sit amet. Donec et odio pellentesque diam volutpat commodo sed egestas. Facilisis mauris sit amet massa vitae tortor condimentum. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Cursus sit amet dictum sit. Platea dictumst vestibulum rhoncus est pellentesque elit. Condimentum lacinia quis vel eros donec ac. Consectetur a erat nam at lectus urna duis convallis convallis. Aliquet eget sit amet tellus cras.
                        <Divider hidden />
                        Nulla facilisi cras fermentum odio eu feugiat. Duis convallis convallis tellus id interdum velit laoreet. Dictumst quisque sagittis purus sit amet volutpat consequat. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. At erat pellentesque adipiscing commodo elit. Massa sapien faucibus et molestie ac feugiat sed. Ut venenatis tellus in metus vulputate. Consectetur adipiscing elit ut aliquam purus sit. Id aliquet lectus proin nibh. Id neque aliquam vestibulum morbi blandit cursus risus. Arcu risus quis varius quam quisque id.
                        <Divider hidden />
                        Massa sapien faucibus et molestie ac feugiat sed. Ut venenatis tellus in metus vulputate. Consectetur adipiscing elit ut aliquam purus sit. Id aliquet lectus proin nibh. Id neque aliquam vestibulum morbi blandit cursus risus. Arcu risus quis varius quam quisque id.
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={AboutImg} size='big'></Image>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card className="jobCard">
                            <Card.Content>
                                <Card.Header>Get In Touch with Us</Card.Header>
                                <Card.Description>
                                    <div>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Input
                                                placeholder='Name'
                                                name='applicantName'
                                                value={applicantName}
                                                onChange={(e) => setAppName(e.target.value)}
                                                error={applicantNameError}
                                            />
                                            <Form.Input
                                                placeholder='Email'
                                                name='applicantEmail'
                                                value={applicantEmail}
                                                onChange={(e) => setAppEmail(e.target.value)}
                                                error={applicantEmailError}
                                            />
                                            <Form.Input
                                                placeholder='Phone'
                                                name='applicantPhone'
                                                value={applicantPhone}
                                                type="number"
                                                maxLength="10"
                                                error={applicantPhoneError}
                                                onChange={(e) => setAppPhone(e.target.value)}
                                            />
                                            <Form.TextArea
                                                placeholder='Message'
                                                name='applicantMessage'
                                                value={applicantMessage}
                                                onChange={(e) => setAppMessage(e.target.value)}
                                                error={applicantMessageError}
                                            />
                                            <div style={{ textAlign: 'center' }}>
                                                <Button type='submit' disabled={props.contactApplicationStatus}>Submit</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </Card.Description>
                                {
                                    applicantNameError ?
                                        <Card.Content extra>
                                            <Message negative className='formErrorContainer'>
                                                <Message.Header>Error in Name field</Message.Header>
                                                <p>Name field should not be empty or contain special characters</p>
                                            </Message>
                                        </Card.Content>
                                        :
                                        null
                                }
                                {
                                    applicantEmailError ?
                                        <Card.Content extra>
                                            <Message negative className='formErrorContainer'>
                                                <Message.Header>Error in Email field</Message.Header>
                                                <p>Please enter a valid email id</p>
                                            </Message>
                                        </Card.Content>
                                        :
                                        null
                                }
                                {
                                    applicantPhoneError ?
                                        <Card.Content extra>
                                            <Message negative className='formErrorContainer'>
                                                <Message.Header>Error in Phone field</Message.Header>
                                                <p>Please enter a valid 10 digit Phone number</p>
                                            </Message>
                                        </Card.Content>
                                        :
                                        null
                                }
                                {
                                    applicantMessageError ?
                                        <Card.Content extra>
                                            <Message negative className='formErrorContainer'>
                                                <Message.Header>Error in Message field</Message.Header>
                                                <p>Message field should not be empty and between 10-150 characters</p>
                                            </Message>
                                        </Card.Content>
                                        :
                                        null
                                }
                                {
                                    props.contactApplicationStatus == true ?
                                        <Card.Content extra>
                                            <Message positive className='formErrorContainer'>
                                                <Message.Header>Contact Submitted Successfully</Message.Header>
                                            </Message>
                                        </Card.Content>
                                        :
                                        null
                                }
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='contactUsCard'>
                        <Card>
                            <Card.Content>
                                <Card.Header>Contact Us</Card.Header>
                                <Card.Description>
                                    <div>
                                        <h5><b>Phone:</b></h5>
                                        <div>
                                            <p>(91) 987 654 3210</p>
                                            <p>(91) 987 654 3211</p>
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px' }}>
                                        <h5><b>Address:</b></h5>
                                        <div>
                                            <p>123 Park Avenue C, AK Marg, Delhi, India</p>
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px' }}>
                                        <h5><b>Email:</b></h5>
                                        <div>
                                            <p>contact@topjobs.com</p>
                                        </div>
                                    </div>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    console.log("poiuyttrrhjggvj", state);
    return {
        contactApplicationStatus: state.contact.contactApplicationStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postContact: (response) => {
            dispatch(postContact(response));
        },
        postContactStatus: (response) => {
            dispatch(postContactStatus(response));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);