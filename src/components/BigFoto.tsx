import * as React from 'react';

export interface BigPhotoProps {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class BigFoto extends React.Component<BigPhotoProps, {}> {
  private img1ref: any;
  private img2ref: any;
  private img3ref: any;

  private changeTime: number;
  private changeDuration: number;

  state = {
    images: [
      'http://americandreamers.pl/tempimages/1.jpg',
      'http://americandreamers.pl/tempimages/2.jpg',
      'http://americandreamers.pl/tempimages/3.jpg',
    ],
    compwindow: window,
  };

  constructor(props: BigPhotoProps) {
    super(props);
    this.img1ref = React.createRef();
    this.img2ref = React.createRef();
    this.img3ref = React.createRef();
    this.changeTime = 6000;
    this.changeDuration = 3000;
  }

  componentDidMount() {
    this.backgroundScheduler_1();
    window.addEventListener('resize', () => {
      this.setState({ compwindow: window });
    });
  }

  render() {
    return (
      <div>
        <div
          ref={this.img1ref}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            zIndex: -1,
            transition: `${this.changeDuration / 1000}s`,
            backgroundImage: `url(${this.state.images[0]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <div
          ref={this.img2ref}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            zIndex: -2,
            transition: `${this.changeDuration / 1000}s`,
            backgroundImage: `url(${this.state.images[1]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <div
          ref={this.img3ref}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            zIndex: -3,
            transition: `${this.changeDuration / 1000}s`,
            backgroundImage: `url(${this.state.images[2]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <div
          style={{
            left: 0,

            marginTop: '-100px',
            position: 'absolute',
            textAlign: 'center',
            top: '30%',
            width: '100%',
            color: 'white',
            fontSize: this.state.compwindow.innerWidth / 15,
            fontFamily: 'Alfa Slab One',
          }}
        >
          <span style={{ color: '#3C3B6E' }}>A</span>merican<span style={{ color: '#B22234' }}>D</span>reamers.pl
          <p
            style={{
              color: 'white',
              fontSize: this.state.compwindow.innerWidth / 25,
              marginTop: 20,
              marginLeft: 40,
              marginRight: 30,
              fontFamily: 'Alfa Slab One',
            }}
          >
            Juz niedł <span style={{ color: '#3C3B6E', fontWeight: 'bold' }}>U</span>go pojawi{' '}
            <span style={{ color: '#eee', fontWeight: 'bold' }}>S</span>ię tutaj blog niepoprawnych m
            <span style={{ color: '#B22234', fontWeight: 'bold' }}>A</span>rzycieli.
          </p>
        </div>
      </div>
    );
  }

  private backgroundScheduler_1() {
    setTimeout(() => {
      this.img1ref.current.style.opacity = 0;
      this.img2ref.current.style.opacity = 1;
      this.img3ref.current.style.opacity = 1;
      this.order(
        ['-3', '-1', '-2'],
        () => {
          this.backgroundScheduler_2();
        },
        this.changeDuration
      );
    }, this.changeTime);
  }

  private backgroundScheduler_2() {
    setTimeout(() => {
      this.img1ref.current.style.opacity = 1;
      this.img2ref.current.style.opacity = 0;
      this.img3ref.current.style.opacity = 1;
      this.order(
        ['-2', '-3', '-1'],
        () => {
          this.backgroundScheduler_3();
        },
        this.changeDuration
      );
    }, this.changeTime);
  }

  private backgroundScheduler_3() {
    setTimeout(() => {
      this.img1ref.current.style.opacity = 1;
      this.img2ref.current.style.opacity = 1;
      this.img3ref.current.style.opacity = 0;
      this.order(
        ['-1', '-2', '-3'],
        () => {
          this.backgroundScheduler_1();
        },
        this.changeDuration
      );
    }, this.changeTime);
  }

  private order(array: string[], callback: Function, time: number) {
    setTimeout(() => {
      this.img1ref.current.style.zIndex = array[0];
      this.img2ref.current.style.zIndex = array[1];
      this.img3ref.current.style.zIndex = array[2];
      callback();
    }, time);
  }
}
