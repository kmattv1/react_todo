import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import List from './components/List.jsx';


import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

if (typeof (window) !== 'undefined') {
  document.addEventListener('listChange', this.forceUpdate, false);
}

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>TODO APP</BpkText>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </header>
    <main className={c('App__main')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
                <List/>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </main>
  </div>
);

export default App;
