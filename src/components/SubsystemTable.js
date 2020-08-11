import React from 'react';
import Table from 'react-bootstrap/Table';
import Papa from 'papaparse';

const RenderRow = (props) =>{
    return props.items.map((ele)=>{
        return <td>{ele}</td>
    })
}

class SubsystemTable extends React.Component {
 
    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            data: [
                ['the', 'data'],
                ['didnt','arrive']
            ]
        }
    }

    getHeader = (data) => {
        if(data !== undefined) {
            return data[0].map((ele)=>{
                return <th>{ele}</th>
            })
        }
        else {
            return <React.Fragment/>
        }
    }
    
    getRowsData = (data) => {
        if(data !== undefined) {
            var temp = data.shift();
            var items = data
            return items.map((row)=>{
                return <tr><RenderRow items={row}/></tr>
            })
        }
        else {
            return <React.Fragment/>
        }    
    }

    fetchCsv() {
        return fetch(this.props.csvfile).then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
        console.log('subsystem', result.data)
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, {
            complete: this.getData
        });
    }

    componentDidMount() {
        this.getCsvData();
        console.log(this.state.data)
    }
    
    render() {  
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {this.getHeader(this.state.data)}
                    </tr>
                </thead>
                <tbody>
                    {this.getRowsData(this.state.data)}
                </tbody>
            </Table>
        );
    }
}
 
export default SubsystemTable;