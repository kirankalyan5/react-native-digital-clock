import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'


class DigitalClock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            liveTime: '',
        }
        let timeFormater = this.timeFormater
        this.getTime =  setInterval(() => {
            let currentDate = new Date()
            let timeFormat = `${timeFormater(currentDate.getHours())}:${timeFormater(currentDate.getMinutes())}:${timeFormater(currentDate.getSeconds())}`
            this.setState({
                liveTime: timeFormat
            })
        }, 1000)
    }

    timeFormater(time) {
        if (time < 10) {
            time = '0' + time
        }
        return time
    }
    
    componentWillUnmount() {
        clearInterval(this.getTime)
    }
    
    render() {
        return (
            <View style={this.props.clockWrapperStyles}>
                <Text style={[styles.clockText, this.props.clockStyles]}>{this.state.liveTime}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    clockText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    }
})

DigitalClock.propTypes = Object.assign({}, Component.propTypes, {
    clockWrapperStyles: View.propTypes.style,
    clockStyles: Text.propTypes.style,
})

export default DigitalClock
