# Debug view

## Prompt

Debug view

## Artwork

Today I decided to implement a debug view for zooming into the Mandelbrot set.

I wrote my solution today's challenge in Deno and compiled using <https://deno.land/x/bmt>. This way, I can record the output of the program in the browser console and then use that to generate the GIF.

Here is the command I used to compile the bookmarklet:

```bash
cd 2023/05

deno run -A https://deno.land/x/bmt/main.ts zoom.ts
```

Here is the compiled bookmarklet:

```
javascript:(()%3D%3E%7Bfunction%20i(n%2Ce%2Ct)%7Blet%20r%3DMath.round(t*e)%2Cl%3DMath.round(t*e)%2Ca%3Dnew%20Array(r)%2Cc%3Dn%5B0%5D-e%2F2%2Co%3Dn%5B1%5D-e%2F2%2Cx%3Dn%5B0%5D%2Be%2F2%2Cb%3Dn%5B1%5D%2Be%2F2%2Cf%3D(x-c)%2Fl%2Cy%3D(b-o)%2Fr%3Bfor(let%20p%3D0%3Bp%3Cr%3Bp%2B%2B)%7Ba%5Bp%5D%3Dnew%20Array(l)%3Bfor(let%20M%3D0%3BM%3Cl%3BM%2B%2B)%7Blet%20S%3Dc%2BM*f%2Cg%3Do%2Bp*y%2Cu%3D0%2Cs%3D0%2Cd%3D0%2Ch%3D1e3%3Bfor(%3Bu*u%2Bs*s%3C%3D4%26%26d%3Ch%3B)%7Blet%20j%3Du*u-s*s%2BS%3Bs%3D2*u*s%2Bg%2Cu%3Dj%2Cd%2B%2B%7Da%5Bp%5D%5BM%5D%3Dd%3Ch%7D%7Dreturn%20a%7Dw(%5B-1.401155%2C0%5D%2C.5%2C200)%3Bfunction%20m(n)%7Bconsole.log(n.map(e%3D%3Ee.map(t%3D%3Et%3F%22%5Cu2588%22%3A%22%20%22).join(%22%22)).join(%60%0A%60))%7Dfunction%20w(n%2Ce%2Ct)%7Blet%20r%3Di(n%2Ce%2Ct)%3Bm(I(r%2C50%2C100))%2Ce%3C5%26%26setTimeout(()%3D%3E%7Bw(n%2Ce*1.25%2Ct)%7D%2C100)%7Dfunction%20I(n%2Ce%2Ct)%7Blet%20r%3Dnew%20Array(e)%2Cl%3DMath.ceil(n.length%2Fe)%2Ca%3DMath.ceil(n%5B0%5D.length%2Ft)%3Bfor(let%20c%3D0%3Bc%3Ce%3Bc%2B%2B)%7Br%5Bc%5D%3Dnew%20Array(t)%3Bfor(let%20o%3D0%3Bo%3Ct%3Bo%2B%2B)%7Blet%20x%3D0%3Bfor(let%20b%3D0%3Bb%3Cl%3Bb%2B%2B)for(let%20f%3D0%3Bf%3Ca%3Bf%2B%2B)x%2B%3Dn%5Bc*l%2Bb%5D%26%26n%5Bc*l%2Bb%5D%5Bo*a%2Bf%5D%3F1%3A0%3Br%5Bc%5D%5Bo%5D%3Dx%2F(l*a)%3E%3D.5%7D%7Dreturn%20r%7D%7D)()%3B%0A
```

Hint: Open the console and then paste the bookmarklet into the URL bar of your browser and press enter to run it on the current page you are on.

### GIF

![mandelbrot](https://user-images.githubusercontent.com/31261035/210906128-cad6f3e8-f29f-40d2-9b79-0c394ed07d65.gif)

### Program

The code for the program that generates the GIF is found within this directory.

Feel free to use the code for your own projects.
