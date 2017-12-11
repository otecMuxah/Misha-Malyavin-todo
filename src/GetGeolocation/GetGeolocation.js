export class GetGeolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'Click me to get location'
    };
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.setState({ position: 'Geolocation is not supported by this browser' });
    }
  }
  showPosition = (position) => {
    this.setState({ position: `Latitude:  ${position.coords.latitude}  Longitude: ${position.coords.longitude}` });
  }

  render() {
    return <span onClick={this.getLocation}>{this.state.position}</span>;
  }
}
