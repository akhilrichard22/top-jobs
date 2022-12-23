import React, { Component } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchJobs } from '../redux/jobActions';
import { Container, Card, Icon, Button } from 'semantic-ui-react';

function Jobs(props) {
    useEffect(() => {
        // samplefunc();
        props.fetchJobs();
    }, []);

    const navigate = useNavigate();

    const applyJob = (jobObj) => {
        navigate("/applyjob", { state: jobObj })

    }

    return (
        <Container style={{ paddingTop: '20px' }}>
            <Card.Group itemsPerRow={3}>
                {props.jobs
                    ?
                    props.jobs.map((item) => {
                        return (
                            <Card className="jobCard" key={item.id}>
                                <Card.Content>
                                    <Card.Header> {item.title} </Card.Header>
                                    <Card.Description>
                                        <div>
                                            <Icon name='rupee sign' />{item.salary ? item.salary : 'Not Disclosed'}
                                        </div>
                                        <div style={{ paddingTop: '10px' }}>
                                            <Icon name='location arrow' />{item.location}
                                        </div>
                                        <div style={{ paddingTop: '10px' }}>
                                            <Icon name='building' />{item.company}
                                        </div>
                                        <div style={{ paddingTop: '10px' }}>
                                            <Icon name='time' />{item.experience}
                                        </div>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra style={{ textAlign: 'center' }}>
                                    <Button className='homeButtons' onClick={() => applyJob(item)}>Apply</Button>
                                </Card.Content>
                            </Card>
                        );
                    })
                    :
                    <div>Error</div>
                }
            </Card.Group>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        jobs: state.job.jobsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJobs: () => {
            dispatch(fetchJobs());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
