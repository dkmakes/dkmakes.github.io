/*
  Our Recipe Box: recipe data.
  To add a recipe, add an object to RECIPES (and, optionally, an illustration to ART).

  Quantity markers in recipe text (scaled with the amount):
    [[v:2.75]]  cups/spoons, shown as a fraction (2¾)
    [[n:2]]     countable items (eggs, sachets), shown to the nearest ½
    [[g:70]]    weight, shown as "70 g"
  A range uses a dash inside the marker: [[g:60-90]].
  Unmarked numbers (oven temperatures, minutes, tin sizes, per-piece portions) never change.
*/
const CATS = {
  Cookies:{ko:"쿠키",c:"#c97b2a"},
  Cakes:{ko:"케이크",c:"#8a4f9e"},
  Bread:{ko:"빵",c:"#2f7fb5"},
  Frosting:{ko:"프로스팅",c:"#d0577b"},
  Sauces:{ko:"소스",c:"#c4372c"},
  Sides:{ko:"반찬·김치",c:"#3f8f3a"},
  Noodles:{ko:"면",c:"#b0893a"}
};

const RECIPES = [
{
 id:"popovers", art:"popover", title:"Popovers", ko:"팝오버", cat:"Bread",
 base:12, unit:{en:"popovers", ko:"개"}, makesNote:"",
 preheat:"425°F (220°C, 200°C fan) at the start, with the buttered tin inside", chill:"None",
 scaleNote:"One batch fills a 12-cup muffin or popover tin. For more, bake in batches or use a second tin; baking times stay the same.",
 source:{name:"NYT Cooking"},
 groups:[{items:[
  "[[v:5]] tablespoons melted butter ([[g:70]])",
  "[[n:2]] eggs (about [[g:100]])",
  "[[v:1]] cup milk ([[g:240]])",
  "[[v:1]] teaspoon sugar ([[g:4]])",
  "[[v:1]] teaspoon salt ([[g:6]])",
  "[[v:1]] cup all-purpose flour, Type 550 ([[g:125]])",
  "[[v:1]] teaspoon fresh thyme ([[g:1]]), or [[v:0.5]] teaspoon dried ([[g:0.5]]), optional"
 ]}],
 steps:[
  "Preheat the oven to 425°F (220°C, 200°C fan). Put about 1 teaspoon of the butter into each cup of a 12-cup muffin or popover tin and heat it in the oven while you make the batter.",
  "Whisk the eggs, milk, [[v:1]] tablespoon ([[g:14]]) of the butter, the sugar and the salt. Gradually whisk in the flour until smooth, then add the thyme if using.",
  "Take the hot tin out and fill each cup halfway. Bake for 15–20 minutes.",
  "Lower the oven to 350°F (175°C, 155°C fan) and bake about 15 minutes more, until puffed and golden. Don't open the oven during the first 30 minutes.",
  "Unmould straight away and serve hot."
 ],
 notes:[]
},
{
 id:"carrot-cake-cookies", art:"carrot", title:"Carrot Cake Cookies", ko:"당근 케이크 쿠키", sub:"Butter or oil", cat:"Cookies",
 base:24, unit:{en:"cookies", ko:"개"}, makesNote:"about",
 preheat:"350°F (175°C, 155°C fan): before mixing (butter) or while the dough chills (oil)", chill:"Butter: none · Oil: dough 30–60 min",
 scaleNote:"Cookie size and baking time stay the same; only the number of trays changes.",
 source:{name:"Le Crème de la Crumb", url:"https://www.lecremedelacrumb.com/carrot-cake-cookies/"},
 groups:[
  {name:"Cookies", items:[
   "[[v:2.75]] cups all-purpose flour, Type 550 ([[g:345]])",
   "[[v:1]] teaspoon baking soda ([[g:5]])",
   "[[v:0.75]] teaspoon salt ([[g:4]])",
   "[[v:2]] teaspoons cinnamon ([[g:5]])",
   "[[v:1]] cup butter, room temperature but slightly firm ([[g:227]]), or [[v:0.75]] cup vegetable oil ([[g:165]])",
   "[[v:0.75]] cup sugar ([[g:150]])",
   "[[v:0.75]] cup brown sugar, packed ([[g:165]])",
   "[[v:2]] teaspoons vanilla ([[g:8]])",
   "[[n:2]] large eggs (about [[g:100]])",
   "[[v:1.5]] cups finely grated carrots, about [[n:4]] medium ([[g:165]])"
  ]},
  {name:"Brown butter cream cheese frosting", items:[
   "[[v:4]] tablespoons butter ([[g:56]])",
   "[[v:2]] ounces cream cheese, softened ([[g:57]])",
   "[[v:3]] cups powdered sugar ([[g:360]])",
   "[[v:1]] teaspoon vanilla ([[g:4]])",
   "[[v:4-6]] tablespoons milk, as needed ([[g:60-90]])"
  ]}
 ],
 steps:[
  "Whisk the flour, baking soda, salt and cinnamon in a medium bowl.",
  "Butter: beat the butter and both sugars 2–3 minutes until light and fluffy, then beat in the vanilla and eggs. Oil: whisk the oil, both sugars, vanilla and eggs about 1 minute until glossy. Either way, stir in the carrots.",
  "Fold the dry ingredients into the wet until no flour streaks remain. Don't overmix.",
  "Oil version only: cover and chill the dough 30–60 minutes while the oven heats. Butter dough goes straight on the tray.",
  "Drop 2-tablespoon portions onto a greased or lined tray, 5–7 cm apart.",
  "Bake 10–12 minutes, until the edges start to brown and the tops look dry. Cool 5 minutes on the tray, then on a rack.",
  "For the frosting, melt the butter over medium-low heat, stirring 2–4 minutes until deep golden-brown. Mix it with the cream cheese, then beat in the powdered sugar a little at a time. Add the vanilla, then milk 1 tablespoon at a time until spreadable.",
  "Frost only once the cookies are completely cool. Store airtight at room temperature for up to 5 days."
 ],
 notes:[
  "Oil version: if the dough is still very loose after chilling, add [[v:2-4]] tablespoons flour ([[g:15-30]]).",
  "Butter tastes richer; oil gives softer, moister, more cake-like cookies that stay soft longer.",
  "Grate fresh carrots yourself; pre-shredded ones are too dry.",
  "Reviewers suggest more spice (extra cinnamon, a pinch of nutmeg or allspice) and say half the powdered sugar is plenty.",
  "Optional: [[v:0.25-0.5]] cup chopped walnuts or pecans ([[g:30-60]]) in the dough or on the frosting."
 ]
},
{
 id:"cream-cheese-frosting", art:"frosting", title:"Cream Cheese Frosting for Cookies", ko:"크림치즈 프로스팅", cat:"Frosting",
 base:24, unit:{en:"cookies frosted", ko:"개 분량"}, makesNote:"",
 preheat:"None", chill:"None, unless piping (15–20 min if using milk)",
 scaleNote:"",
 source:{name:"Chef Lindsey Farr", url:"https://cheflindseyfarr.com/cream-cheese-frosting-for-cookies/"},
 groups:[{items:[
  "[[v:0.5]] cup unsalted butter, softened ([[g:113]])",
  "[[v:3.5]] tablespoons full-fat cream cheese, softened ([[g:50]])",
  "[[v:2]] cups powdered sugar ([[g:227]])",
  "[[v:1]] teaspoon vanilla ([[g:4]])",
  "[[v:2]] tablespoons heavy cream or Schlagsahne ([[g:32]]), or [[v:1]] tablespoon full-fat milk ([[g:15]]), plus more as needed"
 ]}],
 steps:[
  "Cream the butter and cream cheese with a paddle until smooth.",
  "Slowly add the powdered sugar, then the vanilla, and beat until light and smooth.",
  "Switch to the whisk, add the cream (or milk) and whisk on high until fluffy. With milk, add extra 1 teaspoon at a time only if needed.",
  "Frost straight away, or chill briefly if piping."
 ],
 notes:[
  "The cream loosens the frosting and makes it fluffy; leave it out for a thicker frosting.",
  "Milk thins faster than cream, so start small. The result is slightly softer and less rich.",
  "Use full-fat block cream cheese; whipped cream cheese makes it too loose."
 ]
},
{
 id:"marble-cake", art:"marble", title:"Marble Cake", ko:"마블 케이크 · Marmorkuchen", cat:"Cakes",
 base:16, unit:{en:"pieces", ko:"조각"}, makesNote:"1 bundt cake (24 cm tin),",
 preheat:"180°C (160°C fan) at the start, tin greased and floured", chill:"None; cool fully before glazing",
 scaleNote:"This cake is sized for a 24 cm bundt tin. A different amount needs a different tin: for half, use a small loaf tin and start checking at about 35 minutes; for double, bake two cakes.",
 source:{name:"German cookbook (Marmorkuchen + Rührteig p. 11)"},
 groups:[
  {name:"Batter", items:[
   "[[g:250]] soft butter (weiche Butter), plus extra for the tin",
   "[[g:250]] sugar (Zucker)",
   "[[n:1]] sachet vanilla sugar (Vanillezucker, [[g:8]])",
   "1 pinch salt",
   "[[n:4]] eggs, size M (about [[g:200]])",
   "[[g:300]] flour, Type 405 (standard German Mehl), plus extra for the tin",
   "[[v:1]] teaspoon baking powder (Backpulver, [[g:4]])",
   "[[v:2-3]] tablespoons milk, if needed ([[g:30-45]])",
   "[[v:3]] tablespoons cocoa powder (Kakaopulver, [[g:20]])",
   "[[g:75]] white couverture (weiße Kuvertüre), finely chopped"
  ]},
  {name:"Topping", items:[
   "[[g:200]] dark cake glaze (dunkle Kuchenglasur)",
   "[[g:25]] white couverture, for shavings"
  ]}
 ],
 steps:[
  "Preheat the oven. Grease the bundt tin with butter, dust with flour and tap out the excess.",
  "Beat the soft butter on high speed until smooth. Gradually beat in the sugar, vanilla sugar and salt.",
  "Add the eggs one at a time, beating about 30 seconds each, until thick and pale golden.",
  "Mix the flour and baking powder, sift over the butter mixture and fold in briefly on medium speed, in portions. Don't overmix.",
  "The batter should drop heavily from a spoon. If it is too stiff, stir in the milk.",
  "Divide the batter in half. Stir the cocoa into one half and the chopped white couverture into the other.",
  "Spoon the light batter into the tin, then the dark batter on top. Draw a fork through in a spiral to marble it.",
  "Bake on the second rack from the bottom for 50–60 minutes. From 50 minutes, test with a wooden skewer: it is done when no batter sticks.",
  "Rest 10 minutes, loosen the edges with a knife, turn out onto a rack and cool completely.",
  "Melt the glaze as the packet says and coat the cake. Shave the remaining [[g:25]] white couverture with a large knife, scatter over the wet glaze and let it set."
 ],
 notes:[
  "The butter must be truly soft; take it out a couple of hours ahead.",
  "Vanillezucker, Kuvertüre and Kuchenglasur are all in the baking aisle of German supermarkets.",
  "Type 405 is the usual flour for German cakes; Type 550 also works and gives a slightly firmer crumb.",
  "About 385 kcal per piece."
 ]
},
{
 id:"pb-yogurt-cookies", art:"pb", title:"Peanut Butter Yogurt Cookies", ko:"땅콩버터 요거트 쿠키", sub:"Dark chocolate · regular yogurt, less sugar", cat:"Cookies",
 base:15, unit:{en:"cookies", ko:"개"}, makesNote:"about",
 preheat:"350°F (175°C, 155°C fan) at the start; line a tray", chill:"None",
 scaleNote:"Cookie size and baking time stay the same; only the number of trays changes.",
 source:{name:"The Healthy Epicurean", url:"https://thehealthyepicurean.com/peanut-butter-yogurt-cookies-with-dark-chocolate/"},
 groups:[{items:[
  "[[v:1.5]] cups creamy peanut butter, not the oil-on-top kind ([[g:390]])",
  "[[v:0.5]] cup regular plain yogurt ([[g:120]])",
  "[[v:1]] teaspoon vanilla extract ([[g:4]])",
  "[[v:0.333]] cup dark brown sugar, lightly packed ([[g:70]])",
  "[[v:6]] tablespoons rolled oats ([[g:35]]), plus [[v:2-3]] tablespoons ([[g:10-15]]) if the batter is runny",
  "[[v:3]] tablespoons all-purpose flour, Type 550 ([[g:23]])",
  "[[n:2]] large eggs (about [[g:100]])",
  "[[v:1]] teaspoon baking soda ([[g:5]])",
  "[[v:1]] teaspoon coarse salt ([[g:5]]), or [[v:0.75]] teaspoon fine salt ([[g:4]])",
  "[[v:0.5]] cup dark chocolate chips or chunks ([[g:85]])",
  "Flaky sea salt for sprinkling, optional"
 ]}],
 steps:[
  "Preheat the oven and line the tray.",
  "Beat the peanut butter, yogurt and vanilla until fluffy.",
  "Mix in the brown sugar, oats and flour until well combined.",
  "Beat in the eggs one at a time.",
  "Mix in the baking soda and salt. If the batter looks runny, add the extra oats.",
  "Fold in the chocolate.",
  "Scoop dollops onto the tray, 2.5–5 cm apart. Sprinkle with flaky salt if using.",
  "Bake 10–15 minutes, checking from 8 minutes, until the tops just start to crack.",
  "Cool on the tray a few minutes before moving; they are very tender when hot."
 ],
 notes:[
  "For a texture closer to the original (Greek yogurt), strain about [[v:0.75]] cup ([[g:180]]) regular yogurt in a sieve lined with kitchen paper for 30–60 minutes, then measure [[v:0.5]] cup and skip the flour.",
  "Keep the sugar at about this ratio; much less and the cookies turn dry and crumbly.",
  "Store airtight at room temperature or in the fridge up to a week; freezes for about 2 months."
 ]
},
{
 id:"buttermilk-biscuits", art:"biscuit", title:"Flaky Buttermilk Biscuits", ko:"버터밀크 비스킷", cat:"Bread",
 base:10, unit:{en:"biscuits", ko:"개"}, makesNote:"about",
 preheat:"425°F (220°C, 200°C fan) at the start", chill:"Freeze cubed butter 15 min first",
 scaleNote:"Biscuit size and baking time stay the same. For a double batch, use a large baking tray instead of the 25 cm pan.",
 source:{name:"Sally's Baking Addiction", url:"https://sallysbakingaddiction.com/flaky-buttermilk-biscuits/"},
 groups:[
  {items:[
   "[[v:2.5]] cups all-purpose flour, Type 550, spooned and levelled ([[g:313]]), plus extra for dusting",
   "[[v:1]] tablespoon baking powder (Backpulver, [[g:12]])",
   "[[v:0.5]] teaspoon baking soda (Natron, [[g:3]])",
   "[[v:1]] teaspoon salt ([[g:6]])",
   "[[v:0.5]] cup unsalted butter, cubed and very cold ([[g:113]])",
   "[[v:1.125]] cups cold buttermilk (Buttermilch, [[g:270]]): [[v:1]] cup ([[g:240]]) for the dough, [[v:2]] tablespoons ([[g:30]]) for brushing",
   "[[v:2]] teaspoons honey ([[g:14]])"
  ]},
  {name:"Honey butter topping (optional)", items:[
   "[[v:2]] tablespoons butter, melted ([[g:28]])",
   "[[v:1]] tablespoon honey ([[g:21]])"
  ]}
 ],
 steps:[
  "Preheat the oven.",
  "Whisk the flour, baking powder, baking soda and salt. Cut in the frozen butter with a pastry cutter or food processor until it looks like coarse crumbs.",
  "Make a well, pour in [[v:1]] cup ([[g:240]]) buttermilk and drizzle over the honey. Fold until the dough just comes together; it should be shaggy with some wet spots. Don't overwork it.",
  "Turn out onto a floured surface and pat into a 2 cm thick rectangle. Fold one side to the centre, then the other side over it. Turn 90°, flatten to 2 cm again and repeat. Do this 3 times, ending with a 2 cm rectangle.",
  "Cut straight down with a 6–7.5 cm cutter; don't twist, or the biscuits won't rise. Re-roll the scraps. Place the biscuits touching in a 25 cm cast-iron pan or on a lined baking tray.",
  "Brush the tops with the remaining [[v:2]] tablespoons ([[g:30]]) buttermilk. Bake 18–20 minutes, until golden.",
  "For the topping, whisk the melted butter and honey and brush over the warm biscuits. Serve warm."
 ],
 notes:[
  "No buttermilk: for each cup, put 2 teaspoons lemon juice or white vinegar (10 g) in a measuring jug, top up to 1 cup (240 g) with whole milk, stir and wait 5 minutes.",
  "Grating the frozen butter on a box grater is a quick alternative to cubing.",
  "Make ahead: after step 4, wrap and refrigerate up to 2 days, or freeze up to 3 months (thaw overnight in the fridge), then cut and bake.",
  "Baked biscuits keep 5 days covered, or 3 months frozen."
 ]
},
{
 id:"oil-noodle-sauce", art:"noodle", title:"Oil Noodle Sauce", ko:"기름 국수 소스", cat:"Sauces",
 base:6, unit:{en:"servings", ko:"인분"}, makesNote:"",
 preheat:"None", chill:"None",
 scaleNote:"",
 source:{name:"Our own recipe"},
 groups:[{items:[
  "[[v:10]] tablespoons chilli oil (고추기름, [[g:130]])",
  "[[v:1]] tablespoon sesame oil (참기름, [[g:13]])",
  "[[v:1]] teaspoon MSG ([[g:4]])",
  "[[v:1]] teaspoon tuna sauce (참치액, [[g:6]])",
  "[[v:0.5]] teaspoon vinegar (식초, [[g:2.5]])"
 ]}],
 steps:[
  "Stir all the ingredients together until the MSG dissolves.",
  "Toss with freshly cooked, drained noodles, about 25 g sauce per serving."
 ],
 notes:[]
},
{
 id:"napa-geotjeori", art:"geotjeori", title:"Fresh Napa Cabbage Kimchi", ko:"알배추 겉절이", sub:"Geotjeori", cat:"Sides",
 base:300, unit:{en:"g napa cabbage", ko:"g 알배추"}, makesNote:"",
 preheat:"None", chill:"None; eat straight away or chill up to 2–3 days",
 scaleNote:"",
 source:{name:"Our own recipe"},
 groups:[{items:[
  "[[g:300]] baby napa cabbage (알배추)",
  "[[g:21]] gochugaru, Korean chilli flakes (고춧가루, [[v:3]] tablespoons)",
  "[[g:12]] sugar (설탕, [[v:1]] tablespoon)",
  "[[g:36]] anchovy fish sauce (멸치액젓, [[v:2]] tablespoons)",
  "[[g:18]] tuna sauce (참치액, [[v:1]] tablespoon)",
  "[[g:40]] maesil-cheong, green plum syrup (매실청, [[v:2]] tablespoons)",
  "[[g:15]] minced garlic (다진 마늘, [[v:1]] tablespoon)",
  "[[g:30]] chives or spring onions (쪽파), or to taste",
  "[[g:4]] sesame oil (참기름, about [[v:1]] teaspoon) and [[g:3]] toasted sesame seeds (통깨, about [[v:1]] teaspoon), or to taste"
 ]}],
 steps:[
  "Separate the cabbage leaves, wash and drain well. Tear or cut into bite-sized pieces and pat dry; extra water dilutes the seasoning.",
  "Cut the chives into 3–4 cm lengths.",
  "Mix the gochugaru, sugar, anchovy fish sauce, tuna sauce, maesil-cheong and garlic in a large bowl. Leave 5 minutes so the chilli flakes soften.",
  "Add the cabbage and chives and toss gently by hand (wear gloves) until every leaf is coated.",
  "Finish with a drizzle of sesame oil and a sprinkle of sesame seeds. Serve straight away."
 ],
 notes:[
  "The original list gives ingredients only; the method above is the usual way to make geotjeori. Chives, sesame oil and sesame seeds were \"to taste\" in the original; the grams are a starting point.",
  "For softer leaves, salt the cut cabbage with about [[g:15]] coarse salt ([[v:1]] tablespoon) for 20–30 minutes, rinse once and drain well, then taste before adding all the fish sauce.",
  "Geotjeori is best fresh; it releases water and turns sour within a few days."
 ]
},
{
 id:"kalguksu-noodles", art:"kalguksu", title:"Hand-cut Kalguksu Noodles", ko:"칼국수 면", cat:"Noodles",
 base:4, unit:{en:"servings", ko:"인분"}, makesNote:"",
 preheat:"None", chill:"Dough 1 hour in the fridge",
 scaleNote:"",
 source:{name:"Our own recipe"},
 groups:[{items:[
  "[[v:3]] cups plain flour, Type 550 (밀가루, [[g:375]]), plus extra for dusting",
  "[[g:4.5]] salt (소금, about [[v:0.75]] teaspoon)",
  "[[v:1.5]] tablespoons cooking oil (식용유, [[g:20]])",
  "[[n:21]] eating spoons lukewarm water (미지근한 물, 밥숟가락, about [[g:210]] or [[v:14]] tablespoons)"
 ]}],
 steps:[
  "Mix the flour and salt in a bowl. Add the oil and lukewarm water and stir with chopsticks until shaggy.",
  "Knead by hand for about 10 minutes until smooth and elastic. If it sticks badly, dust with a little flour.",
  "Wrap the dough or put it in a bag and chill for 1 hour.",
  "Dust the worktop generously with flour and roll the dough out flat and thin, about 2 mm.",
  "Dust the sheet well with flour, then fold it over several times into a long flat stack.",
  "Cut across with a knife into 3–5 mm strips. Shake the noodles loose straight away and toss with a little flour so they don't stick."
 ],
 notes:[
  "Ratio: 1 cup flour to 7 eating spoons (밥숟가락, about 10 ml each) of water, about 56% water. Measuring spoons are bigger: use about 4½ tablespoons (70 g) per cup instead, or the dough will be too wet.",
  "Salt and oil are scaled up 1.5× from the earlier 250 g flour version.",
  "Cook in boiling broth or water for about 4–5 minutes, until the noodles float and are tender. Shake off the excess flour first for a clearer broth.",
  "Uncooked noodles can be frozen in portions, well floured; cook from frozen."
 ]
},
{
 id:"chai-cookies", art:"chai", title:"Chai Cookies", ko:"차이 쿠키", sub:"Brown butter · chai sugar", cat:"Cookies",
 base:17, unit:{en:"cookies", ko:"개"}, makesNote:"",
 preheat:"350°F (175°C, 155°C fan): turn on while the dough rests (step 6), not at the start", chill:"Brown butter cools about 40 min (fridge, stir every 10 min); dough rests 10 min",
 scaleNote:"Cookie size and baking time stay the same; only the number of trays changes (6 cookies per tray).",
 source:{name:"Stephanie's Sweets", url:"https://stephaniessweets.com/chai-cookies/"},
 groups:[
  {name:"Cookies", items:[
   "[[v:18]] tablespoons unsalted butter (1 cup plus 2 tablespoons, [[g:255]])",
   "[[v:2.667]] cups all-purpose flour, Type 550, spooned and levelled ([[g:333]])",
   "[[v:1]] tablespoon cornstarch (Speisestärke, [[g:8]])",
   "[[v:1]] teaspoon baking soda (Natron, [[g:5]])",
   "[[v:1]] teaspoon salt ([[g:6]])",
   "[[v:2]] teaspoons ground cinnamon ([[g:5]])",
   "[[v:1]] teaspoon ground ginger ([[g:2]])",
   "[[v:0.25]] teaspoon ground nutmeg ([[g:0.5]])",
   "[[v:0.5]] teaspoon ground cardamom ([[g:1]])",
   "[[v:0.25]] teaspoon ground cloves ([[g:0.5]])",
   "[[v:1.5]] cups granulated sugar ([[g:300]])",
   "[[n:2]] large eggs, room temperature (about [[g:100]])",
   "[[v:1]] teaspoon pure vanilla extract ([[g:4]])"
  ]},
  {name:"Chai sugar", items:[
   "[[v:0.5]] cup granulated sugar ([[g:100]])",
   "[[v:1]] teaspoon ground cinnamon ([[g:2.5]])",
   "[[v:0.5]] teaspoon ground ginger ([[g:1]])",
   "[[v:0.25]] teaspoon ground nutmeg ([[g:0.5]])",
   "[[v:0.25]] teaspoon ground cardamom ([[g:0.5]])",
   "[[v:0.25]] teaspoon ground cloves ([[g:0.5]])"
  ]}
 ],
 steps:[
  "Brown the butter in a large frying pan until the milk solids separate and turn amber. Watch closely; it happens quickly.",
  "Pour the brown butter into a bowl and cool for about 40 minutes. To speed it up, refrigerate and stir every 10 minutes until cool.",
  "Sift the flour, cornstarch, baking soda, salt and all the cookie spices into a medium bowl.",
  "In a large bowl, whisk the cooled brown butter with the sugar, eggs and vanilla.",
  "Add the dry ingredients and mix with a spatula until combined. The dough will be thick.",
  "Preheat the oven and line two baking trays with baking paper. Let the dough rest 10 minutes to reduce spreading.",
  "Mix the chai sugar in a bowl. Scoop the dough with a large cookie scoop and roll each ball in the chai sugar.",
  "Place 6 balls on each tray and bake 13–15 minutes, until the edges are lightly golden.",
  "Rest the cookies on the hot tray for 6 minutes, then roll the tops in the chai sugar again. Cool on a rack."
 ],
 notes:[
  "Spoon and level the flour, or weigh it; packed flour makes the cookies dry.",
  "Take the eggs out about 2 hours ahead so they are at room temperature.",
  "Grams are our conversions; the original gives cups and spoons only."
 ]
}
];

/* ---------- Illustrations (each drawn on a 120 × 120 canvas) ---------- */
const ART = {
popover:`<g transform="translate(-4 -32)">
<circle cx="64" cy="92" r="56" fill="#e6f1ec"/><ellipse cx="64" cy="138" rx="40" ry="7" fill="#c9ddd4"/><ellipse cx="64" cy="134" rx="36" ry="6" fill="#fff"/>
<path d="M40 100 L88 100 L82 132 L46 132 Z" fill="#3c86bd"/><path d="M46 100 L49 132 M54 100 L56 132 M62 100 L63 132 M70 100 L70 132 M78 100 L77 132 M85 100 L82 128" stroke="#2a6a99" stroke-width="1.6"/><path d="M40 100 L88 100 L87 105 L41 105 Z" fill="#5aa0d2"/>
<path d="M34 102 C28 84 36 70 48 70 C48 56 60 46 72 50 C86 50 96 62 92 76 C102 82 98 100 92 102 Z" fill="#d98f3a"/><path d="M36 100 C34 92 38 86 44 84 C50 92 60 96 72 96 C82 96 90 92 94 88 C96 94 94 100 92 102 Z" fill="#b86d25"/>
<path d="M48 70 C54 66 60 66 64 70 M72 52 C80 54 84 58 86 64" stroke="#8f5219" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M60 76 C64 72 70 74 72 78" stroke="#8f5219" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<path d="M52 60 C56 54 62 52 66 54" stroke="#f6cf8a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M40 82 C42 78 44 76 47 75" stroke="#f6cf8a" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M76 44 L90 44 L92 52 L78 52 Z" fill="#fbe7a1"/><path d="M78 52 L92 52 C92 56 88 58 86 62 C84 58 80 57 78 52 Z" fill="#f6d36b"/><path d="M79 46 L86 46" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></g>`,
marble:`<g transform="translate(-130 -32)">
<circle cx="190" cy="92" r="56" fill="#f1e8f4"/><ellipse cx="190" cy="138" rx="44" ry="8" fill="#ddd0e2"/><ellipse cx="190" cy="134" rx="40" ry="7" fill="#fff"/>
<path d="M230 112 L240 70" stroke="#9aa3a8" stroke-width="3" stroke-linecap="round"/><path d="M236 74 L238 62 M240 75 L242 63 M244 76 L246 64" stroke="#9aa3a8" stroke-width="1.8" stroke-linecap="round"/>
<path d="M158 132 L222 132 L222 88 L158 68 Z" fill="#f2dcb0"/>
<path d="M162 124 C170 112 182 120 178 106 C174 94 188 92 194 102 C200 112 208 104 206 96 C204 90 212 88 218 96 L218 112 C210 104 206 116 198 116 C188 116 186 106 182 112 C178 120 172 126 162 128 Z" fill="#7a4a2c"/>
<path d="M166 120 C172 114 178 116 176 108 M196 110 C202 112 206 106 210 100" stroke="#5b3420" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="200" cy="88" r="1.6" fill="#d9bd8a"/><circle cx="170" cy="90" r="1.4" fill="#d9bd8a"/><circle cx="210" cy="124" r="1.4" fill="#d9bd8a"/><circle cx="186" cy="126" r="1.4" fill="#5b3420"/><circle cx="178" cy="98" r="1.3" fill="#5b3420"/>
<path d="M222 132 L222 88 L226 89 L226 130 Z" fill="#dcc193"/>
<path d="M156 66 L224 86 L224 92 C220 92 220 100 216 100 C213 100 213 92 210 92 L196 88 C192 88 192 96 188 96 C185 96 186 86 182 84 L170 80 C166 80 167 88 163 88 C160 88 160 78 156 76 Z" fill="#3b2418"/>
<path d="M160 68 L180 74" stroke="#6b4a36" stroke-width="2" stroke-linecap="round"/>
<path d="M170 70 C174 66 178 68 176 72 M190 76 C194 72 198 74 196 78 M206 80 C210 76 214 78 212 82" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<path d="M182 70 L185 71 M200 75 L203 76" stroke="#fff4e0" stroke-width="2" stroke-linecap="round"/></g>`,
noodle:`<g transform="translate(-256 -32)">
<circle cx="316" cy="92" r="56" fill="#fbe6e2"/>
<path d="M320 70 L352 38 M328 74 L358 46" stroke="#a5683e" stroke-width="3.5" stroke-linecap="round"/><path d="M346 44 L352 38 M352 52 L358 46" stroke="#d9a06b" stroke-width="3.5" stroke-linecap="round"/>
<ellipse cx="316" cy="96" rx="40" ry="10" fill="#f3e7d6"/>
<path d="M282 96 C290 86 296 104 304 94 C312 84 318 104 326 94 C334 84 340 102 350 94" stroke="#f6d690" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M284 100 C292 92 300 106 310 98 C318 90 326 106 336 98 C342 94 346 98 348 100" stroke="#e9c06e" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M290 92 C300 88 306 98 316 92 C326 86 334 96 342 92" stroke="#e2482a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".85"/>
<circle cx="300" cy="98" r="2.4" fill="#c4372c"/><circle cx="330" cy="92" r="2.2" fill="#c4372c"/><circle cx="318" cy="100" r="1.8" fill="#c4372c"/>
<ellipse cx="304" cy="91" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="322" cy="96" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="336" cy="98" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="296" cy="95" rx="1.6" ry="1" fill="#fff8e6"/>
<circle cx="312" cy="90" r="3" fill="#5fae4f"/><circle cx="312" cy="90" r="1.3" fill="#d8f0c8"/><circle cx="340" cy="94" r="3" fill="#5fae4f"/><circle cx="340" cy="94" r="1.3" fill="#d8f0c8"/><circle cx="292" cy="100" r="2.6" fill="#5fae4f"/><circle cx="292" cy="100" r="1.1" fill="#d8f0c8"/>
<path d="M274 98 H358 C358 122 340 140 316 140 C292 140 274 122 274 98 Z" fill="#fff"/><path d="M274 98 H358 C358 102 357 106 356 108 H276 C275 106 274 102 274 98 Z" fill="#e9eef2"/>
<path d="M280 116 H352" stroke="#2f6fa8" stroke-width="2"/><path d="M284 122 H348" stroke="#2f6fa8" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M300 140 L332 140 L328 146 L304 146 Z" fill="#dfe6ea"/><path d="M286 108 C288 118 294 126 300 130" stroke="#f4f7f9" stroke-width="3" fill="none" stroke-linecap="round"/></g>`,
carrot:`<circle cx="60" cy="60" r="56" fill="#fdf1d3"/><ellipse cx="60" cy="106" rx="42" ry="7" fill="#efdcb2"/><ellipse cx="60" cy="102" rx="38" ry="6" fill="#fff"/>
<path d="M88 24 C94 22 100 26 98 32 L74 62 C72 64 70 62 71 60 Z" fill="#f07b22"/><path d="M86 34 L91 36 M81 42 L86 44 M77 50 L81 52" stroke="#d4621a" stroke-width="1.6" stroke-linecap="round"/>
<path d="M93 25 C92 16 96 10 98 8 M95 26 C98 18 104 14 108 14 M96 27 C100 22 106 22 110 24" stroke="#5fae4f" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="76" cy="84" rx="26" ry="13" fill="#a66a33"/><ellipse cx="76" cy="80" rx="26" ry="12" fill="#c98a4b"/>
<ellipse cx="50" cy="94" rx="30" ry="12" fill="#9a5f2c"/><ellipse cx="50" cy="88" rx="30" ry="14" fill="#cf9152"/>
<rect x="28" y="92" width="5" height="2" rx="1" fill="#f07b22"/><rect x="66" y="95" width="5" height="2" rx="1" fill="#f07b22"/><rect x="88" y="82" width="5" height="2" rx="1" fill="#f07b22"/><rect x="94" y="76" width="4" height="2" rx="1" fill="#f07b22"/>
<path d="M28 86 C28 76 40 72 50 72 C62 72 72 76 72 86 C66 90 58 92 50 92 C40 92 32 90 28 86 Z" fill="#fff6ea"/>
<path d="M36 82 C42 78 52 78 58 80 M42 86 C48 84 56 84 62 86" stroke="#ecd9bf" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M44 76 l4 -2 l3 3 l-4 2 Z" fill="#8a5a3b"/><path d="M58 78 l4 -1 l2 3 l-4 1 Z" fill="#8a5a3b"/>
<circle cx="38" cy="84" r="0.9" fill="#b86d25"/><circle cx="52" cy="82" r="0.9" fill="#b86d25"/><circle cx="64" cy="84" r="0.9" fill="#b86d25"/>`,
frosting:`<circle cx="60" cy="60" r="56" fill="#fbe3ea"/><ellipse cx="60" cy="106" rx="38" ry="6" fill="#f0cdd8"/>
<path d="M80 58 L106 26" stroke="#6b8fa3" stroke-width="4" stroke-linecap="round"/>
<path d="M22 70 H98 C98 92 82 104 60 104 C38 104 22 92 22 70 Z" fill="#d0577b"/>
<path d="M30 80 C32 90 38 96 46 100" stroke="#e98aa6" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="60" cy="70" rx="38" ry="8" fill="#e07a98"/><ellipse cx="60" cy="70" rx="34" ry="6" fill="#fff6ea"/>
<path d="M30 70 C30 58 44 52 52 54 C52 44 60 36 66 38 C64 44 70 48 74 52 C84 52 92 60 90 70 Z" fill="#fff8ef"/>
<path d="M40 64 C48 60 58 60 66 62 M50 56 C56 52 62 52 66 54" stroke="#efdcc8" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M74 66 L84 52 L90 56 L80 70 Z" fill="#c7d3da"/><path d="M77 64 L85 54" stroke="#e8eef1" stroke-width="1.5" stroke-linecap="round"/>`,
pb:`<circle cx="60" cy="60" r="56" fill="#f6ead8"/><ellipse cx="60" cy="106" rx="42" ry="7" fill="#e6d2b5"/><ellipse cx="60" cy="102" rx="38" ry="6" fill="#fff"/>
<rect x="18" y="32" width="22" height="15" rx="2" fill="#4a2c1c"/><path d="M25 32 V47 M33 32 V47 M18 39.5 H40" stroke="#6b4a36" stroke-width="1.4"/>
<g transform="rotate(-30 88 36)"><ellipse cx="82" cy="36" rx="8" ry="10" fill="#e8c27a"/><ellipse cx="94" cy="36" rx="8" ry="10" fill="#e8c27a"/><path d="M78 32 l2 2 M82 28 l2 2 M92 30 l2 2 M96 38 l2 2 M86 42 l2 2" stroke="#c9a05a" stroke-width="1.5" stroke-linecap="round"/></g>
<ellipse cx="58" cy="90" rx="36" ry="13" fill="#b97835"/><ellipse cx="58" cy="83" rx="36" ry="16" fill="#d99a50"/>
<path d="M36 78 L70 90 M44 73 L78 85 M38 90 L70 75 M48 94 L78 79" stroke="#bf7f3a" stroke-width="2" stroke-linecap="round"/>
<path d="M46 80 l5 -2 l2 4 l-5 2 Z M66 82 l4 -1 l1 4 l-4 1 Z M54 90 l5 0 l-1 4 l-4 -1 Z M34 84 l4 -1 l1 3 l-4 1 Z" fill="#3b2418"/>
<rect x="58" y="76" width="2" height="2" fill="#fff"/><rect x="72" y="88" width="2" height="2" fill="#fff"/><rect x="42" y="88" width="2" height="2" fill="#fff"/>
<path d="M28 86 C34 84 36 88 42 86" stroke="#a96a2c" stroke-width="1.4" fill="none" stroke-linecap="round"/>`,
biscuit:`<circle cx="60" cy="60" r="56" fill="#e3eef7"/><ellipse cx="60" cy="106" rx="42" ry="7" fill="#c9dbe9"/><ellipse cx="60" cy="102" rx="38" ry="6" fill="#fff"/>
<path d="M93 29 L108 12" stroke="#a5683e" stroke-width="3.5" stroke-linecap="round"/>
<g transform="rotate(45 88 34)"><ellipse cx="88" cy="34" rx="7" ry="10" fill="#e0a24a"/><path d="M81 30 H95 M81 34 H95 M81 38 H95" stroke="#b8792e" stroke-width="1.5"/></g>
<circle cx="84" cy="46" r="2.5" fill="#f2b632"/>
<rect x="20" y="72" width="54" height="26" rx="10" fill="#e9b770"/><path d="M24 81 H70 M24 89 H70" stroke="#c98a4b" stroke-width="2"/><rect x="20" y="70" width="54" height="10" rx="5" fill="#d98f3a"/>
<rect x="50" y="52" width="48" height="24" rx="10" fill="#f0c27f"/><path d="M54 61 H94 M54 68 H94" stroke="#cf9152" stroke-width="2"/><rect x="50" y="50" width="48" height="9" rx="4.5" fill="#d98f3a"/>
<path d="M56 53 H70" stroke="#f6cf8a" stroke-width="2" stroke-linecap="round"/><path d="M26 73 H40" stroke="#f6cf8a" stroke-width="2" stroke-linecap="round"/>
<path d="M60 52 C62 58 58 62 62 66 M78 51 C80 56 76 58 78 62" stroke="#f2b632" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="62" cy="68" r="2" fill="#f2b632"/>`
};
ART.geotjeori = `<circle cx="60" cy="60" r="56" fill="#e6f2e2"/>
<path d="M16 30 C24 26 30 30 34 24" stroke="#4f9e45" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M18 38 C26 34 32 38 38 32" stroke="#6bb85f" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="60" cy="68" rx="40" ry="10" fill="#f3ece0"/>
<path d="M28 70 C30 52 44 44 54 48 C58 56 52 66 46 70 Z" fill="#f4f1d8"/><path d="M28 70 C30 58 38 52 46 52" stroke="#e0dcae" stroke-width="2" fill="none"/>
<path d="M44 70 C46 46 62 36 74 42 C76 54 68 64 60 70 Z" fill="#c9e3a4"/><path d="M50 66 C54 54 62 46 70 44" stroke="#f8f6e6" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M62 70 C66 50 82 46 92 54 C90 64 82 68 74 70 Z" fill="#eef0c8"/><path d="M68 68 C72 58 80 52 88 54" stroke="#dcdca6" stroke-width="2" fill="none"/>
<path d="M30 68 C34 60 40 56 46 56 M52 60 C58 52 64 48 70 48 M70 66 C74 60 80 56 86 56" stroke="#d6452c" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".85"/>
<circle cx="40" cy="62" r="1.6" fill="#b8321f"/><circle cx="58" cy="58" r="1.6" fill="#b8321f"/><circle cx="78" cy="60" r="1.6" fill="#b8321f"/><circle cx="66" cy="64" r="1.3" fill="#b8321f"/><circle cx="48" cy="66" r="1.3" fill="#b8321f"/>
<path d="M36 58 L46 50 M60 54 L72 50 M74 62 L84 58" stroke="#4f9e45" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="44" cy="60" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="62" cy="56" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="80" cy="64" rx="1.6" ry="1" fill="#fff8e6"/><ellipse cx="54" cy="64" rx="1.6" ry="1" fill="#fff8e6"/>
<path d="M18 68 H102 C102 92 84 106 60 106 C36 106 18 92 18 68 Z" fill="#fff"/><path d="M18 68 H102 C102 72 101 76 100 78 H20 C19 76 18 72 18 68 Z" fill="#e9eef2"/>
<path d="M26 88 H94" stroke="#3f8f3a" stroke-width="2"/><path d="M30 94 H90" stroke="#3f8f3a" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M44 106 L76 106 L72 112 L48 112 Z" fill="#dfe6ea"/><path d="M28 80 C30 90 36 98 42 102" stroke="#f4f7f9" stroke-width="3" fill="none" stroke-linecap="round"/>`;
ART.kalguksu = `<circle cx="60" cy="60" r="56" fill="#f6eedb"/>
<rect x="14" y="66" width="92" height="34" rx="6" fill="#c99a5b"/><rect x="14" y="62" width="92" height="32" rx="6" fill="#e2b877"/>
<path d="M20 70 H100 M20 78 H100 M20 86 H100" stroke="#d4a764" stroke-width="1.2"/>
<path d="M24 72 C30 66 34 78 40 72 C46 66 50 78 56 72" stroke="#fbf3df" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M24 80 C30 74 34 86 40 80 C46 74 50 86 56 80" stroke="#f3e6c4" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M28 88 C34 82 38 92 44 86 C48 82 52 90 56 86" stroke="#fbf3df" stroke-width="4" fill="none" stroke-linecap="round"/>
<rect x="60" y="68" width="26" height="18" rx="2" fill="#fbf3df"/><path d="M64 68 V86 M68 68 V86 M72 68 V86 M76 68 V86 M80 68 V86" stroke="#e8d7b0" stroke-width="1.2"/>
<circle cx="30" cy="66" r="1.2" fill="#fff"/><circle cx="50" cy="90" r="1.2" fill="#fff"/><circle cx="90" cy="88" r="1.2" fill="#fff"/><circle cx="72" cy="92" r="1" fill="#fff"/>
<path d="M70 58 L104 28" stroke="#b9c3c9" stroke-width="7" stroke-linecap="round"/><path d="M72 56 L102 30" stroke="#e8eef1" stroke-width="2" stroke-linecap="round"/>
<path d="M66 64 L74 54" stroke="#3b2418" stroke-width="7" stroke-linecap="round"/>
<path d="M18 40 C22 32 30 30 36 34 C42 30 48 34 46 42 C42 48 24 48 18 40 Z" fill="#fdf8ec"/><path d="M24 40 C28 36 34 36 38 38" stroke="#efe3c8" stroke-width="2" fill="none" stroke-linecap="round"/>`;
ART.chai = `<circle cx="60" cy="60" r="56" fill="#f7e9d7"/><ellipse cx="60" cy="106" rx="42" ry="7" fill="#e8d2b4"/><ellipse cx="60" cy="102" rx="38" ry="6" fill="#fff"/>
<g transform="rotate(-28 92 30)"><rect x="76" y="26" width="34" height="8" rx="4" fill="#8a4b25"/><path d="M80 30 H106" stroke="#b86d3c" stroke-width="1.5"/><path d="M78 27 C80 31 80 31 78 33" stroke="#5e3118" stroke-width="1.2" fill="none"/></g>
<g transform="translate(26 30)"><path d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z" fill="#6b3a1f"/><circle r="2.2" fill="#c8874a"/></g>
<ellipse cx="74" cy="84" rx="26" ry="13" fill="#a9682f"/><ellipse cx="74" cy="80" rx="26" ry="12" fill="#d9a05c"/>
<path d="M58 78 C64 74 70 82 76 76 C82 72 88 80 92 78 M62 86 C68 82 74 88 82 84" stroke="#b77a3a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<ellipse cx="48" cy="92" rx="30" ry="12" fill="#9e5f2a"/><ellipse cx="48" cy="86" rx="30" ry="14" fill="#e0aa66"/>
<path d="M24 84 C30 78 36 90 44 82 C50 76 56 90 64 84 M30 92 C36 88 42 94 50 90 C56 86 62 92 68 88 M34 78 C38 76 42 80 46 76" stroke="#bd8040" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="32" cy="82" r="1" fill="#fff8ea"/><circle cx="42" cy="88" r="1" fill="#fff8ea"/><circle cx="56" cy="80" r="1" fill="#fff8ea"/><circle cx="60" cy="90" r="1" fill="#fff8ea"/><circle cx="38" cy="94" r="1" fill="#fff8ea"/><circle cx="50" cy="84" r="0.9" fill="#fff8ea"/><circle cx="80" cy="76" r="1" fill="#fff8ea"/><circle cx="88" cy="82" r="1" fill="#fff8ea"/><circle cx="70" cy="80" r="0.9" fill="#fff8ea"/>
<circle cx="36" cy="86" r="0.9" fill="#7a3f1a"/><circle cx="52" cy="92" r="0.9" fill="#7a3f1a"/><circle cx="76" cy="84" r="0.9" fill="#7a3f1a"/><circle cx="46" cy="80" r="0.8" fill="#7a3f1a"/>`;
const CAT_ART = {Cookies:"pb", Cakes:"marble", Bread:"biscuit", Frosting:"frosting", Sauces:"noodle", Sides:"geotjeori", Noodles:"kalguksu"};
