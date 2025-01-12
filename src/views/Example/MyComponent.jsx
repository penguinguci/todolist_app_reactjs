import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500'},
            { id: 'abcJob2', title: 'Testers', salary: '400'},
            { id: 'abcJob3', title: 'Project Manager', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)

        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        // this.setState({
        //     arrJobs: currentJobs
        // })

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    delelteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, ' current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component di mount')
    }

    // re-render
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    delelteAJob={this.delelteAJob}
                />
            </>
        )
    }
}

export default MyComponent;