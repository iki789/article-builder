import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Preview.scss';

export default class Preview extends React.Component<{}, IPreviewState> {
  public state: IPreviewState = {
    settings:{
      fonts:{
        color: '#333',
        family:'asd',
        size: 1.2
      },
      margins:{
        bottom: 1.2,
        left: 1.2,
        right: 1.2,
        top: 1.2
      },
      theme: 'string'
    },
    rows:[
      {
        cols:[
          {id: 1, type: 'text', data:<h1>Hello world!</h1>}
        ]
      }
    ]
  }

  public render() {
    const settings = this.state.settings;
    const styles = {
      marginLeft: `${settings.margins.left}rem`,
      marginRight: `${settings.margins.right}rem`,
      marginTop: `${settings.margins.top}rem`,
      marginBottom: `${settings.margins.bottom}rem`,
      fontFamily: `${settings.fonts.family}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      fontSize: `${settings.fonts.size}rem`,
      color: `${settings.fonts.color}`
    }
    return (
      <div style={styles}>
        {
          this.state.rows.map((row, i)=>{
            return (
            <Row key={i}>
              {row.cols.map(col=>{
                return (<Col key={i}>{col.data}</Col>)
              })}
            </Row>
            )
          })
        }
      </div>
    )
  }
}

interface IPreviewState{
  settings:{
    fonts:{
      color: string,
      family: string,
      size: number
    },
    theme: string,
    margins:{
      bottom: number,
      left: number,
      right: number,
      top: number
    }
  },
  rows: IRow[]
}

interface IRow{
  cols: ICol[]
}

interface ICol{
    id: number,
    type: string
    data: any,
    responsive?: {sm?: number, md?: number, lg?: number}
}