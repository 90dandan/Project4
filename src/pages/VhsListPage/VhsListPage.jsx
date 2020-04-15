import React from 'react';
import VhsCard from '../../components/VhsCard/VhsCard';

const VhsListPage = (props) => {
  return (
    <>
      <h1>VHS STASH</h1>
      <div className='VhsListPage-grid'>
        {props.vhs.map(vhs =>
          <VhsCard
            vhs={vhs}
            key={vhs._id}
            handleDeleteVhs={props.handleDeleteVhs}
          />  
        )}
      </div>
    </>
  );
}
 
export default VhsListPage;