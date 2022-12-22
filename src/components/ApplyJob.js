import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Grid, Container, Card, Icon, Button, Form, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { applyJob, applyJobStatus } from '../redux/jobActions';
import { Link } from 'react-router-dom';

function ApplyJob(props) {
    console.log("statussssss", props.jobStatus)
    const jobDetails = useLocation();
    const [applicantName, setAppName] = useState('');
    const [applicantEmail, setAppEmail] = useState('');
    const [applicantPhone, setAppPhone] = useState('');
    const [applicantAddress, setAppAddress] = useState('');
    const [applicantExperience, setAppExperience] = useState('');
    const [applicantNameError, setAppNameError] = useState(false);
    const [applicantEmailError, setAppEmailError] = useState(false);
    const [applicantPhoneError, setAppPhoneError] = useState(false);
    const [applicantExperienceError, setAppExperienceError] = useState(false);

    useEffect(() => {
        props.applyJobStatus(false);
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

        if (applicantExperience == '') {
            setAppExperienceError(true)
            error = true
        }
        else {
            setAppExperienceError(false)
        }

        if (error == true) {
            console.log("error in the form")
        }
        else {
            let payload = {
                name: applicantName,
                email: applicantEmail,
                phone: applicantPhone,
                address: applicantAddress,
                experience: applicantExperience,
                jobId: jobDetails.state.id
            }
            props.applyJob(payload)
        }
    }

    return (
        <Container style={{ paddingTop: '20px' }}>
            <Grid centered columns={2}>
                {props.jobStatus == false ?
                    <Grid.Column>
                        {jobDetails.state
                            ?
                            <>
                                <Grid.Row style={{ paddingTop: "20px" }}>
                                    <Card className="jobCard" >
                                        <Card.Content>
                                            <Card.Header> {jobDetails.state.title} </Card.Header>
                                            <Card.Description>
                                                <div>
                                                    <Icon name='rupee sign' />{jobDetails.state.salary ? jobDetails.state.salary : 'Not Disclosed'}
                                                </div>
                                                <div style={{ paddingTop: '10px' }}>
                                                    <Icon name='location arrow' />{jobDetails.state.location}
                                                </div>
                                                <div style={{ paddingTop: '10px' }}>
                                                    <Icon name='building' />{jobDetails.state.company}
                                                </div>
                                                <div style={{ paddingTop: '10px' }}>
                                                    <Icon name='time' />{jobDetails.state.experience}
                                                </div>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Row>
                                <Grid.Row style={{ paddingTop: "20px" }}>
                                    <Grid.Column>
                                        <Card className="jobCard">
                                            <Card.Content>
                                                <Card.Header>Application Form</Card.Header>
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
                                                            <Form.Input
                                                                placeholder='Address (optional)'
                                                                name='applicantAddress'
                                                                value={applicantAddress}
                                                                onChange={(e) => setAppAddress(e.target.value)}
                                                            />
                                                            <Form.Input
                                                                placeholder='Experience in months'
                                                                name='applicantExperience'
                                                                value={applicantExperience}
                                                                onChange={(e) => setAppExperience(e.target.value)}
                                                                error={applicantExperienceError}

                                                            />
                                                            <div style={{ textAlign: 'center' }}>
                                                                <Button type='submit'>Submit</Button>
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
                                                    applicantExperienceError ?
                                                        <Card.Content extra>
                                                            <Message negative className='formErrorContainer'>
                                                                <Message.Header>Error in Experience field</Message.Header>
                                                                <p>Experience field should not be empty</p>
                                                            </Message>
                                                        </Card.Content>
                                                        :
                                                        null
                                                }
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid.Row>
                            </>
                            :
                            <Message negative className='formErrorContainer'>
                                <Message.Header>Error</Message.Header>
                            </Message>
                        }
                    </Grid.Column>
                    :
                    <div style={{ paddingTop: "30px" }}>
                        <div style={{ paddingBottom: "20px" }}>Application Submitted Successfully</div>
                        <Link to="/jobs">
                            <Button className='homeButtons'>Jobs</Button>
                        </Link>
                    </div>
                }
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        jobs: state.job.jobsList,
        jobStatus: state.job.jobApplicationStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        applyJob: (response) => {
            dispatch(applyJob(response));
        },
        applyJobStatus: (response) => {
            dispatch(applyJobStatus(response));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJob);
