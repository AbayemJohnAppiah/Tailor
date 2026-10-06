/* Main */

document.getElementById("track").innerHTML = "<img src='images/PHOTO-2026-10-05-17-11-52.jpg'>"

document.getElementById("text-track").innerHTML =
  "<p class='list moveright'>custom tailoring <span class='dot'>&#183;</span> modern style <span class='dot'>&#183;</span> perfect fit <span class='dash'>&mdash;</span></p> <h1 class='head moveright'>Style That Fits <span class='head1'>Your Life</span></h1> <p class='description moveright'>At Sleek 'N' Casual, we design and stitch quality outfits that bring out your best. From everyday wear to special occasions, we make sure you look good, feel geart, and always fit right.</p> ";

document.getElementById("name").innerHTML =
  "<h2 class='moveright'><span class='w1'>Sleek</span><span class='w2'>'N'</span><span class='w3'>Casual</span></h2>";

/*Cards images */
document.getElementById("c1").innerHTML = "<img src='images/Fabric out of stock❗️❗️❗️Sleek Well Tailored✂️Junic Trousers Set available on order .Price- 230g (1).jpg'>"

document.getElementById("c2").innerHTML = "<img src='images/Fabric out of stock❗️❗️❗️Sleek Well Tailored✂️Junic Trousers Set available on order .Price- 230g (2).jpg'>"
document.getElementById("c3").innerHTML = "<img src='images/Fabric out of stock❗️❗️❗️Sleek Well Tailored✂️Junic Trousers Set available on order .Price- 230g.jpg'>"

/* Auto spread of cards */
const stack = document.getElementById("stack");
const tabletAndMobile = window.matchMedia("(max-width: 1100px)");
let stackObserver = null;

function watchStack() {
  if (stackObserver) stackObserver.disconnect();            // clear any old watcher
  if (!tabletAndMobile.matches) return;                     // desktop: do nothing, hover only
  if (stack.classList.contains("spread")) return;           // already open

  stackObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      stack.classList.add("spread");                        // fans the cards out
      stackObserver.disconnect();                           // spreads once and stays open
    }
  }, { rootMargin: "-50% 0px -50% 0px" });                  // watch only the middle line of the screen

  stackObserver.observe(stack);
}

watchStack();
tabletAndMobile.addEventListener("change", watchStack);     // runs again if the window is resized

/* Our Service */
document.getElementById("our-services").innerHTML = "<h4>what we do <span class='dash'>&mdash;</span></h4><h2>Our Services</h2><p>We create outfits that match your style, personality and purpose. Here's what we do best.</p>"

document.getElementById("card1").innerHTML = "<img src='images/icon/blazer-icon-magenta.png'><h3>Suit & Blazer</h3><p>Sharp, stylish and perfectly tailored for every occasion.</p>"

document.getElementById("card2").innerHTML = "<img src='images/icon/kurta-icon-magenta.png'><h3>Kaftan</h3><p>Stylish and comfortable kaftans crafted with elegant designs, quality fabrics, and a perfect fit.</p>"

document.getElementById("card3").innerHTML = "<img src='images/icon/gown-icon-magenta.png'><h3>Bridal Wear</h3><p>Elegant bridal outfits designed with beautiful details, perfect fitting, and a touch of timeless style.</p>"

document.getElementById("card4").innerHTML = "<img src='images/icon/womens-native-wear-icon-magenta.png'><h3>Native Wear</h3><p>Traditional outfits with a modern touch and elegant finish.</p>"

document.getElementById("card5").innerHTML = "<img src='images/icon/dress-icon-magenta.png'><h3>Casual Wear</h3><p>Smart and stylish casuals for everyday confidence.</p>"


/* About */
document.getElementById("about-image-containe").innerHTML = "        <img src='images/1.webp'><div class='image-overlay2'></div><div class='motor' id='motor'><h2 class='reveal'>Look Perfect In What You Wear</h2></div>"

document.getElementById("about-text").innerHTML = "<h4>a<span class='only-b'>b</span>out us <span class='dash'>&mdash;</span></h4><h2>More Than Just a Tailor</h2> <p><span class='brand-name'>Sleek 'N' Casual</span> specializes in professional tailoring and stylish outfits for both men and women. From everyday casual wear to elegant bridal designs, we combine creativity, quality craftsmanship, and modern fashion to create outfits that are made to suit each client's unique style. <br> <br> We pay close attention to every detail, from fabric selection and measurements to stitching and finishing, ensuring that each outfit is comfortable, well-fitted, and beautifully crafted. Whether you need a custom-made suit, traditional attire, bridal wear, formal clothing, or a stylish casual outfit, we bring your ideas to life with care and precision. <br><br> Our services are not limited by location. <span class='brand-name'>Sleek 'N' Casual</span> offers worldwide delivery, making it possible for clients around the world to order professionally tailored outfits and have them delivered directly to their doorstep. With a commitment to excellent craftsmanship, personalized service, and timeless style, we aim to make every outfit a reflection of the person wearing it.</p> "

document.getElementById("quote-panel").innerHTML = "<svg class='brush' viewBox='0 0 350 350' preserveAspectRatio='none' aria-hidden='true'><defs><filter id='rough' x='-10%' y='-10%' width='120%' height='120%'><feTurbulence type='fractalNoise' baseFrequency='0.035 0.012' numOctaves='3' seed='7' result='n' /><feDisplacementMap in='SourceGraphic' in2='n' scale='38' /></filter></defs><g filter='url(#rough)'><path d='M36 36 L322 22 L314 330 L26 322 Z' fill='#f8dce7'/><path d='M64 80 L304 72 L298 108 L60 118 Z' fill='#f3c9da' opacity='.45' /><path d='M54 222 L308 214 L304 246 L52 260 Z' fill='#f3c9da' opacity='.35' /></g></svg><blockquote class='quote'><p>&ldquo;Good<br>clothes don&rsquo;t<br>just fit your body,<br>they fit your<br>lifestyle.&rdquo;</p></blockquote>"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);   // stop watching, so it never resets
    }
  });
}, { threshold: 0.2 });                   // starts when 20% is visible

document.querySelectorAll(".services-container").forEach((el) => observer.observe(el));

document.querySelectorAll(".reveal").forEach((el) => {
  const watcher = new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) {
      el.classList.add("show");
      obs.disconnect();
    }
  }, { threshold: 0.3 });

  watcher.observe(el.parentElement);
});
/* right-side of cards*/
/* the-move-up-text */
document.getElementById("the-move-up-text").innerHTML = "<h2 class='moveup'>Dressed in a fit <em>that feels like you</em></h2><p class='lead moveup'>From bold Ankara co-ords to sharp everyday pieces, every outfit is cut, stitched and finished around your measurements, so it fits right and looks even better.</p><ul class='moveup'><li>Premium fabrics</li><li>Perfect fitting</li><li>Unique designs</li><li>On-time delivery</li></ul>"

/* NEW: Tele block */
document.getElementById("card-tele").innerHTML = "<h5>Call or book a fitting</h5><div class='tele-cards' ><a href='https://wa.me/233553169272' class='tele-card'><span class='tele-icon'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'stroke-linejoin='round'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' /></svg></span><span class='tele-info'><small>whatsapp us</small><strong>+233 55 316 9272</strong></span></a><a href='tel:+233553169272' class='tele-card'><span class='tele-icon'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' /></svg></span><span class='tele-info'><small>Call / WhatsApp</small><strong>+971 56 902 9082</strong></span></a></div >"
