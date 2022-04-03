import { createRef, useRef } from "react";
import React from "react";
class Input extends React.Component{
    
    constructor(props) {
        super(props);
        this.inputSetter = props.inputSetter;
        this.cSetter = props.cSetter;
        this.type = props.type;
        this.id = props.id;
        this.description = props.description;
        this.eDescription = props.eDescription;
        this.cPassRef = props.cPassRef;
        this.cPassError = props.cPassError;
        this.input = React.createRef();
        this.validate = this.validate.bind(this);
        this.state = {
            regex : props.checkRegex,
            inputClass : "",
            error : ""
        };

    }
    
    setRegex = (regex) => {
        this.setState({
            regex : regex
        });
    };
    setValidity = (inputClass) => {
        this.setState({
            inputClass : inputClass
        });
    };
    setError = (error) => {
        this.setState({
            error : error
        });
    };

    validate(event) {
        const inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));
        var cValue = this.input.current.value;
        if (this.id == 'pass') {
            this.cPassRef.current.setRegex('^' + cValue + '$');
            if (document.getElementById('cpass').value == '') {
                this.cPassRef.current.setValidity("");
                this.cPassRef.current.setError("");
                this.cSetter(null);
            }
            else if (document.getElementById('cpass').value == cValue) {
                this.cPassRef.current.setValidity("is-valid");
                this.cPassRef.current.setError("");
                this.cSetter(cValue);
            }
            else {
                this.cPassRef.current.setValidity("is-invalid");
                this.cPassRef.current.setError(this.cPassError);
                this.cSetter(null);
            }
        }
        if (this.id == 'cpass') {
            if (document.getElementById('cpass').value == '') {
                this.setState({
                    error : '',
                    inputClass : ''
                });
                this.inputSetter(null);
            }
        }
        const check = new RegExp(this.state.regex);
        if (check.test(cValue)) {
            this.state.inputClass = "is-valid";
            this.state.error = "";
            this.inputSetter(cValue);
            if (event.keyCode == 13) {
                inputs[(inputs.indexOf(event.target) + 1) % inputs.length].focus();
            }
            return;
        }
        this.inputSetter(null);
        this.state.inputClass = "is-invalid"
        this.state.error = this.eDescription;
    }
    

    render() {
        
        //const errorLabal = document.getElementById(id + 'error');
        //const inputElement = document.getElementById(id);


        return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">{this.description}</span>
            <input data-lpignore="true" ref={this.input} id={this.id} onKeyUp={this.validate} type={this.type} 
            className={"form-control " + this.state.inputClass} onBlur={this.validate}></input>
            <span className="col-sm-1"></span>
            <label id={this.id + 'error'} htmlFor={this.id} className="text-danger">{this.state.error}</label>
        </div>
        );
    }
}
export default Input;