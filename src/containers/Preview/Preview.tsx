import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ACTIVATE_COL } from 'src/store/actions/app';
import './Preview.scss';

class Preview extends React.Component<IPreviewProps, IPreviewState> {

  public onSelect = (col: ICol) => {
    this.props.onSelect(col);
  }

  public render() {
    const settings = this.props.state.settings;
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
          this.props.state.rows.map((row, i)=>{
            return (
            <Row key={i}>
              {row.cols.map(col=>{
                return (<Col key={col.id} onClick={this.onSelect.bind(this, col)} >{col.data}</Col>)
              })}
            </Row>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state:any) =>  {
  return {
    state: state.PreviewReducer
  }
}

const mapDispatchToProps = (dispatch: any) =>  {
  return {
    onSelect: (payload: ICol) => dispatch(ACTIVATE_COL(payload))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Preview);

export interface IPreviewState{
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
  rows: IRow[],
  colCount: number
}

export interface IPreviewProps{
  state: IPreviewState,
  onSelect: (payload: ICol) => void
}

interface IRow{
  cols: ICol[]
}

export interface ICol{
    id: number,
    type: string
    data: any,
    responsive?: {sm?: number, md?: number, lg?: number}
}