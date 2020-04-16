import React, {Component} from 'react';
import VhsCard from '../../components/VhsCard/VhsCard';
import * as vhsAPI from '../../services/vhs-api';

class VhsListPage extends Component {
  state = {
    vhss: []
  }

  async componentDidMount() {
    const vhss = await vhsAPI.index();
    this.setState({vhss});
  }

  handleDeleteVhs = async (id, idx) => {
    await vhsAPI.deleteOne(idx);
    this.setState(state => ({
      vhss: state.vhss.filter(v => v._id !== id)
    }), () => this.props.history.push('/allvhs'));
  }

  render() {
    return (
      <>
        <h1>VHS STASH</h1>
        <div className='VhsListPage-grid'>
          {this.state.vhss.map((vhs, idx) =>
            <VhsCard
              vhs={vhs}
              key={vhs._id}
              idx={idx}
              user={this.props.user}
              handleDeleteVhs={this.handleDeleteVhs}
            />  
          )}
        </div>
      </>
    );
  }  
}
 
export default VhsListPage;