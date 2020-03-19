import React from 'react'

const sizeFactor = 5
const doorColor = '#4CAF50'


const commonStyle = (w, h) => {
    const x = w / 2
    const y = h / 2
    const size = Math.min(w, h) / sizeFactor
    return {x, y, size}
}

const parentStyle = (w, h) => {
    const {size} = commonStyle(w, h)
    const transformStyle = 'preserve-3d'
    const perspective = `${size * 4}px`
    return {
        transformStyle, perspective
    }
}

const parentDoorStyle = (w, h, scale) => {
    const {x, y, size} = commonStyle(w, h)
    const left = `${x - size}px`
    const top = `${y - size / 2}px`
    const width = `${2 * size}px`
    const height = `${size}px`
    const position = 'absolute'
    const WebkitTransform = `rotateY(${180 * scale}deg)`
    return {position, top, left, width, height, WebkitTransform}
}

const doorStyle = (w, h) => {
    const {size} = commonStyle(w, h)
    const left = `${size}px`
    const top = `${0}px`
    const position = 'absolute'
    const background = doorColor
    const width = `${size}px`
    const height = `${size}px`
    return {position, left, top, width, height, background}
}

const doorStrokeStyle = (w, h) => {
    const {x, y, size} = commonStyle(w, h)
    const position = 'absolute'
    const left = `${x}px`
    const top = `${y - size / 2}px`
    const border = `${sizeFactor / 2}px solid ${doorColor}`
    const width = `${size}px`
    const height = `${size}px`
    return {position, left, top, border, width, height}

}

const Door = ({scale, w, h, onClick}) => {
    return <div  style = {parentStyle(w, h)} onClick = {onClick}>
              <div style = {parentDoorStyle(w, h, scale)}>
                  <div style = {doorStyle(w, h)}>
                  </div>
              </div>
              <div style = {doorStrokeStyle(w, h)}>
              </div>
          </div>
}

export default Door
