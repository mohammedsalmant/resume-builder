import { List } from 'immutable'
import React, { Component } from 'react'
import { TagBoxAsync } from 'react-tag-box'
//import './styles.scss'
 
// Mock server data. This would normally be in your database.
const sampleTags = List(
  ['','Java', 'Python', 'C', 'C++', 'React', 'Ruby', 'Node', 'PHP', 'Javascript'].map(t => ({
    label: t,
    value: t
  }))
)
 
// Mock http request. This would normally make a request to your server to fetch matching tags.
const fetch = input => {
  console.log(input.toLowerCase())
    const filtered = sampleTags.filter(t=> t.label.toLowerCase().includes(input.toLowerCase()))
    console.log(sampleTags.filter(t=> t.label.toLowerCase().includes(input.toLowerCase())).toJS())
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sampleTags.filter(t=> t.value.toString().toLowerCase().includes(input.toString().toLowerCase())).toJS())
    }, 500)
  })
}
 
export default class Async extends Component {
  state = {
    selected: sampleTags.take(1)
  }
 
  render() {
    const { selected } = this.state
    const onSelect = tag => {
      const newTag = {
        label: tag.label,
        value: tag.value || tag.label
      }
 
      this.setState({
        selected: selected.push(newTag)
      })
      this.props.onSkillAdd(tag.label)
    }
 
    const remove = tag => {
      this.setState({
        selected: selected.filter(t => t.value !== tag.value)
      })
      this.props.onSkillRemove(tag.label)
    }
 
    const placeholder = selected.isEmpty() ? 'Skills' :
      "Use the backspace key to delete the last tag"
 
    return (
      <TagBoxAsync
        fetch={fetch}
        selected={selected.toJS()}
        onSelect={onSelect}
        removeTag={remove}
        backspaceDelete={true}
        placeholder={placeholder}
        
      />
    )
  }
}