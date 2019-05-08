// import { IText } from '../../../components/BuilderComponents/Text'
import { IRow, ICol, IPreviewState } from '../Preview'

const text = (id:number, htmlString: string):ICol => {
  return {
    id,
    type: 'text',
    data: htmlString
  };
}

const image = (id: number, src: string, caption?: string, url?: string) => {
  return {
    id,
    type: 'image',
    data: {
      src,
      caption,
      url
    }
  }
}


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

const preview = (rows: IRow[], fonts: string = 'Roboto', theme: string = '#2699FB'):IPreviewState => {
  let count = 0 ;
  rows.forEach(row=>{
    row.cols.forEach(() => {
      count++;
    });
  })
  return {
    colCount: count,
    rows,
    settings:{
      fonts:{
        color: '#333',
        family: fonts,
        size: 1
      },
      margins:{
        left: 1,
        right: 1,
        bottom: 1,
        top: 1
      },
      theme
    }
  }
}

const articalKittens = ():IPreviewState => {
  const cols:ICol[] = [];
  cols.push(text(0, `<h2><strong>Bobcat displaced by California's Woolsey Fire gives birth to 4 kittens.</strong></h2>`));
  cols.push(image(1, `https://media.mnn.com/assets/images/2019/04/bobcat_kittens.jpg.653x0_q80_crop-smart.jpg`, ' There were three female and one male bobcat kitten in the litter. (Photo: National Park Service/Flickr)'));
  cols.push(text(2, `<p>Just days before the <a href="https://www.mnn.com/earth-matters/wilderness-resources/blogs/californias-camp-wildfire-unprecedented-event" target="_blank">Woolsey Fire</a> started last November, a young bobcat was captured and collared so biologists could keep track of her. The fire went on to burn nearly 100,000 acres in Los Angeles and Ventura counties.</p><p>Biologists from the Santa Monica Mountains National Recreation Area found that bobcat B-362 had relocated to an area of dense vegetation in a large backyard in Westlake Village, a city about 10 miles from Thousand Oaks. She recently gave birth in her new home to four kittens: B-364, B-365, B-366 and B-367.</p>`))
  cols.push(image(3, 'https://media.mnn.com/assets/images/2019/04/bobcat_in_grass.jpg.838x0_q80.jpg', 'The bobcat den was in an area unaffected by the fire. (Photo: National Park Service/Flickr)'));
  cols.push(text(4, `<p>After tracking the bobcat using signals from her collar, biologists got permission from the homeowner to access the new mother's den. While the cat was away, they weighed the kittens, measured them and gave them a basic health checkup. They also tagged their ears so they could identify them in the future. </p>`));
  cols.push(image(5, 'https://media.mnn.com/assets/images/2019/04/bobcat_kitten_being_measured.jpg.838x0_q80.jpg', 'Each bobcat kitten was measured and weighed. (Photo: National Park Service/Flickr)'))
  cols.push(text(6, `<p>B-362’s kittens are approximately 4 weeks old. There are three females and one male. The male is the smallest in size and weight in this litter. Their weights range from less than a pound to 1.5 pounds.</p><p>"This cat first had to deal with her habitat getting completely burned in the fire and then finding a new home in an unburned area," said biologist Joanne Moriarty, who has been studying bobcats in the area for more than 15 years. "She chose a den in thick brush where she could keep her kittens safe."</p>`));
  cols.push(image(7, 'https://media.mnn.com/assets/images/2019/04/bobcat_kitten_carried.jpg.838x0_q80.jpg', 'The kittens were approximately 4 weeks old. (Photo: National Park Service/Flickr)'));
  cols.push(text(8, `<p>Moriarty said she was happy to see a bobcat have kittens, particularly after such a difficult period for the area. She said it has been a stressful time for wildlife, "but we're happy to see her thriving despite the challenges."</p><p>The mother bobcat, B-362, was originally captured for tagging in a preserve in Thousand Oaks that burned in the Woolsey Fire. She left the area during the fire and has been living in an unaffected location nearby.</p>`))
  cols.push(image(9, 'https://media.mnn.com/assets/images/2019/04/bobcat_kitten_info.jpg.838x0_q80.jpg', 'The kittens were photographed, weighed, measured, tagged and given health exams. (Photo: National Park Service/Flickr)'));
  cols.push(text(10, `<p>The other female bobcat that researchers are <a href="https://www.nps.gov/samo/learn/nature/bobcats.htm" target="_blank">following in the study</a> has remained in the area burned by the fire and does not appear to have had kittens. Researchers say she likely won't reproduce this year, but it's too early to know for sure.</p>`));
  cols.push(image(11, 'https://media.mnn.com/assets/images/2019/04/bobcat_kitten_gloved_hand.jpg.838x0_q80.jpg', 'The kittens weighed from less than a pound to up to 1 1/2 pounds. (Photo: National Park Service/Flickr)'));
  cols.push(text(12, `<p>Bobcat kittens typically stay in the den where they were born for about four or five weeks, then their mother will move them to other dens for brief periods. Researchers aren't certain why they do this, but think it's probably to avoid predators.</p><p>A mother bobcat will keep kittens in the den until they are about 12 weeks old, then they will start following her as she hunts and goes about her daily activities. The kittens will stay with their mother until they are between 9 and 11 months old. Then they will gradually become more independent, but still check in with their mother from time to time.</p>`));
  
  const rows: IRow[] = [] ;
  cols.forEach((col:ICol)=>{
    rows.push({cols: [{...col}]})
  })
  return preview(rows);
}

const articalAntMan = ():IPreviewState => {
  const cols:ICol[] = [];
  cols.push(text(0, `<h1>‘Ant-Man’ Star Paul Rudd Raises Big Money for Charity With Avengers-Autographed Captain America Shield</h1>`));
  cols.push(image(1, 'https://pbs.twimg.com/media/DeyqF_lX4AAm8-e.jpg', 'Last night at the annual @BigSlickKC fundraiser, Ant-Man himself Paul Rudd auctioned off this Captain America shield signed by all the MCU stars. It sold for $53,000 with all proceeds going to the Kansas City @ChildrensMercy hospital!'))
  cols.push(text(2, `<iframe width="100%" height="360" src="https://www.youtube.com/embed/VSF2xE07MvU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`));
  cols.push(text(3, `
    <p><em>Ant-Man and the Wasp</em> star <a href="/category/paul-rudd">Paul Rudd</a> helped bring in over $2 million dollars in a charity event benefittng Kansas’ Children’s Mercy hospital, where Rudd wielded a Captain America shield signed by the cast of <em>Avengers: Infinity War.</em></p><br>
    <p>"I spent a lot of time this past summer hanging out with a bunch of superheroes," said Rudd, <a href="http://www.kansascity.com/entertainment/article212241569.html">according to KansasCity.com</a>, who missed out on crossover epic <em>Infinity War</em> but appears next in <em>Ant-Man and the Wasp</em> and <em>Avengers 4</em>.</p><br>
    <p>Rudd wrangled up signatures from about 30 Marvel stars, including Robert Downey Jr. (Iron Man), Chris Hemsworth (Thor), Scarlett Johansson (Black Widow), and the expansive casts of <em>Guardians of the Galaxy</em> and <em>Black Panther</em>. Marvel Entertainment provided the authentic-looking shield.</p><br>
    <p>“This is real Vibranium. I'm pretty sure it's the only Vibranium item we're offering tonight,” Rudd said of the famed fictional material hailing from Wakanda responsible for making up much of the star-spangled Avenger’s trusty weapon. “It feels cool just to be holding it, I gotta be honest with you.”</p><br>
    <p>The autographed shield sold for $53,000. The star later offered a pair of tickets to the June 25th Hollywood premiere of the <em>Ant-Man</em> sequel, which teams Rudd’s ex-con-turned-superhero with newly minted partner Hope van Dyne (Evangeline Lilly).</p><br>
    <p>David Dastmalchian, who plays Scott Lang’s hacker buddy in both <em>Ant-Man</em> installments, offered a second pair of tickets, which Dastmalchian offered up in character as Kurt — complete with thick Russian accent. The tickets sold for $60,000 and $45,000, respectively.</p><br>
    <p>The star-studded Big Slick Celebrity Weekend auction saw participation from Rob Riggle (<em>The Hangover</em>), Jason Sudeikis (<em>Saturday Night Live</em>), Eric Stonestreet (<em>Modern Family</em>), David Koechner (<em>The Office</em>) and about two dozen more celebrity guests.</p><br>
    <p>Kansas City native Stonestreet offered a set visit to his hit ABC sitcom, headed into its 10th and final season, which sold for $26,000.</p><br>
    <p>Sudeikis brought in another $30,000 for an SNL set visit and Dastmalchian sold a visit to CBS’ <em>MacGyver</em>, where he plays the villain Murdoc, for another $12,000.</p><br>
    <p><em>Spider-Man: Homecoming</em> star Martin Starr offered up a set visit to HBO’s <em>Silicon Valley</em>, which sold for $22,000 after Big Slick guests Angela Kinsey (<em>The Office</em>), Charlie Day (<em>It’s Always Sunny in Philadelphia</em>), and Adam Devine (<em>Pitch Perfect</em>) offered to join in.</p><br>
    <a class="mid-content-comment" href="javascript:;" onclick="onClickActivateComments(225087,'#comments')"><span>1</span><span>comments</span></a><p>All in all, the weekend earned $2,099,787, marking the first time the annual fundraiser broke $2 million since its launch in 2010.</p><br>
    <p>Rudd next headlines <em>Ant-Man and the Wasp</em>, out July 6th, before <a href="/category/ant-man-and-the-wasp">Ant-Man and the Wasp</a> team with the wider Marvel Cinematic Universe in <em>Avengers 4</em>, out May 3, 2019.</p><br>`))

  const rows: IRow[] = [] ;
  cols.forEach((col:ICol)=>{
    rows.push({cols: [{...col}]})
  })
  return preview(rows, 'Old Standard TT', '#697689');
}

const articalManGoose = ():IPreviewState => {
  const cols:ICol[] = [];
  cols.push(image(1, 'https://images2.laweekly.com/imager/man-allegedly-bench-presses-goose-for-10-m/u/original/4242367/bench_pressing_goose.jpg'))
  cols.push(text(2, `<h2><strong>Man Allegedly Bench-Presses Goose for 10 Minutes at L.A. Park; Goose Allegedly Loves It<strong></h2>`));
  cols.push(text(3, '<strong>Update: "<a href="http://blogs.laweekly.com/informer/2012/03/goose_whisperer_of_hollenbeck_park.php" target="_blank">Who Is the Goose Whisperer of Hollenbeck Park?</a>"</strong>'));
  cols.push(text(4, `<p><a href="http://www.reddit.com/r/funny/comments/qtbfg/you_see_the_weirdest_things_at_parks_in_la_this/?limit=500" target="_blank">Reddit</a> and <a href="http://redirectit.itelcel.com.clon-games.appspot.com/lisabunnies.tumblr.com/post/19212468675/you-see-the-weirdest-things-at-parks-in-la-this" target="_blank">Tumblr</a> exploded yesterday with a photo of a barefooted man lying on the hillside of a somewhat crummy-looking park.</p><br><p>The man -- by all appearances -- was <strong>bench-pressing a goose</strong>.</p><br><p>Scott Lowell, the B-list actor who originally <a href="https://twitter.com/#!/scolo/status/179277869225230339/photo/1" target="_blank">Tweeted</a> the photo (sort of a George Clooney lookalike who <a href="http://www.scottlowell.com/" target="_blank">does a lot of theater and cop TV</a>), writes only that the crummy park in question is located in Los Angeles, and that the goose...</p><br><p>... was not exactly protesting.</p><br><p>In response to the onslaught of questions he obviously received in response to the Tweet, Lowell went on to imply that the man and the goose have some sort of relationship outside of bench-pressing.</p><br><p>"It was ABSOLUTELY a real Goose!!" <a href="https://twitter.com/#!/scolo/status/179368199471636480" target="_blank">wrote Lowell</a>. "After bench-pressing it he cradled it, tickled it's tummy and then it walked away."</p><br><p>If all the above proves true, this magical Disney friend of the L.A. park animals has definitely given <a href="http://www.cbsnews.com/2100-18563_162-20037484.html" target="_blank">the Echo Park goose man</a> a run for his money. It's one thing to "walk around the park together like you're in love." But bench-pressing? Dr. Doolittle might call this third base.</p><br><p>[<a href="http://twitter.com/#%21/simone_electra" target="_blank">@simone_electra</a> / <a href="mailto:swilson@laweekly.com" target="_blank">swilson@laweekly.com</a> / <a href="http://twitter.com/#%21/LAWeeklyNews" target="_blank">@LAWeeklyNews</a>]</p>`));

  const rows: IRow[] = [] ;
  cols.forEach((col:ICol)=>{
    rows.push({cols: [{...col}]})
  })
  return preview(rows, 'Poppins', '#555555');
}

const articals: IPreviewState[] = [articalKittens(), articalAntMan(), articalManGoose()];
const randomArtical: IPreviewState = articals[Math.floor(Math.random()*articals.length)]; 

export default randomArtical;