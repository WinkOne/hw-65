import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import CATEGORIES from "../../constants";
import axiosInquiry from '../../axios-inquiry'

class Edit extends Component {
    state = {
        category: '',
        selectPages: [],
        title: '',
        text: '',
        currentCaregory: ''
    };

    valueChangeHandler = async (e) => {
        const {value} = e.target;

        const response = await axiosInquiry.get(`/pages/${value}.json`);
        this.setState({title: response.data.title, text: response.data.text, currentCaregory: value})

    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    editPageHandler = (e) => {
        e.preventDefault();

        const edit = {
            title: this.state.title,
            text: this.state.text
        };
        axiosInquiry.put(`/pages/${this.state.currentCaregory}.json`, edit);
        this.props.history.push(`/pages/${this.state.currentCaregory}`);
    };

    render() {
        return (
            <Form onSubmit={e=>this.editPageHandler(e)}>
                <FormGroup>
                    <Label for="select">Pages:</Label>
                    <Input type="select" name="select" id="select"
                           onChange={this.valueChangeHandler}
                    >
                        {CATEGORIES.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Input>
                </FormGroup>
                <div>
                    <FormGroup>
                        <Label for="text">Title:</Label>
                        <Input onChange={(e)=>this.inputChangeHandler(e)} value={this.state.title} type="text" name="title"
                               id="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="textarea">Text:</Label>
                        <Input onChange={(e)=>this.inputChangeHandler(e)} value={this.state.text} type="textarea"
                               name="text" id="textarea"/>
                    </FormGroup>
                </div>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default Edit;