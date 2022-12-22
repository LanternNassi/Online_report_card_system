import React, { Component , useEffect , useState , useRef } from 'react'
import { connect } from 'react-redux'
// import { Card } from 'primereact/card'
import { TabView, TabPanel } from 'primereact/tabview';
import '../Styles/Class_assessment.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SlideMenu } from 'primereact/slidemenu'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Card } from 'antd';
import  Add_assessment  from './Add_assessment';
const { Meta } = Card;

export const Class_assessment = (props) => {
    const [assessment , setassessment] = useState({
        '2022' : [
            {
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa'
            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            }
        ] , 
        '2021' : [
            {
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',
            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            },{
                name : 'Mid Term 1',
                file : 'Mid Term 1.xlsx',
                extra_information : 'Plaaa Plaa',

            }
        ],
       
       
    })
    const [card_styles , setcard_styles] = useState({
        width: '20vw',
         marginBottom: '2em' , 
         backgroundColor : '#FF7452'
    })
    const [tabs , settabs] = useState([1 , 2 , 3])
    const [activeIndex2, setActiveIndex2] = useState(0);
    const toast = useRef(null);
    const [active_assessment , setactive_assessment] = useState('Mid Term')
    
   
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];
    
    const [extracted_data , setextracted_data] = useState(
        {
            "data": [
                {"id": "1000","code": "f230fh0g3","image":"plaaa.png","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1001","code": "nvklal433","image":"plaaa.png","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
                {"id": "1002","code": "zz21cz3c1","image":"plaaa.png","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
                {"id": "1003","code": "244wgerg2","image":"plaaa.png","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1004","code": "h456wer53","image":"plaaa","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
                {"id": "1005","code": "av2231fwg","image":"plaaa","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
                {"id": "1006","code": "bib36pfvm","image":"plaaa","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
                {"id": "1007","code": "mbvjkgip5","image":"plaaa","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1008","code": "vbb124btr","image":"plaaa","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
                {"id": "1009","code": "cm230f032","image":"plaaa","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3},
                {"id": "1000","code": "f230fh0g3","image":"plaaa","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1001","code": "nvklal433","image":"plaaa","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
                {"id": "1002","code": "zz21cz3c1","image":"plaaa","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
                {"id": "1003","code": "244wgerg2","image":"plaaa","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1004","code": "h456wer53","image":"plaaa","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
                {"id": "1005","code": "av2231fwg","image":"plaaa","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
                {"id": "1006","code": "bib36pfvm","image":"plaaa","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
                {"id": "1007","code": "mbvjkgip5","image":"plaaa","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
                {"id": "1008","code": "vbb124btr","image":"plaaa","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
                {"id": "1009","code": "cm230f032","image":"plaaa","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
            ]
        }
    )
    const items = [
        {
            label : 'Preview data',
            icon : 'pi pi-chart-line',
        } , {
            label : 'Add assessment',
            icon : 'pi pi-upload',
            items : [
                {
                    label : 'Import Excel File',
                    icon : 'pi pi-fw pi-file',
                    command : ()=> props.Add_assessment_switch()
                } ,
                {
                    label : 'Import Csv File',
                    icon : 'pi pi-fw pi-file',
                    command : ()=> props.Add_assessment_switch()

                }
            ]
        } , {
            label : 'Download assessment',
            icon : 'pi pi-cloud-download',
            items : [
                {
                    label : 'Export Excel File',
                    icon : 'pi pi-fw pi-file',
                },
                {
                    label : 'Export Csv File',
                    icon : 'pi pi-fw pi-file',
                }
            ]
        } , {
            label : 'Delete assessment',
            icon : 'pi pi-fw pi-trash'
        } , {
            label : 'Edit assessment' ,
            icon : 'pi pi-fw pi-pencil'
        } ,{
            Separator : true
        } ,{
            label : 'Archieve assessment',
            icon : 'pi pi-ban'
        }

    ]

    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }
    const showSticky = (Message) => {
        toast.current.show({severity: 'info', closable : false ,summary: 'Active Assessment', detail: 'You have selected ' + Message, sticky: false});
    }

   

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const cellEditor = (options) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }



    useEffect(()=>{
        // console.log(props)

    },[])
    return (
        <div className = "card" style = {{
        }}>
            <Toast ref={toast} />
            <div style = {{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
            }}>
            <h2>Assessment for {props.match.params.Class}</h2>
            </div>
            <div className = "tab-view" >
                <TabView activeIndex={activeIndex2} onTabChange={(e) => setActiveIndex2(e.index)} scrollable>
                    {(Object.keys(assessment)).map((tab) => {
                        return (
                            <TabPanel header={tab} title = {tab}>
                                <ScrollPanel style = {{
                                    width : '70vw',
                                    height : '40vh'
                                }}>
                                    <div className = "assessment-objects">
                                        {(assessment[tab]).map((obj)=>{
                                            return (
                                               
                                                <Card
                                                    onClick = {
                                                        ()=>{
                                                            showSticky(obj.name)
                                                        }
                                                    }
                                                    hoverable
                                                    style={{
                                                        ...card_styles
                                                    }}
                                                >
                                                    <Meta title={obj.name} description={obj.extra_information} />
                                                </Card>
                                            //     <Card title={obj.name} style={{ ...card_styles }}>
                                            //     <p className="m-0" style={{lineHeight: '1.5'}}>
                                            //         {obj.extra_information}
                                            //     </p>
                                            // </Card>
                                            )
                                        })}
                                    </div>
                                </ScrollPanel>
                               
                            </TabPanel>
                        )
                    })}
                </TabView>

                <div className = "Actions">
                    <h3>
                        ACTIONS
                    </h3>
                    <SlideMenu model={items} viewportHeight={300} menuWidth={800}></SlideMenu>
                </div>

            </div>

            <div className = 'Data-preview'>
                <h3>{active_assessment}</h3>
                <div className="card p-fluid">
                <DataTable paginator first = {10} rows = {10} value={extracted_data.data} editMode="cell" className="editable-cells-table" filterDisplay="row" responsiveLayout="scroll">
                    {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} filter sortable style={{ width: '25%' }} 
                                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    }
                </DataTable>
            </div>

            </div>
            {
                props.store.backend.Add_assessment_switch ? (
                    <Add_assessment/>
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
    Add_assessment_switch : ()=>dispatch({type : 'Add_assessment'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Class_assessment)
