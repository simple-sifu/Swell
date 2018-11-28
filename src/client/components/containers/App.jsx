import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/style/App.scss';
import { ipcRenderer } from 'electron';
import * as actions from '../../actions/actions';
import ContentsContainer from './ContentsContainer.jsx';
import ReqResCtrl from '../../controllers/connectionController';
import SidebarContainer from './SidebarContainer.jsx';

const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ipcRenderer.on('openAllSelected', ReqResCtrl.openAllSelectedReqRes);
    ipcRenderer.on('closeAllSelected', ReqResCtrl.closeAllReqRes);
    ipcRenderer.on('clearAll', ReqResCtrl.clearAllReqRes);
  }

  render() {
    return (
      <div id="app">
        {/* App */}
        <SidebarContainer />
        <ContentsContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
