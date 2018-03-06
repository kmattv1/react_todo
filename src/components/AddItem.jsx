import React, {Component} from 'react';
import BpkButton from 'bpk-component-button';
import BpkInput, {INPUT_TYPES, CLEAR_BUTTON_MODES} from 'bpk-component-input';
import BpkCard from 'bpk-component-card';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkPlusIcon from 'bpk-component-icon/sm/plus';
import { withButtonAlignment } from 'bpk-component-icon';
import { addItem, getNextId } from './../manageStorage';

export default class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            status: 'todo',
            enabled: true,
            deleted: false,
            id: getNextId(),
        };
    }

    changeValue(event){
        this.setState({value: event.target.value,
                        enabled: true});
        console.log(this.state);
    }

    addNewItem(){
        console.log(this.state);
        if (addItem(this.state)){
            this.props.update();
        }    
    }

    render() {
        const AlignedBpkPlusIcon = withButtonAlignment(BpkPlusIcon);
        return (
                <BpkGridContainer>
                    <BpkGridRow>
                        <BpkGridColumn width={1} tabletWidth={1} mobileWidth={0}/>
                        <BpkGridColumn width={9} tabletWidth={9} mobileWidth={12}>
                            <BpkInput
                                id="origin"
                                type={INPUT_TYPES.TEXT}
                                value={this.state.value}
                                onChange={event => this.changeValue(event)}
                                clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
                                clearButtonLabel="Clear"
                                onClear={() => this.setState({value: ''})}
                            />
                        </BpkGridColumn>
                        <BpkGridColumn width={2} tabletWidth={2} mobileWidth={12}>
                            <BpkButton iconOnly onClick={() => this.addNewItem()}>
                                <AlignedBpkPlusIcon className="add" />
                            </BpkButton>
                        </BpkGridColumn>
                    </BpkGridRow>
                </BpkGridContainer>
        );
    }
}