import React, { Component } from 'react'
import './BuilderComponentList.scss';

export default class ComponentList extends Component {
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
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    },
    {
      label: "image",
      type: "image",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath id='ic_insert_photo_48px' d='M42,38V10a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38A4,4,0,0,0,42,38ZM17,27l5,6.01L29,24l9,12H10Z' transform='translate(-6 -6)' fill='%232699fb'/%3E%3C/svg%3E%0A"
    }
    
  ];

  public render() {
    return (
      <div className="ComponentList">
        {this.components.map(c=>{
          return (
            <div key={c.type} title={c.label}>
              <img src={c.icon} alt={`${c.type} component`}/>
              <label>{c.label}</label>
            </div>
          )
        })}     
      </div>
    )
  }
}
