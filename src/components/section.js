import React from "react"
import ParallaxImage from "./paralleximage"

class section extends React.Component {
  downloadResume() {
    console.log("called")
  }
  render() {
    const data = this.props.sectionData

    const blocks = {
      h2: (_data, k) => <h2 key={k}>{_data}</h2>,
      h3: (_data, k) => <h3 key={k}>{_data}</h3>,
      h4: (_data, k) => <h4 key={k}>{_data}</h4>,
      h5: (_data, k) => <h5 key={k}>{_data}</h5>,
      description: (_data, k) => <p key={k}>{_data}</p>,
      list: (_data, k) => (
        <ul key={k}>
          {_data.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      ),
      button: (_data, k) => (
        <button
          onClick={this[_data.action]}
          className={`btn ${_data.type}`}
          key={k}
        >
          {_data.text}
        </button>
      ),
    }
    const getKeys = _obj => (typeof _obj === "object" ? Object.keys(_obj) : [])

    const genrateKey = id =>
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 10)+`_${id}`

    const constructDOM = _datum => {
      const items = []
      const getDOMItems = section => {
        const keys = getKeys(section)
        if (!keys.length) return
        keys.forEach((i, j) => {
          if (i === "sections") {
            const allSections = section[i]
            allSections.forEach(_section => {
              items.concat(getDOMItems(_section))
            })
          } else blocks[i] && items.push(blocks[i](section[i], genrateKey(j)))
        })
      }

      getDOMItems(_datum)
      return items
    }

    return (
      <section
        id={data.h2
          .toLowerCase()
          .split(" ")
          .join("_")}
        className={this.props.classData || ""}
      >
        <div className="container content">
          <div className="content-box">{constructDOM(data)}</div>
          <div className="content-image">
            {data.imageName && (
              <ParallaxImage
                imageName={data.imageName}
                imageAlt={`Sumit's ${data.h2}`}
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default section
