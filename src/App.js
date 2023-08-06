import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
  }

  componentDidMount() {
    const { naver } = window;
    if (!this.mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const 위치 = new naver.maps.LatLng(37.5656, 126.9769);
    const 지도옵션 = {
      center: 위치,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const 지도 = new naver.maps.Map(this.mapElement.current, 지도옵션);
    new naver.maps.Marker({
      position: 위치,
      map: 지도,
    });
  }

  render() {
    return <div ref={this.mapElement} style={{ minHeight: '400px' }} />;
  }
}

export default App;
