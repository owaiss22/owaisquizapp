import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import firebase from 'firebase';

const styles = {
    joinBtn: { float: 'right', inlineHeight: 'inherit' }
}

class App extends React.Component {

    state = {
        courses: [],
        joinedCourses: [],
        joinedCoursesBool: false
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getCourses();
        }
    }

    joinCourse = (course) => {
        const { user } = this.props;
        // console.log(course, user);

        const dbRef = firebase.database().ref().child("Users").child(user).child('Courses').child('Joined_Courses');
        dbRef.set({
            CourseName: 'HTML',
            Quizes: {
                Quiz: ['Quiz1', 'Quiz2', 'Quiz3'],
                Quiz1: {
                    Title: 'Quiz1',
                    Status: 'Not-Attempted',
                    Duration: 30,
                    Total_Questions: 3,
                    Passing_Marks: 50,
                    Questions: [
                        {
                            Title: "What is JavaScript",
                            Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                            Correct: 2
                        },
                        {
                            Title: "HTML Stands for",
                            Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                            Correct: 1
                        },
                        {
                            Title: "Inside which HTML element do we put the JavaScript?",
                            Options: ["<script>", "JS", "Scripting", "Javascritp"],
                            Correct: 1
                        }
                    ],
                    Result: {
                        score: 0,
                        correct_ques: 0,

                    }
                },
                Quiz2: {
                    Title: 'Quiz2',
                    Status: 'Not-Attempted',
                    Duration: 30,
                    Total_Questions: 3,
                    Passing_Marks: 50,
                    Questions: [
                        {
                            Title: "What is JavaScript",
                            Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                            Correct: 2
                        },
                        {
                            Title: "HTML Stands for",
                            Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                            Correct: 1
                        },
                        {
                            Title: "Inside which HTML element do we put the JavaScript?",
                            Options: ["<script>", "JS", "Scripting", "Javascritp"],
                            Correct: 1
                        }
                    ],
                    Result: {
                        score: 0,
                        correct_ques: 0,

                    }
                },
                Quiz3: {
                    Title: 'Quiz3',
                    Status: 'Not-Attempted',
                    Duration: 30,
                    Total_Questions: 3,
                    Passing_Marks: 50,
                    Questions: [
                        {
                            Title: "What is JavaScript",
                            Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                            Correct: 2
                        },
                        {
                            Title: "HTML Stands for",
                            Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                            Correct: 1
                        },
                        {
                            Title: "Inside which HTML element do we put the JavaScript?",
                            Options: ["<script>", "JS", "Scripting", "Javascritp"],
                            Correct: 1
                        }
                    ],
                    Result: {
                        score: 0,
                        correct_ques: 0,

                    }
                }
            }
        })
    }

    getCourses = () => {

        const fbRef = firebase.database().ref().child('Users').child(this.props.user).child('Courses');
        fbRef.on('value', val => {
            console.log(val.val().joined_Courses);

            if (!val.val().Joined_Courses) {
                console.log('false: joined courses nh hain');
                this.setState({
                    courses: val.val().Available_Courses,
                    joinedCoursesBool: false,
                })
            }
            else {
                console.log('true: joined courses hain');

                this.setState({
                    courses: val.val().Available_Courses,
                    joinedCourses: [val.val().Joined_Courses],
                    joinedCoursesBool: true,
                })

            }
        });

    }

    render() {
        const { user, classes } = this.props;
        const { courses, joinedCourses, joinedCoursesBool } = this.state;
        console.log(joinedCourses)
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{ marginTop: '20px' }} bg="dark" text="white">
                                <Card.Header>Current User Email</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    <Card.Title>Welcome:
                                         {user}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{ marginTop: '20px' }} bg="dark" text="white">
                                <Card.Header>Joined Courses</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    {
                                        joinedCoursesBool ?
                                            <div>
                                                {
                                                    joinedCourses.map((value, index) => {
                                                        console.log(value.HTML.CourseName, value.CourseName)
                                                        return (
                                                            <div>
                                                                <Card.Title>{value.HTML.CourseName}
                                                                    <Button onClick={() => { this.props.history.push(`/quiz-panel/${value.HTML.CourseName}`) }}
                                                                        style={{ float: 'right' }} variant="dark" type="submit">Open</Button>
                                                                </Card.Title>
                                                                <br />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            <Card.Title>You may not joined for any course</Card.Title>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{ marginTop: '20px' }} bg="dark" text="white">
                                <Card.Header>Recommended Courses</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    {
                                        courses.map((courseName, index) => {
                                            return (
                                                <div key={index}>
                                                    <Card.Title>{courseName}
                                                        <Button
                                                            variant="dark"
                                                            className={classes.joinBtn}
                                                            onClick={() => { this.joinCourse(courseName) }} >Join</Button>
                                                    </Card.Title>
                                                    <br />
                                                </div>
                                            )
                                        })
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* Nouman SHahzaib waqar usama */}

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(App);