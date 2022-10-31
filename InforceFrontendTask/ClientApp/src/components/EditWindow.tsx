import React, { useState } from "react";
import toastrService from "../services/toastr.service";
import { ToastrList } from "./toastr/ToastrList";

export const EditWindow = ({onConfirmEdit, onCancel, editObject}: any) => {
    const[editName, setEditName] = useState(editObject.name);
    const[editImgUrl, setEditImgUrl] = useState(editObject.imageUrl);
    const[editCount, setEditCount] = useState(editObject.count);
    const[editWeight, setEditWeight] = useState(editObject.weight);
    const[editHeight, setEditHeight] = useState(editObject.size.height);
    const[editWidth, setEditWidth] = useState(editObject.size.width);

    const checkTextEdit = (event: any) => {
        if (!editName.trim()) {
            toastrService.callToastr("The product is empty. Please edit all fields")
            return;
        }
        onConfirmEdit({
            name: editName,
            imageUrl: editImgUrl,
            count: editCount,
            size:{width: editWidth,
                height: editHeight},
            weight: editWeight,
            comments:[]
        });
      };

    const onCorrectEditName = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[A-Z|\a-z|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Edit correct Name. Use only letters")
                return;
            }
    };

    const onCorrectEditCount = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Edit correct Count. Use only numbers")
                return;
            }
    };

    const onCorrectEditHeight = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Edit correct Height. Use only numbers")
                return;
            }
    };

    const onCorrectEditWidth = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidNumber = new RegExp("[0-9|\b]").test(keyValue);

            if (!isValidNumber) {
                event.preventDefault();
                toastrService.callToastr("Edit correct Width. Use only numbers")
                return;
            }
    };
    
    return(
        <div className="windowConfirmPosition"> 
            <div className="windowConfirmStyle">
                <div className="confirmText">Edit any field</div>
                <form>
                    <div>
                    <input type="text" 
                    placeholder="Name"
                    className="inputStyle" 
                    onChange={(event) => setEditName(event.target.value)}
                    onKeyDown={onCorrectEditName}
                    value={editName}
                    />
                    </div>
                    <div><input type="text" value={editImgUrl} placeholder="Image url" className="inputStyle" onChange={(event) => setEditImgUrl(event.target.value)}/></div>
               
                    <div>
                        <input type="number" 
                        placeholder="Count" 
                        className="inputStyle" 
                        onChange={(event) => setEditCount(event.target.valueAsNumber)}
                        onKeyDown={onCorrectEditCount}
                        value={editCount}/>
                    </div>

                    <div><input type="text" placeholder="weight" value={editWeight} className="inputStyle"onChange={(event) => setEditWeight(event.target.value)}/></div>

                    <div>
                        <input 
                        type="number" 
                        placeholder="Height" 
                        className="inputStyle"
                        onChange={(event) => setEditHeight(event.target.valueAsNumber)}
                        onKeyDown={onCorrectEditHeight}
                        value={editHeight}/>
                    </div>
                    <div>
                        <input 
                        type="number" 
                        placeholder="Width" 
                        className="inputStyle"onChange={(event) => setEditWidth(event.target.valueAsNumber)}
                        onKeyDown={onCorrectEditWidth}
                        value={editWidth}/>
                    </div>
                </form>
                    <div>
                        <button
                        className="btnStyleCard"
                        onClick={checkTextEdit}
                        > Save </button>
                        <button
                        className="btnStyleCard"
                        onClick={() => onCancel()}
                        > Cancel </button>
                    </div>
                    <ToastrList/>
            </div>
        </div>
    )
}