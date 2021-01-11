import { IRow, ICol, IPreviewState } from "../Preview";

const text = (id: number, htmlString: string): ICol => {
  return {
    id,
    type: "text",
    data: htmlString,
  };
};

const image = (id: number, src: string, caption?: string, url?: string) => {
  return {
    id,
    type: "image",
    data: {
      src,
      caption,
      url,
    },
  };
};

// const video = (src: string, title: string, poster: string) => {
//   return {
//     type: 'video',
//     data: {
//       src,
//       title,
//       poster
//     }
//   }
// }

// const button = (label: string, url: string, block: boolean, type: 'default'|'outlined') => {
//   return {
//     type: 'button',
//     data: {
//       label,
//       url,
//       block,
//       type
//     }
//   }
// }

const embed = (id: number, code: string) => {
  return {
    id,
    type: "embed",
    data: { code },
  };
};

const preview = (
  rows: IRow[],
  fonts: string = "Roboto",
  theme: string = "#2699FB"
): IPreviewState => {
  let count = 0;
  rows.forEach((row) => {
    row.cols.forEach(() => {
      count++;
    });
  });
  return {
    colCount: count,
    rows,
    settings: {
      fonts: {
        color: "#333",
        family: fonts,
        size: 1,
      },
      margins: {
        left: 1,
        right: 1,
        bottom: 1,
        top: 1,
      },
      theme,
    },
  };
};

const articleKittens = (): IPreviewState => {
  const cols: ICol[] = [];
  cols.push(
    text(
      0,
      `<h2><strong>Bobcat displaced by California's Woolsey Fire gives birth to 4 kittens.</strong></h2>`
    )
  );
  cols.push(
    image(
      1,
      `https://www.treehugger.com/thmb/I17JGRFulDEacO8Wd-A3bVmP47U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_kittens-b2c7ca0c555847d494790a02fbc70ee9.jpg`,
      " There were three female and one male bobcat kitten in the litter. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      2,
      `<p>Just days before the <a href="https://www.mnn.com/earth-matters/wilderness-resources/blogs/californias-camp-wildfire-unprecedented-event" target="_blank">Woolsey Fire</a> started last November, a young bobcat was captured and collared so biologists could keep track of her. The fire went on to burn nearly 100,000 acres in Los Angeles and Ventura counties.</p><p>Biologists from the Santa Monica Mountains National Recreation Area found that bobcat B-362 had relocated to an area of dense vegetation in a large backyard in Westlake Village, a city about 10 miles from Thousand Oaks. She recently gave birth in her new home to four kittens: B-364, B-365, B-366 and B-367.</p>`
    )
  );
  cols.push(
    image(
      3,
      "https://www.treehugger.com/thmb/gAEiOyb2kcV422aOJXn8Lrd7DsM=/640x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_in_grass-da9ba0ead5254ed3befbb74d3574f68c.jpg",
      "The bobcat den was in an area unaffected by the fire. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      4,
      `<p>After tracking the bobcat using signals from her collar, biologists got permission from the homeowner to access the new mother's den. While the cat was away, they weighed the kittens, measured them and gave them a basic health checkup. They also tagged their ears so they could identify them in the future. </p>`
    )
  );
  cols.push(
    image(
      5,
      "https://www.treehugger.com/thmb/pUE2zxNFWGFHlkt8uWqTYo78wfc=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_kitten_being_measured-3c5d72f24c614c7da7dc9a31d63070df.jpg",
      "Each bobcat kitten was measured and weighed. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      6,
      `<p>B-362’s kittens are approximately 4 weeks old. There are three females and one male. The male is the smallest in size and weight in this litter. Their weights range from less than a pound to 1.5 pounds.</p><p>"This cat first had to deal with her habitat getting completely burned in the fire and then finding a new home in an unburned area," said biologist Joanne Moriarty, who has been studying bobcats in the area for more than 15 years. "She chose a den in thick brush where she could keep her kittens safe."</p>`
    )
  );
  cols.push(
    image(
      7,
      "https://www.treehugger.com/thmb/xLfsAQzcMB8dEdfw3wqiDCIRn4g=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_kitten_carried-687f7dfbf21049fbbdaff9a5daf7719f.jpg",
      "The kittens were approximately 4 weeks old. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      8,
      `<p>Moriarty said she was happy to see a bobcat have kittens, particularly after such a difficult period for the area. She said it has been a stressful time for wildlife, "but we're happy to see her thriving despite the challenges."</p><p>The mother bobcat, B-362, was originally captured for tagging in a preserve in Thousand Oaks that burned in the Woolsey Fire. She left the area during the fire and has been living in an unaffected location nearby.</p>`
    )
  );
  cols.push(
    image(
      9,
      "https://www.treehugger.com/thmb/R5IqfWQSQKDe74l1YXdMnBsUJoY=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_kitten_info-c6573e393d7141e3a50b8e1fa34dc73d.jpg",
      "The kittens were photographed, weighed, measured, tagged and given health exams. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      10,
      `<p>The other female bobcat that researchers are <a href="https://www.nps.gov/samo/learn/nature/bobcats.htm" target="_blank">following in the study</a> has remained in the area burned by the fire and does not appear to have had kittens. Researchers say she likely won't reproduce this year, but it's too early to know for sure.</p>`
    )
  );
  cols.push(
    image(
      11,
      "https://www.treehugger.com/thmb/JDbl_tUa7hsn_OD0yT5FWaZtUrQ=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__04__bobcat_kitten_gloved_hand-e18a9770493940908866b8cde9410892.jpg",
      "The kittens weighed from less than a pound to up to 1 1/2 pounds. (Photo: National Park Service/Flickr)"
    )
  );
  cols.push(
    text(
      12,
      `<p>Bobcat kittens typically stay in the den where they were born for about four or five weeks, then their mother will move them to other dens for brief periods. Researchers aren't certain why they do this, but think it's probably to avoid predators.</p><p>A mother bobcat will keep kittens in the den until they are about 12 weeks old, then they will start following her as she hunts and goes about her daily activities. The kittens will stay with their mother until they are between 9 and 11 months old. Then they will gradually become more independent, but still check in with their mother from time to time.</p>`
    )
  );

  const rows: IRow[] = [];
  cols.forEach((col: ICol) => {
    rows.push({ cols: [{ ...col }] });
  });
  return preview(rows);
};

const articleManGoose = (): IPreviewState => {
  const cols: ICol[] = [];
  cols.push(
    image(
      1,
      "https://pbs.twimg.com/media/AnzsRa_CQAITKC3?format=jpg&name=small"
    )
  );
  cols.push(
    text(
      2,
      `<h2><strong>Man Allegedly Bench-Presses Goose for 10 Minutes at L.A. Park; Goose Allegedly Loves It<strong></h2>`
    )
  );
  cols.push(
    text(
      3,
      '<strong>Update: "<a href="http://blogs.laweekly.com/informer/2012/03/goose_whisperer_of_hollenbeck_park.php" target="_blank">Who Is the Goose Whisperer of Hollenbeck Park?</a>"</strong>'
    )
  );
  cols.push(
    text(
      4,
      `<p><a href="http://www.reddit.com/r/funny/comments/qtbfg/you_see_the_weirdest_things_at_parks_in_la_this/?limit=500" target="_blank">Reddit</a> and <a href="http://redirectit.itelcel.com.clon-games.appspot.com/lisabunnies.tumblr.com/post/19212468675/you-see-the-weirdest-things-at-parks-in-la-this" target="_blank">Tumblr</a> exploded yesterday with a photo of a barefooted man lying on the hillside of a somewhat crummy-looking park.</p><br><p>The man -- by all appearances -- was <strong>bench-pressing a goose</strong>.</p><br><p>Scott Lowell, the B-list actor who originally <a href="https://twitter.com/#!/scolo/status/179277869225230339/photo/1" target="_blank">Tweeted</a> the photo (sort of a George Clooney lookalike who <a href="http://www.scottlowell.com/" target="_blank">does a lot of theater and cop TV</a>), writes only that the crummy park in question is located in Los Angeles, and that the goose...</p><br><p>... was not exactly protesting.</p><br><p>In response to the onslaught of questions he obviously received in response to the Tweet, Lowell went on to imply that the man and the goose have some sort of relationship outside of bench-pressing.</p><br><p>"It was ABSOLUTELY a real Goose!!" <a href="https://twitter.com/#!/scolo/status/179368199471636480" target="_blank">wrote Lowell</a>. "After bench-pressing it he cradled it, tickled it's tummy and then it walked away."</p><br><p>If all the above proves true, this magical Disney friend of the L.A. park animals has definitely given <a href="http://www.cbsnews.com/2100-18563_162-20037484.html" target="_blank">the Echo Park goose man</a> a run for his money. It's one thing to "walk around the park together like you're in love." But bench-pressing? Dr. Doolittle might call this third base.</p><br><p>[<a href="http://twitter.com/#%21/simone_electra" target="_blank">@simone_electra</a> / <a href="mailto:swilson@laweekly.com" target="_blank">swilson@laweekly.com</a> / <a href="http://twitter.com/#%21/LAWeeklyNews" target="_blank">@LAWeeklyNews</a>]</p>`
    )
  );

  const rows: IRow[] = [];
  cols.forEach((col: ICol) => {
    rows.push({ cols: [{ ...col }] });
  });
  return preview(rows, "Poppins", "#555555");
};

const articleBulbasaur = (): IPreviewState => {
  const cols: ICol[] = [];
  cols.push(
    text(
      1,
      `<h2><strong>An Ode to Bulbasaur, the Unsung Hero of the Starter Pokémon<strong></h2>`
    )
  );
  cols.push(
    image(
      2,
      "https://nerdist.com/wp-content/uploads/2019/05/Bulba-1200x676.png"
    )
  );
  cols.push(
    text(
      3,
      '<p>The call to adventure of <a href="https://nerdist.com/article/dancing-pikachu-memes-roundup/">the original <em>Pokémon&nbsp;</em>game</a> seemed like the perfect way for a generation of youngsters to explore a budding sense of agency. Not only did the story kick off with its hero leaving their sleepy hometown (pop.: like 6) for a quest across a magical world, but said hero began their journey with a character-defining decision determining which Pokémon would accompany them throughout. The ostensible choices: the bravado-indulging Charmander, the condescendingly cute Squirtle, and that munificence of spirit and imagination that is Bulbasaur.</p><br><p>The laws of probability, to the degree that I’ve googled them, would suggest that among the aspiring world leaders and animal shelter volunteers to evolve from the aforesaid generation of youngsters reared on the original <em>Pokémon</em>, we’d find equal affinity for the three critters from whom we were tasked to choose. And yet, while our cohort is lousy with devotees to Charmander and Squirtle, it’s all too rare that you find a hearted member of Team Bulbasaur.</p>'
    )
  );
  cols.push(
    image(4, "https://nerdist.com/wp-content/uploads/2019/05/Bulba4.png")
  );
  cols.push(
    text(
      5,
      `<p>When the <em>Pokémon&nbsp;</em>Gameboy game first came to the United States in 1998, it took two forms: <em>Pokémon Red</em>, on whose cartridge was plastered a battle-poised dragon with a giant flame at the end of its tale, and <em>Pokémon Blue</em>, whose cartridge opted for a likewise militaristic snarling turtle with metal cannons spewing from its shell. Conspicuously missing was <em>Pokémon</em><em> Green</em>, which was part of the original trio of cartridges when the game debuted in Japan in 1996. That cartridge showcased a gallant medley of flora and fauna. Even if you hadn’t studied up on the evolutionary patterns of the critters in question, it wouldn’t take a <a href="https://nerdist.com/article/pokemon-detective-pikachu-movie-review-ryan-reynolds/">Pikachu-caliber detective</a> to deduce which of the three starters might eventually transform into the powerhouses glorified with bombast on the game’s packaging.</p><br><p>Countering Bulbasaur’s superlative of the Pokedex’s number one spot, our society has been subconsciously poisoned against the grass-borne gem from minute one, submitting by proxy to the proclivity for binaries that has likewise plagued its activation of gender and politics. Far be it from me to presume the marketing strategies of late ’90s Nintendo, but the United States’ well documented affinity for violence and aggression may have something to do with the company basing its American campaign on the creatures armed with fire and guns in lieu of the one adorned with a big flower.</p>`
    )
  );
  cols.push(
    image(6, "https://nerdist.com/wp-content/uploads/2019/05/Bulba5.png")
  );
  cols.push(
    text(
      7,
      `<p>Marketability be damned, that’s one of the things that makes the ‘saur lineage so wonderful. Even at its I’m-babiest, Charmander’s appeal is the potential for terror and menace intrinsic of its elemental counterpart. Somehow more sinister, Squirtle panders to our biological inclination toward adorability, entrancing us with lowest common denominator cuteness all the while safeguarding the inevitability of a life’s work in projectiles. But Bulbasaur’s arsenal is entirely of the earth;&nbsp;the plucky sproutback will occasionally tackle an adversary or reprimand it by way of prehensile vines, committed through and through to fighting fair.</p><br><p>But my affection for The Bulb is not one rooted in his tenacity in the arena; if I had my way, Ryme City’s outlawing of Pokémon battles would reach the Supreme Court. What enchants me foremost about Bulbyboy is its design. In stark contrast to its colleagues, who, let’s be clear, are just a regular lizard and a regular turtle but with kinda weird tail shit going on, Bul Bul is a testament to the boundlessness of creativity. It evokes both reptile and amphibian, prehistory and distant future, the bounties of Mother Earth and the mysteries of planets far beyond our reach. It’s even got a little dog and cat in there.</p><br><p>And yet, with all this going for it, Bulbasaur is too often out-shined by the more “readily appealing” Charmander and Squirtle. Sure, they’ve got their strengths, I’ll grant. Charmander can lay waste to a field of plants and insects, and Squirtle can rock a pair of shades. But in our unsung hero—Pokémon number one—we have a rejection of our military industrial complex, a celebration of our Earth’s natural wonders, a tour de force of imagination. I’ll always choose you, Bulbasaur.</p><p style="text-align: right;"><em>Images: Warner Bros</em></p>`
    )
  );

  const rows: IRow[] = [];
  cols.forEach((col: ICol) => {
    rows.push({ cols: [{ ...col }] });
  });
  return preview(rows, "Rajdhani", "#285663");
};

const articlePuppies = (): IPreviewState => {
  const cols: ICol[] = [];
  cols.push(
    text(
      1,
      `<h2><strong>Puppies training to be service dogs 'graduate' kindergarten<strong></h2>`
    )
  );
  cols.push(
    embed(
      2,
      '<iframe scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen" src="https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiZXBmb3giLCJwIjoiZGVmYXVsdCIsInYiOiI1NjExNjEiLCJhbnZhY2siOiJseFFNTjVKNm5XdVJiM1dzOURGYkpxdmFVakphMjVBWSIsInNoYXJlTGluayI6Imh0dHA6Ly93d3cuZm94OS5jb20vbmV3cy9wdXBwaWVzLXRyYWluaW5nLXRvLWJlLXNlcnZpY2UtZG9ncy1ncmFkdWF0ZS1raW5kZXJnYXJ0ZW4iLCJwbHVnaW5zIjp7ImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cHM6Ly9wdWJhZHMuZy5kb3VibGVjbGljay5uZXQvZ2FtcGFkL2Fkcz9zej02NDB4NDgwJml1PS82Mzc5MDU2NC9rbXNwL25ld3MmY2l1X3N6cz0zMDB4MjUwJmltcGw9cyZnZGZwX3JlcT0xJmVudj12cCZvdXRwdXQ9dmFzdCZ2cG9zPXByZXJvbGwmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZ1cmw9W3JlZmVycmVyX3VybF0mY29ycmVsYXRvcj1bdGltZXN0YW1wXSZkZXNjcmlwdGlvbl91cmw9aHR0cCUzQSUyRiUyRnd3dy5mb3g5LmNvbSUyRm5ld3MlMkZwdXBwaWVzLXRyYWluaW5nLXRvLWJlLXNlcnZpY2UtZG9ncy1ncmFkdWF0ZS1raW5kZXJnYXJ0ZW4ifSwibGlicmFyeVJlcXVlc3RlZCI6dHJ1ZX19LCJodG1sNSI6dHJ1ZSwidG9rZW4iOiJkZWZhdWx0In0%3D"  width ="640" height="360"></iframe>'
    )
  );
  cols.push(
    text(
      3,
      ' <div class="author-share"> <div class="author">By <a href="mailto:?body=http://www.fox9.com/news/puppies-training-to-be-service-dogs-graduate-kindergarten">Maury Glover, FOX 9 </a> </div> </div> <div class="meta"> <p class="updated"><strong>Posted</strong><span>&nbsp;May 06 2019 08:56PM CDT</span></p> <p class="videoPostedDate-405337854"><strong>Video Posted</strong><span>&nbsp;May 06 2019 09:57PM CDT<span></span></span></p> <p class="updated"><strong>Updated</strong><span>&nbsp;May 06 2019 10:10PM CDT</span></p> </div>'
    )
  );
  cols.push(
    text(
      4,
      `<p><strong class="dateline">NEW HOPE, Minn. (FOX 9)</strong> - A group of puppies are one step closer to becoming service dogs after they've spent their past several weeks training in an unconventional place.</p><p>For a litter of puppies at Can Do Canines Monday, it’s graduation day from canine kindergarten. Instead of a diploma, they will be getting a new foster family for the next couple of months.</p><br><p>For the last five weeks, seven Labrador-golden retriever mix puppies have been training with inmates at the federal correctional facility in Duluth.</p><br><p>Now Yanni, Yale, Yeti, Yuki, Yasmin, O'Hara and Blarney will move in with volunteers, so they can get good at more than just teething and wagging their tails.</p><br>`
    )
  );
  cols.push(
    text(
      6,
      `<p>"Really what they work on is good house manners,” said Sarah Lennander of Can Do Canines. “Being good puppies, being out in public, meeting lots of people. They are really good at this age. They are like a sponge."</p><br><p>In about 18 months, this pack of pups will become service dogs for people with disabilities. Can Do Canines will match them with new owners where they will help with tasks like opening doors and drawers or detecting seizures.</p><br><p>"It’s new beginnings,” said Lennander. “We see these cute puppies. It’s amazing. They are going to grow up and change someone's life. It’s always an emotional day. It’s why I'm here."</p><br><p>For Jodi Elkins and her daughters, Yasmin will be the newest member of the family. Elkins says helping her through the next stage of doggie development is a real treat.</p><br><p>"It’s very rewarding and it’s good for our kids to see they are part of something good as well for the dogs," said Elkins.</p><br><p>Since Can Do Canines started doing the program in the late ‘80s, the organization has trained 660 puppies. They have all been placed in homes in Minnesota and Wisconsin.</p>`
    )
  );

  const rows: IRow[] = [];
  cols.forEach((col: ICol) => {
    rows.push({ cols: [{ ...col }] });
  });
  return preview(rows, "Bree Serif", "#bb8953");
};

const articles: IPreviewState[] = [
  articleKittens(),
  articleManGoose(),
  articleBulbasaur(),
  articlePuppies(),
];
const randomarticle: IPreviewState =
  articles[Math.floor(Math.random() * articles.length)];

export default randomarticle;
