import './button.scss';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: ''
    };
  }
  clickHandle = () => {
    this.setState({ activeClass: this.state.activeClass ? '' : 'active' });
    return null;
  }
  render() {
    return (
      <div className="text-holder">
        <button
          onClick={this.clickHandle}
          className={this.state.activeClass}
        > {!this.state.activeClass ? 'show' : 'hide'}
        </button>
        <span
          className={this.state.activeClass}
        >
          Random text
        </span>
      </div>
    );
  }
}
