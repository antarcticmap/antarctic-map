import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import queryString from 'query-string'

import styles from './index.less'

@inject('mapAction', 'mapStore')
@observer
class Control extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
        }
    }

    componentDidMount() {
        
    }

    handleZoomIn = () => {
        this.props.mapAction.zoomIn()
    }

    handleZoomOut = () => {
        this.props.mapAction.zoomOut()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleZoomIn}>+</button>
                <button onClick={this.handleZoomOut}>-</button>
            </div>
        )
    }
}

export default Control