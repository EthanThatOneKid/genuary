# Perfect loop / Infinite loop / endless GIFs

## Prompt

Examples of perfect loops on Giphy
TIP, use ffmpeg to turn a bunch of PNG frames into an MP4:

```
ffmpeg -r 30 -i "frame%04d.png" -pix_fmt yuv420p -movflags +faststart perfectloop.mp4
```

## Artwork

I ignored the `ffmpeg` example since p5js recently came out with a [`saveGif()`](https://youtube.com/shorts/CEnfKhs6wLg?feature=share) ([reference](https://p5js.org/reference/#/p5/saveGif)) function that does the same thing.

My animation includes balls rotating in a circle at random speeds. Since the balls are rotating at different speeds, they will never be in the same position at the same time. This means that the animation will never repeat itself, so I also had to ignore the notion of a "perfect loop" for this artwork.

I wrote my solution today's challenge in <https://editor.p5js.org/>.

Here is the link to the sketch: <https://editor.p5js.org/EthanThatOneKid/sketches/T26BTCo6w>.

### GIF

![genuary-2023-01](https://user-images.githubusercontent.com/31261035/210199573-22d30ad7-f175-408a-b38c-05f0b9e5b588.gif)

### Program

The code for the program that generates the GIF is found within this directory.

Feel free to use the code for your own projects.
