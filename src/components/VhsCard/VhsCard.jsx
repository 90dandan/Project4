import React from 'react';
import {Link} from 'react-router-dom';


function VhsCard({vhs, handleDeleteVhs, user, idx}) {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{vhs.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Title:</dt>
          <dd>{vhs.title}</dd>
          <dt>Director:</dt>
          <dd>{vhs.director}</dd>
          <dt>Release Year:</dt>
          <dd>{vhs.releaseYear}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname:'/edit',
            state: {vhs},
            idx: idx
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteVhs(vhs._id, idx)}
        >
          DELETE
        </button>  
      </div>
    </div>
  );
}
 
export default VhsCard;
