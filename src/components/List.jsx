import React, {Component} from 'react';
import {BpkList} from 'bpk-component-list';
import { BpkGridContainer } from 'bpk-component-grid';
import ListItem from './ListItem';
import AddItem from './AddItem.jsx';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.status = {
            list: JSON.parse(localStorage.getItem('list')),
        };
        this.update = this.update.bind(this);
    }
    
    update(){
        this.setState({
            list: JSON.parse(localStorage.getItem('list')),
        });
        location.reload();
    }

    render() {
        const list = this.status.list != null ? this.status.list : [] ;
        return (
        <BpkList>
            <BpkGridContainer>
                {list.map(item => (
                    <ListItem 
                        value={item.value} 
                        status={item.status} 
                        enabled={item.enabled}
                        id={item.id}
                        update={this.update}>
                    </ListItem>))}
            </BpkGridContainer>
            <AddItem value='Add new task' update={this.update}/>
        </BpkList>
        );
    }
}
