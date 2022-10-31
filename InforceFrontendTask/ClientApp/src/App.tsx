import * as React from 'react';
import { useEffect } from 'react';
import { AddWindow } from './components/AddWindow';
import { ConfirmWindow } from './components/ConfirmWindow';
import { EditWindow } from './components/EditWindow';
import { ShowAllButton } from './components/ShowAllButton';
import './custom.css'
import { GetData, products, SetData } from './data/db';
import IProduct from './models/IProduct';
import Dropdown from 'react-bootstrap/Dropdown';


export default () => {
    const [product, setProduct] = React.useState<(IProduct & {expanded: boolean})[]>([]);
    const [windowAdd, setWindowAdd] = React.useState(false)
    const [windowEdit, setWindowEdit] = React.useState({
        isLoading: false,
        editItemId: -1
    })
    const [windowDelete, setWindowDelete] = React.useState({
        message: "",
        isLoading: false,
        deleteItemId: -1
    })

    useEffect(() => {
        setProduct([...GetData().map(p => {return {...p, expanded: false}})].sort((a, b) => a.name.localeCompare(b.name)));
    },[]);

    const handleWindowDelete = (message: string, isLoading: boolean, deleteItemId: number) => {
        setWindowDelete({
            message,
            isLoading,
            deleteItemId
        })
    }
    const handleWindowAdd = (isOpen: boolean) => {
        setWindowAdd(isOpen);
    }

    const handleWindowEdit = (isOpen: boolean, index: number = -1) => {
        setWindowEdit({isLoading: isOpen, editItemId: index});
    }
    const deleteItem = (id: any) => {
        handleWindowDelete("Are you sure?", true, id)
        idProductRef.current = id;
    }
    const addItem = () => {
        handleWindowAdd(true)
    }

    const ConfirmDoDelete = (choose: any, id: any) => {
        if(choose){
            const copy = [...product];
            copy.splice(id, 1)
            setProduct(copy);
            SetData(copy);
            handleWindowDelete("", false, id)
        }
        else{
            handleWindowDelete("", false, id)
        }
    }
    const ConfirmDoAdd = (newProduct: IProduct) => {
            const copy = [...product, {...newProduct, expanded: false}];
            setProduct(copy);
            SetData(copy);
            handleWindowAdd(false)
    }

    const CancelDoAdd = () => {
        handleWindowAdd(false)
    }

    const ConfirmDoEdit = (editProduct: IProduct) => {
        const id = windowEdit.editItemId;
        const copy = [...product];
        copy[id] = {...editProduct, expanded: false};
        setProduct(copy);
        SetData(copy);
        handleWindowEdit(false)
    }

    const CancelDoEdit = () => {
        handleWindowEdit(false)
    }

    const showAllProductInfo = (index: number) => {
        const copy = [...product];
        copy[index].expanded = !copy[index].expanded;
        setProduct(copy);
    }
    const idProductRef = React.useRef();


    const sortOnClickUp = () => {
        setProduct([...product].sort((a, b) => b.count - a.count));
    }
    const sortOnClickDown = () => {
        setProduct([...product].sort((a, b) => a.count - b.count));
    }

    const viewProducts = product.map((p, index) => {
        return(
            <div>
                <div className='productList' key={index}>
                    <div className='productName'>
                        {p.name}
                    </div>

                    <div className='productInfo'>
                        <div>
                        <img className='imgStyle' src={p.imageUrl}/>
                        </div>
                        <div>Count: {p.count}</div>
                        <div>Weight: {p.weight}</div>
                    </div>

                    <div><ShowAllButton ShowAllOnClick={() => showAllProductInfo(index)}/></div>
                    {p.expanded ? 
                        <div className='productInfo'>
                            <div>Height: {p.size.height}</div>
                            <div>Width: {p.size.width}</div>
                            <div> {p.comments.map((comments, index) => {
                                return(
                                    <div key={index}>{comments.description}</div>
                                )
                            })}</div>
                    </div> : <></> }
                    <div className='cardPos'>
                        <div><button className='btnStyleCard' onClick={() => deleteItem(index)}>
                            Delete
                        </button></div>

                        <div><button className='btnStyleCard' onClick={() => handleWindowEdit(true,index)}>
                            Edit
                        </button></div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>

            <div className='btnPostion'>
                <div>
                    <button className='btnStyle' onClick={() => addItem()}>Add</button>
                </div>
                <Dropdown>
                        <Dropdown.Toggle variant="dark" >
                          Sort by
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/fromBig"><button className='btnStyleDropdown' onClick={sortOnClickUp}>From bigger Count</button></Dropdown.Item>
                          <Dropdown.Item href="#/fromSmall"><button className='btnStyleDropdown' onClick={sortOnClickDown}>From smaller Count</button></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </div>
            <div className='productSize'>
                {viewProducts}
            </div>
            

            {windowDelete.isLoading && <ConfirmWindow onWindow={(choose: boolean) => ConfirmDoDelete(choose,windowDelete.deleteItemId)} message={windowDelete.message}/>}
            {windowAdd && <AddWindow onConfirmAdd={ConfirmDoAdd} onCancel={CancelDoAdd}/>}
            {windowEdit.isLoading && <EditWindow onConfirmEdit={ConfirmDoEdit} onCancel={CancelDoEdit} editObject={product[windowEdit.editItemId]}/>}
        </div>
    );
}
