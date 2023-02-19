import React from 'react';

export default class TestComponent extends React.Component {

    state = {
        randomNumber: 0
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // chạy lần duy nhất khi component xuất hiện trên trang web
        console.log("Test component vừa được mount");

        // lấy dữ liệu trong này: gọi api, lấy từ local storage
        /*
        useEffect(() => {

        }, []);
        */
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.randomNumber > this.state.randomNumber) {
            console.log('giá trị trước lớn hơn giá trị sau');
        } else {
            console.log('giá trị trước nhỏ hơn hoặc bằng giá trị sau');
        }

        // khi props, state thay đổi giá trị
        console.log("Test Component vừa được update");

        /*
        useEffect(() => {

        });
        */
    }

    componentWillUnmount() {
        // chạy lần duy nhất trước khi component hẹo
        console.log("Test Component vừa bay màu");
    }

    shouldComponentUpdate() {
        return false;
    }

    generateRandomNumber = () => {
        let value = Math.random() * 100;
        this.setState({ randomNumber: value });
    }

    render() {
        return <div className="test-component">
            <h1>This is test component</h1>
            <button onClick={this.generateRandomNumber}>Generate random number</button>
            <h3>Test data: {this.state.randomNumber}</h3>
        </div>;
    }
}