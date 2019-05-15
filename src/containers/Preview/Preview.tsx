import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './Preview.scss';
import { ComponentMount } from '../../components/BuilderComponents'

class Preview extends React.Component<IPreviewProps, IPreviewState> {

  public render() {
    const settings = this.props.state.settings;
    const styles = {
      paddingLeft: `${settings.margins.left}%`,
      paddingRight: `${settings.margins.right}%`,
      paddingTop: `${settings.margins.top}%`,
      paddingBottom: `${settings.margins.bottom}%`,
      fontFamily: `${settings.fonts.family}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      fontSize: `${settings.fonts.size}rem`,
      color: `${settings.fonts.color}`
    }
    return (
      <div>
        <div className="create-article-toolbar">
          <button>Create New Article</button>
        </div>
        <div style={styles} className="Preview">
          {
            this.props.state.rows.map((row, i)=>{
              return (
              <Row key={i}>
                {row.cols.map(col=>{
                  return (
                  <Col key={col.id}>
                    <ComponentMount colId={col.id} type={col.type} data={col.data} />
                  </Col>
                  )
                })}
              </Row>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state:any) =>  {
  return {
    state: state.PreviewReducer
  }
}

export default connect(mapStateToProps)(Preview);

export interface IPreviewState{
  settings: ISettings,
  rows: IRow[],
  colCount: number
}

export interface ISettings{
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
}

export interface IPreviewProps{
  state: IPreviewState
}

export interface IRow{
  cols: ICol[]
}

export interface ICol{
    id: number,
    type: string
    data: any,
    responsive?: {sm?: number, md?: number, lg?: number}
}