import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BuilderComponentList.scss';

import { ADD_ITEM_TO_ROW } from '../../../containers/Preview/store/actions';

class ComponentList extends Component<IComponentListProps> {
  public components:Array<{label: string, type: string, icon: string}> = [
    {
      label: "text",
      type: "text",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='48' viewBox='0 0 28 48'%3E%3Ctext id='T' transform='translate(14 36)' fill='%232699fb' font-size='48' font-family='SitkaDisplay, Sitka Display'%3E%3Ctspan x='-13.419' y='0'%3ET%3C/tspan%3E%3C/text%3E%3C/svg%3E%0A"
    },
    {
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "video",
      type: "video",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='32' viewBox='0 0 40 32'%3E%3Cpath id='ic_movie_creation_48px' d='M36,8l4,8H34L30,8H26l4,8H24L20,8H16l4,8H14L10,8H8a3.982,3.982,0,0,0-3.98,4L4,36a4,4,0,0,0,4,4H40a4,4,0,0,0,4-4V8Z' transform='translate(-4 -8)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "button",
      type: "button",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='57' height='16' viewBox='0 0 57 16'%3E%3Crect id='Rectangle_1093' data-name='Rectangle 1093' width='57' height='16' rx='4' fill='%232699fb'/%3E%3Ctext id='Button' transform='translate(18 10)' fill='%23fff' font-size='8' font-family='SitkaDisplay, Sitka Display'%3E%3Ctspan x='0' y='0'%3EButton%3C/tspan%3E%3C/text%3E%3C/svg%3E%0A"
    },
    {
      label: "embed",
      type: "embed",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='30' viewBox='0 0 50 30'%3E%3Cpath id='ic_code_48px' d='M28.7,57.1,17.325,45.6l11.5-11.5L25.2,30.6l-15,15,15,15Zm13,0L53.2,45.6,41.7,34.1l3.5-3.5,15,15-15,15Z' transform='translate(-10.2 -30.6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    }
  ];

  public render() {
    return (
      <div className="ComponentList">
        {this.components.map(c=>{
          return (
            <div key={c.type} title={c.label} onClick={this.props.onAddItem.bind(this, c.type)} >
              <img src={c.icon} alt={`${c.type} component`}/>
              <label>{c.label}</label>
            </div>
          )
        })}     
      </div>
    )
  }
}

interface IComponentListProps{
  onAddItem: (itemType: string) => void
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onAddItem: (type: string) => dispatch(ADD_ITEM_TO_ROW(type))
  }
}

export default connect(null, mapDispatchToProps)(ComponentList);