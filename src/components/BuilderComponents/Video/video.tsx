import React from "react";

class Video extends React.Component<IVideo> {
  public ref: React.RefObject<HTMLVideoElement> = React.createRef();

  public componentDidUpdate(prevProps: IVideo) {
    if (prevProps.src !== this.props.src) {
      if (this.ref.current) {
        this.ref.current.load();
      }
    }
  }

  public render() {
    const vid = (
      <video
        ref={this.ref}
        controls={true}
        poster={this.props.poster}
        title={this.props.title}
        width="100%"
      >
        <source src={this.props.src} />
        Browser doesn't support this video, please upgrade
      </video>
    );
    return (
      <React.Fragment>
        {this.props.src ? (
          vid
        ) : (
          <img src={require("./placeholder.svg")} width="100%" />
        )}
        {this.props.title ? <p>{this.props.title}</p> : null}
      </React.Fragment>
    );
  }
}

interface IVideo {
  src: string;
  title?: string;
  poster?: string;
}

export default Video;
