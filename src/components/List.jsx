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

    buildItem(item){
        if (item === null) {
            return '';
        } else {
            return (
                <ListItem 
                        value={item.value} 
                        status={item.status} 
                        enabled={item.enabled}
                        id={item.id}
                        update={this.update}>
                </ListItem>
            );
        }
    }

    render() {
        if (this.status.list == null || this.status.list.length == 0){
            return (
                <BpkList>
                    <AddItem value='Add new task' update={this.update}/>
                </BpkList>
            );
        }
        const list = this.status.list;
        return (
        <BpkList>
            <BpkGridContainer>
                {list.map(item => (this.buildItem(item)))}
            </BpkGridContainer>
            <AddItem value='Add new task' update={this.update}/>
        </BpkList>
        );
    }
}
