import React, { Component , useState , useRef , useEffect} from 'react'
import { connect } from 'react-redux'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext'
import {Input , Card} from 'antd'
import './Styles/Sign.css'
import { ScrollPanel } from 'primereact/scrollpanel';
import { AutoComplete } from 'primereact/autocomplete';


export const Sign = (props) => {
    const toast = useRef(null);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(props.store.frontend.Sign_alert_switch);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const [activeIndex , setactiveIndex] = useState(0)
    const [filtered_papers, setfiltered_papers] = useState(null);
    const [papers, setpapers] = useState([
        {id : 1 , paper_code : 'P201/3'},
        {id : 2 , paper_code : 'P201/5'},
        {id : 3 , paper_code : 'P201/6'},
        {id : 4 , paper_code : 'P201/8'},
        {id : 5 , paper_code : 'P201/9'}
    ]);
    const [selected_paper, setSelected_paper] = useState(null);
    const [selected_papers , setselected_papers] = useState([])
    //Fields being entered
    const [Extra_info , setExtra_info] = useState('')
    const [ReportCards , setReportCards] = useState(null)
    const [Extras , setExtras] = useState(null)

    //Fields being created
    const [Signin , setSignin] = useState(null)
    const [Name , setName] = useState(null)
    const [Passcode , setPasscode] = useState(null)
    const [Email , setEmail] = useState(null)

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
    }
    const searchCountry = (event) => {
        setTimeout(() => {
            let _filtered_papers = [];
            for(let i = 0; i<papers.length; i++){
                if(papers[i]['paper_code'].includes(event.query)){
                    _filtered_papers.push(papers[i])
                }
            }
            setfiltered_papers(_filtered_papers);
        }, 250);
    }
    const itemTemplate = (item) => {
        return (
            <div className="paper-item">
                <h6>{item.id}</h6>
                <h6>{item.paper_code}</h6>
            </div>
        );
    }

    const Selected = (value) => {
        // alert(value)
        document.getElementById('autocomp').value = 'value'
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const steps = [
        {label : 'Name'},
        {label : 'Email'},
        {label : 'Passcode'},
    ]

    const renderFooter = (name) => {
        return (
            <div>
                <Button label={activeIndex === 0 ? ('Cancel') : ('Previous')} icon="pi pi-times" onClick={() =>{
                    if (activeIndex ===0){
                        props.Sign_alert_switch() ; 
                        onHide(name)
                    } else {
                        setactiveIndex(activeIndex-1)
                    }
                   
                } } className="p-button-text" />
                <Button label={activeIndex === 2 || Signin === true ? ('Submit') : ('Next')} icon="pi pi-check" onClick={() => {
                    if (activeIndex === 2 || Signin === true){
                        // setPasscode(document.getElementById('Passcode').value)
                        console.log(document.getElementById('Passcode').value)
                        props.Sign_alert_switch()
                        onHide(name)

                    } else {
                      
                        if(activeIndex == 0){
                            setName(document.getElementById('Name').value)

                        } else if (activeIndex == 1){
                            setEmail(document.getElementById('Email').value)

                        }
                        setactiveIndex(activeIndex + 1)
                    }
                }} autoFocus />
            </div>
        );
    }

    const Inquire = () => {
        return (
            <div className = "Inquire-setup" >
                <h3>Have an account ?</h3>
                <div className = "Inquire">
                    <Button onClick = {()=>{
                        setSignin(false)
                    }} label = {'Sign up'} className="p-button-rounded p-button-success" style = {{ }}/>
                    <Button onClick = {()=>{
                        setSignin(true)
                    }} label = {'Sign in'} className="p-button-rounded p-button-success" style = {{ }}/>
                </div>
            </div>
            
        )
    }

    const Extra_Comp_field = () => {
        return (
            <InputTextarea placeholder = "Put here your extra info about the assessment" style = {{width : '30vw'}} id = "Extra_info" rows={5} cols={30} autoResize = {false} />
        )

    }

    const Field_identifier = (id_prop) =>{
        switch(id_prop){
            case 'Name' :
                if (Name){
                    return Name
                } else {
                    return ''
                }
            case 'Email' :
                if (Email){
                    return Email
                } else {
                    return ''
                }
            case 'Passcode' :
                if (Passcode){
                    return Passcode
                } else {
                    return ''
                }
            default :
                return ''
            }
    }

    

    const Name_Comp_field = (id_prop) => {
        return (
            <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText id = {id_prop['id_prop']} />
            </span>
            // <Inputq onChange = {(e)=>setName(e.target.value)} />
        )
    }
    useEffect(()=>{},[])
    const ref = useRef(null)

    return (
        <div  ref = {ref} >
            <Toast ref={toast} />
            <Dialog focusOnShow = {true} header="Add Assessment" visible={displayBasic2} style={{ width: '60vw' , height : '60vh' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className = "container"  >
                    <Steps activeIndex = {activeIndex} model = {steps} style = {{
                        width : '40vw',
                        height : '10vh'
                    }} />
                    {
                        Signin === null ? (
                            <Inquire/>
                        ) : (null)
                    }
                    {
                        Signin === false && activeIndex ===0 ? (
                            <div className = "form-field-Name">
                                <h4>Name of the school</h4>
                                <Name_Comp_field id_prop = {'Name'}/>
                            </div>
                            ) : (null)
                        
                       
                    }
                    {
                        Signin === false && activeIndex ===1 ? ( 
                        <div className = "form-field-Name">
                        <h4>Email</h4>
                        <Name_Comp_field id_prop = {'Email'} />

                    </div>) : (null)
                    }
                    {
                        Signin === false && activeIndex === 2 ? (
                            <div className = "form-field-Name">
                            <h4>Passcode</h4>
                            <Name_Comp_field id_prop = {'Passcode'} />
    
                        </div>
                      
                        ) : (null)
                    }
                    {
                        Signin === true ? (
                            <div className = "form-field-Name">
                            <h4>Passcode</h4>
                            <Name_Comp_field id_prop = {'Passcode'} />
    
                        </div>
                        ) : (null)
                    }
                </div>
            </Dialog>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {store : state}
}

const mapDispatchToProps = (dispatch) => ({
    Sign_alert_switch : ()=> dispatch({type : 'Sign_alert'}),
    Add_name : (text)=> dispatch({type : 'add_name' , text : text})
})


export default connect(mapStateToProps, mapDispatchToProps)(Sign)
