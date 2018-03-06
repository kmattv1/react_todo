import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import { BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkButton from 'bpk-component-button';
import BpkInput, {INPUT_TYPES, CLEAR_BUTTON_MODES} from 'bpk-component-input';
import BpkSmallTrash from 'bpk-component-icon/sm/trash';
import BpkSmallTick from 'bpk-component-icon/sm/tick';
import BpkSmallCancel from 'bpk-component-icon/sm/close';
import { withButtonAlignment, withRtlSupport} from 'bpk-component-icon';
import { updateItem, deleteItem } from './../manageStorage';

const AlignedBpkSmallTrash = withButtonAlignment(withRtlSupport(BpkSmallTrash));
const AlignedBpkSmallTick = withButtonAlignment(withRtlSupport(BpkSmallTick));
const AlignedBpkSmallCancel = withButtonAlignment(withRtlSupport(BpkSmallCancel));

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            status: props.status,
            enabled: props.enabled,
            id: props.id,
            deleted: false,
        };
    }

    changeValue(event){
        this.setState({value: event.target.value,
                        enabled: true}, () => {updateItem(this.state)});
    }

    changeState(newState){
        if (newState === 'done'){
            this.setState({status: 'done',
                            enabled: false}, 
                            () => {updateItem(this.state);
                                this.props.update();});
        } else {
            if(newState === 'canceled'){
                this.setState({status: 'canceled',
                                enabled: false}, 
                                () => {updateItem(this.state);
                                    this.props.update();});
            }
        }
    }

    onDelete(){
        this.setState({deleted: true}, ()=> {deleteItem(this.state)});
        
    }

    getStatus(){
        switch (this.state.status){
            case 'done' : return true;
            case 'canceled' : return false;
            default : return null;
        } 
    }

    render() {
        return (
            <BpkGridRow hidden={this.state.deleted}>
            <BpkGridColumn width={2} tabletWidth={2} mobileWidth={2}>
                <BpkButton 
                    destructive 
                    iconOnly
                    onClick={() => this.onDelete()}>
                    <AlignedBpkSmallTrash/>
                </BpkButton>
            </BpkGridColumn>
            <BpkGridColumn width={8} tabletWidth={8} mobileWidth={8}>
                <BpkInput
                    id="origin"
                    valid= {this.getStatus()}
                    type={INPUT_TYPES.TEXT}
                    value={this.state.value}
                    onChange={event => this.changeValue(event)}
                />
            </BpkGridColumn>
            <BpkGridColumn width={1} tabletWidth={1} mobileWidth={1}>
                <BpkButton 
                    featured 
                    iconOnly 
                    disabled={!this.state.enabled} 
                    onClick={() => this.changeState('canceled')}>
                    <AlignedBpkSmallCancel/>
                </BpkButton>
            </BpkGridColumn>
            <BpkGridColumn width={1} tabletWidth={1} mobileWidth={1}>
                <BpkButton 
                    iconOnly 
                    disabled={!this.state.enabled} 
                    onClick={() => this.changeState('done')}>
                    <AlignedBpkSmallTick/>
                </BpkButton>
            </BpkGridColumn>
            </BpkGridRow>
        );
    }
}
