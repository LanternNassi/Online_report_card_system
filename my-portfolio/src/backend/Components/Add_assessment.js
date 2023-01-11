import React, { Component , useState , useRef , useEffect} from 'react'
import { connect } from 'react-redux'
import '../Styles/Class_assessment.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import '../Styles/Add_assessment.css'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import  File_upload from './File_upload.js'
import { InputTextarea } from 'primereact/inputtextarea';
import FormData, {getHeaders} from 'form-data';
import { InputText } from 'primereact/inputtext'
import {Input , Card} from 'antd'
import { ScrollPanel } from 'primereact/scrollpanel';

const { Meta } = Card;


export const Add_assessment = (props) => {
    const toast = useRef(null);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(props.store.backend.Add_assessment_switch);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const [activeIndex , setactiveIndex] = useState(0)
    //Fields being entered
    const [Name , setName] = useState('')
    const [Extra_info , setExtra_info] = useState('')
    const [ReportCards , setReportCards] = useState(null)
    const [Extras , setExtras] = useState(null)

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const steps = [
        {label : 'Name'},
        {label : 'Extra info'},
        {label : 'Report cards'},
        {label : 'Extras '}
    ]


    const renderFooter = (name) => {
        return (
            <div>
                <Button label={activeIndex === 0 ? ('Cancel') : ('Previous')} icon="pi pi-times" onClick={() =>{
                    if (activeIndex ===0){
                        props.Add_assessment_switch() ; 
                        onHide(name)
                    } else {
                        setactiveIndex(activeIndex-1)
                    }
                   
                } } className="p-button-text" />
                <Button label={activeIndex === 3 ? ('Submit') : ('Next')} icon="pi pi-check" onClick={() => {
                    if (activeIndex === 3){
                        props.Add_assessment_switch()
                        onHide(name)

                    } else {
                        if (activeIndex === 0){
                            setName(document.getElementById('Name_input').value)
                        } else if(activeIndex === 1){
                            setExtra_info(document.getElementById('Extra_info').value)
                        } else if (activeIndex === 2){

                        }
                        setactiveIndex(activeIndex + 1)
                    }
                }} autoFocus />
            </div>
        );
    }

    const Extra_Comp_field = () => {
        return (
            <InputTextarea placeholder = "Put here your extra info about the assessment" style = {{width : '30vw'}} id = "Extra_info" rows={5} cols={30} autoResize = {false} />
        )

    }

    

    const Name_Comp_field = () => {
        return (
            <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText id = "Name_input" />
            </span>
            // <Inputq onChange = {(e)=>setName(e.target.value)} />
        )
    }
    useEffect(()=>{},[])
    const ref = useRef(null)

    return (
        <div  ref = {ref} >
            <Toast ref={toast} />
            <Dialog focusOnShow = {true} header="Add Assessment" visible={displayBasic2} style={{ width: '60vw' , height : '80vh' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className = "components">
                    <Steps activeIndex = {activeIndex} model = {steps} style = {{
                        width : '40vw',
                        height : '10vh'
                    }} />
                    {
                        activeIndex === 0 ? (
                            <div className = "form-field-Name">
                                <h4>Add Name of the Assessment</h4>
                                <Name_Comp_field/>

                            </div>
                            ) : (null)
                        
                       
                    }
                    {
                        activeIndex === 1 ? ( 
                        <div className = "form-field-Name">
                        <h4>Extra Notes</h4>
                        <Extra_Comp_field/>

                    </div>) : (null)
                    }
                    {
                        activeIndex === 2 ? (
                            <div className = "Upload-style">
                                <h4>Upload Report cards</h4>
                                <ScrollPanel  style = {{
                                    height : '40vh',
                                    width : '50vw'
                            
                                }}>
                                    <File_upload type = {false}/>
                                </ScrollPanel>
                            </div>
                      
                        ) : (null)
                    }
                    {
                        activeIndex === 3 ? (
                        <div className = "Upload-style">
                            <h4>Upload Extra info</h4>
                            <ScrollPanel  style = {{
                                height : '40vh',
                                width : '50vw'
                        
                            }}>
                                <File_upload type = {true}/>
                            </ScrollPanel>
                        </div>) : (null)
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
    Add_assessment_switch : ()=> dispatch({type : 'Add_assessment'}),
    Add_name : (text)=> dispatch({type : 'add_name' , text : text})
})

export default connect(mapStateToProps, mapDispatchToProps)(Add_assessment)
