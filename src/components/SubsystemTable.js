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
            data.shift();
            var items = data
            return items.map((row)=>{
                return <tr><RenderRow items={row}/></tr>
            })
        }
        else {
            return <React.Fragment/>
        }    
    }

    getData(result) {
        this.setState({data: result.data});
    }

    getCsvData() {
        Papa.parse(this.props.csvfile, {
            download: true,
            complete: this.getData
        });
    }

    componentDidMount() {
        this.getCsvData();
    }
    
    render() {  
        return (
            <Table bordered hover variant="dark" className="table-responsive" style={this.props.style}>
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