import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import "../SkeletonLoading.css";
import { ToastContainer } from "react-toastify";

function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const wrapperRef = useRef(null);

  const scrollImages = [
    "./scroll/20_01_2022_SCI_FI_DESERT_SPACESHIP_practice_work_1-min.webp",
    "/scroll/Background_1-min.webp",
    // "/scroll/CA-BG_1-min.webp",
    "/scroll/Dream_Land_01_1-min.webp",
    "/scroll/leah_the_quiet_ladybug_pg9-10_copy_1-min.webp",
    "/scroll/old_man_s_dog_memory_LIT_1-min.webp",
    "/scroll/unknown_1-min.webp",
  ];

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (imagesLoaded && wrapperRef.current) {
      const boxes = wrapperRef.current.querySelectorAll(".box");
      horizontalLoop(boxes, { paused: false, repeat: -1 });
    }
  }, [imagesLoaded]);

  const horizontalLoop = (items, config) => {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });

    let length = items.length;
    let startX = items[0].offsetLeft;
    let times = [];
    let widths = [];
    let xPercents = [];
    let curIndex = 0;
    let pixelsPerSecond = (config.speed || 1) * 100;
    let snap =
      config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);
    let totalWidth, curX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });

    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    return tl;
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      {!imagesLoaded && (
        <div className="marquee skeleton">
          <div className="contain">
            qq
            {[...Array(7)].map((_, i) => (
              <div className="col-sm-6 col-md-3" key={i}>
                <div className="movie--isloading">
                  <div className="loading-image"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {imagesLoaded && (
        <div className="marquee ScrollImg">
          <div className="wrapper" ref={wrapperRef}>
            {scrollImages?.map((src, index) => (
              <img key={index} className="box" src={src} alt="" />
            ))}
          </div>
        </div>
      )}

      <Newsletter />
    </div>
  );
}

export default Home;
