import React, { EventHandler, useState } from "react";
import toastrService from "../services/toastr.service";
import { ToastrList } from "./toastr/ToastrList";

export const AddWindow = ({onConfirmAdd, onCancel}: any) => {

    const[name, setName] = useState("");
    const[imgUrl, setImgUrl] = useState("");
    const[count, setCount] = useState(0);
    const[weight, setWeight] = useState("");
    const[height, setHeight] = useState(0);
    const[width, setWidth] = useState(0);

    const checkTextInput = (event: any) => {
        if (!name.trim()) {
            toastrService.callToastr("You couldn`t add empty product")
            return;
        }
        onConfirmAdd({
            name: name,
            imageUrl: imgUrl,
            count: count,
            size:{width: width,
                height: height},
                weight: weight,
            comments:[]
        });
      };

    const onCorrectInputName = (event: any) => {
        const keyValue = event.key;
        const isValidNumber = new RegExp("[A-Z|\a-z|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Enter correct Name. Use only letters")
                return;
            }
    };

    const onCorrectInputCount = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Enter correct Count. Use only numbers")
                return;
            }
    };

    const onCorrectInputHeight = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Enter correct Height. Use only numbers")
                return;
            }
    };

    const onCorrectInputWidth = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Enter correct Width. Use only numbers")
                return;
            }
    };

    return(
        <div className="windowConfirmPosition"> 
            <div className="windowConfirmStyle">

                <div className="confirmText">fill all</div>

                <form>
                    <div>
                    <input type="text" 
                    placeholder="Enter Name" 
                    className="inputStyle" 
                    onChange={(event) => setName(event.target.value)}
                    onKeyDown={onCorrectInputName}/>

                    </div>
                </form>

                <form>
                    <div>
                        <img style={{ border: "0px solid", borderRadius: "50px", height: "50px", width: "50px" }} src={imgUrl} />
                        <input type="url" value={imgUrl} placeholder="Enter any image url" className="inputStyle" onChange={(event) => setImgUrl(event.target.value)}/>
                    </div>
                </form>

                <form>
                    <div>
                        <input type="number" 
                        placeholder="Enter Count" 
                        className="inputStyle" 
                        onChange={(event) => setCount(event.target.valueAsNumber)}
                        onKeyDown={onCorrectInputCount}/>
                    </div>
                </form>

                    <div><input type="text" placeholder="Enter Weight" className="inputStyle"onChange={(event) => setWeight(event.target.value)}/></div>

                    <form>
                        <div>
                            <input 
                            type="number" 
                            placeholder="Enter Height" 
                            className="inputStyle"
                            onChange={(event) => setHeight(event.target.valueAsNumber)}
                            onKeyDown={onCorrectInputHeight}/>
                        </div>
                    </form>

                    <form>
                        <div>
                            <input 
                            type="number" 
                            placeholder="Enter Width" 
                            className="inputStyle"onChange={(event) => setWidth(event.target.valueAsNumber)}
                            onKeyDown={onCorrectInputWidth}/>
                            </div>
                    </form>

                    <div>
                        <button className="btnStyleCard" onClick={() => checkTextInput(event)}>Ok</button>
                        <button className="btnStyleCard" onClick={() => onCancel()}
                        >Cancel</button>
                    </div>
                    <ToastrList/>
            </div>
        </div>
    )
}