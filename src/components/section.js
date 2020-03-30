import React from "react"
import ParallaxImage from "./paralleximage"

class section extends React.Component {
  render() {
    const data = this.props.sectionData
    const blocks = {
      h2: (_data, k) => <h2 key={`custom_h2_${k}`}>{_data}</h2>,
      h3: (_data, k) => <h3 key={`custom_h3_${k}`}>{_data}</h3>,
      h4: (_data, k) => <h4 key={`custom_h4_${k}`}>{_data}</h4>,
      h5: (_data, k) => <h5 key={`custom_h5_${k}`}>{_data}</h5>,
      description: (_data, k) => <p key={`custom_des_${k}`}>{_data}</p>,
      list: (_data, k) => (
        <ul key={k}>
          {_data.map((value, index) => {
            return <li key={`custom_ul_${index}`}>{value}</li>
          })}
        </ul>
      ),
      button: (_data, k) => (
        <form key={`form_${k}`} method="get" action="../../Sumit-Pal-Resume-2020.pdf">
          <button
            className={`btn ${_data.type}`}
            type="submit"
          >
            {_data.text}
          </button>
        </form>
      ),
    }
    const getKeys = _obj => (typeof _obj === "object" ? Object.keys(_obj) : [])
    const genrateKey = id =>
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 10) +
      `_${id}`
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
