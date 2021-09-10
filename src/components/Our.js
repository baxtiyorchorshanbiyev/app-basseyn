import React from 'react';
import "../sass/our.scss";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';
const Our = () => {
  return (
    <>
      <div className="our">
        <div className="our-container">
          <div className="catalog-title">
            <h1>
              О нас
            </h1>
            <span className="underline">
            </span>

          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="left">
                  <Player width="100%" poster="./images/video.png">
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                    {/* <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" /> */}
                    <BigPlayButton position="center" />
                    {/* <ControlBar>
                      <ReplayControl seconds={10} order={1.1} />
                      <ForwardControl seconds={30} order={1.2} />
                      <CurrentTimeDisplay order={4.1} />
                      <TimeDivider order={4.2} />
                      <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                      <VolumeMenuButton disabled />
                    </ControlBar> */}
                  </Player>
                  {/* <span>Video</span> */}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="right">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis illo nihil ad ipsum sint, aut enim totam architecto cum, modi obcaecati atque cumque, rem voluptatem repudiandae aperiam deserunt fugiat in commodi voluptas error animi. Repudiandae culpa magni repellendus ab cumque adipisci numquam provident sint, porro expedita, consequatur doloremque. Facilis ipsa magni iure, quibusdam, ea voluptate quos quod est ratione aspernatur totam odit amet consequatur neque minus. Quo quos nesciunt nulla. Sint, voluptatibus. Maiores et dolores debitis impedit laboriosam. Facere itaque voluptatum aspernatur ab aliquid saepe libero cumque voluptatem totam, a odio dolores adipisci consequatur beatae laudantium! Aperiam, explicabo maiores?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Our;