import { Component, Prop, Watch, h } from '@stencil/core'
import hljs from 'highlight.js'
import hljsDefineSolidity from 'highlightjs-solidity'

// Register Solidity
hljsDefineSolidity(hljs)

@Component({
  tag: 'solidity-highlight',
  styleUrl: './solidity-highlight.css',
})
export class SolidityHighlight {
  // Keep ref of the code tag for re-applying the highlighter
  private codeTag?: HTMLElement
  // Making props mutable through js
  @Prop({
    reflect: true,
  })
  code: string

  // Apply highlight on new code
  @Watch('code')
  watchHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.codeTag.innerText = newValue
      hljs.highlightBlock(this.codeTag)
    }
  }

  // Apply highlight on load
  componentDidLoad() {
    hljs.highlightBlock(this.codeTag)
  }

  render() {
    return (
      <code class="solidity" ref={el => (this.codeTag = el)}>
        {this.code}
      </code>
    )
  }
}
