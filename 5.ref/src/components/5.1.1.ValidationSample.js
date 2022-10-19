import { Component } from "react";
import '../css/ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }    

    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // 포커스가 넘어가게 하기 
    }

    render() {
        return (
          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
              ref={(ref) => this.input = ref}
            />
            <button
                onClick={this.handleClick}
            >검증하기</button>
          </div>
        );
    }
}

export default ValidationSample;

