import React, { Component , useState , useRef } from 'react'
import { connect } from 'react-redux'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Styles/Frontend.css'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import Sign from '../authentication/Sign.js'


export const Frontend_index = (props) => {
    const [clicked , setclicked] = useState(false)
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const message = (Name , assessment) => {
        return (
            <h3>Downloading {assessment} report for {Name}</h3>
        )
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };
    
    const items  = [
        {label : 'Sign in' , icon: 'pi pi-fw pi-user-plus', 
        command : ()=> {props.Sign_alert_switch()}
    },
        {label : 'Report' , icon : ''},
        // {label : 'Recent assessments' , icon : 'pi pi-fw pi-file'},
        // {label : 'About us' , icon : ''},
        // {label : 'Contact us' , icon : 'pi pi-fw pi-user-plus'}
    ]
    const start = <img alt="logo" style = {{height :'6vh', width : '6vh' , borderRadius : '3vh'}} src="Multix.png" onError={(e) =>{}} height="40" className="mr-2"></img>;
    return (
        <div>
           <Toast ref={toast} />
            <div className = "pic">
                <img src = "intro-bg.jpg" style = {{height : '100vh' , width : '100vw'}}/>
            </div>
            <div className = "opacitor">
                <div className = "intro">
                    {/* <img src = "Multix.png" style = {{ height : '10vh' , width : '10vh' , borderRadius : '5vh' }}/> */}
                    <h2 style = {{ color : 'white' }}>Want To access your report online?</h2>

                    <h4 style = {{color : 'white'}}>This is a service facilitated and maintained by Multix Company </h4>
                    {/* <div className = "buttons"> */}
                    {
                        clicked ? (
                            <InputText  />
                        ) : (null)
                    }
                        <Button style = {{ width : '30vw' , height : '8vh' }} label={clicked ? ('Generate') : ('Enter code')} onClick = {()=>{
                            if (!clicked){
                                setclicked(true)
                            } else {
                                setVisible(true)
                            }
                        }} className="p-button-rounded p-button-success" />

                    {/* </div> */}

                </div>

            </div>
            <div className="card" style = {{ position : 'absolute' , zIndex : 1 , top : 0 , width : '100vw' }}>
                <Menubar model={items} start={start}  />
            </div>
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message={message('Ntambi' , 'Mid Term 1')}
            header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            {
                props.store.frontend.Sign_alert_switch ? (
                    <Sign/>
                ) : (null)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
 return {store : state}   
}

const mapDispatchToProps = (dispatch) => ({
    Sign_alert_switch : ()=> dispatch({type : 'Sign_alert'}),


})

export default connect(mapStateToProps, mapDispatchToProps)(Frontend_index)