import React, { Component , useState} from 'react'
import { Divider } from 'primereact/divider';
import { connect } from 'react-redux'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Window_dimensions from '../Screen_dimensions.js'
import SideNav , {Toggle , Nav , NavItem , NavIcon , NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Add_student from './Components/Add_student.js'
import Add_teacher from './Components/Add_teacher.js'
import Classes from './Components/Classes.js'
import './Styles/Backend_index.css'


export const Backend_index = (props) => {
        const { height, width } = Window_dimensions();
        const [add_teacher , set_add_teacher] = useState(false)
        const items = [
            {
                label: 'Teachers',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                        command : ()=>{
                            props.close_open_add_teacher_overlay()
                            // !add_teacher ? set_add_teacher(true) : set_add_teacher(false)
                        }
    
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                        command:()=>{ alert('Deleted') }
                    },
                   
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
        {
            label: 'Classes',
            icon: 'pi pi-fw pi-folder',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Houses',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }

            ]
        },
       
        {
            label: 'Assessment',
            icon: 'pi pi-fw pi-chart-line',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sign out',
            icon: 'pi pi-fw pi-sign-out',
        }
    ];

    const start = <img alt="logo" style = {{height :'10vh', width : '10vh' , borderRadius : '5vh'}} src="Multix.png" onError={(e) =>{}} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;
    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>

            <div className = "overall-divisions">
                 {
                    props.store.backend.Classes ? (
                        <Classes/>
                    ) : (
                        null
                    )
                }
               <Divider layout="vertical" />

            </div>

            
        
           
            {
                
                props.store.backend.Add_teacher_switch ? (
                    <Add_teacher add_teacher = {add_teacher}/>
                ) : (
                    null
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
 return {store : state}   
}

const mapDispatchToProps = (dispatch) => ({
    close_open_add_teacher_overlay : () => dispatch({type : 'Add_teacher_switch'}),

})

export default connect(mapStateToProps, mapDispatchToProps)(Backend_index)
