import React, {Component, Fragment} from 'react';
import axiosInquiry from '../../axios-inquiry'

class Content extends Component {
    state = {
        page: null
    };

    async componentDidMount() {
        this.getPagesHandler()
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.getPagesHandler()
        }
    }

    getPagesHandler = async () => {
        const name = this.props.match.params.name;
        const response = await axiosInquiry.get('/pages/' + name + '.json');
        const page = response.data;
        this.setState({page})
    };


    render() {
        return this.state.page && (
            <Fragment>
                <div>
                    <div style={{textAlign: "center"}}>
                        <h1>{this.state.page.title}</h1>
                        <p>{this.state.page.text}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;